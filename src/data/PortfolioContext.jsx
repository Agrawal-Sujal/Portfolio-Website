import { createContext, useContext, useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db, firebaseConfigured } from "../firebase";
import { defaults } from "./defaults";

const SINGLES = ["profile", "skills"]; // each lives at {name}/main
const LISTS = [
  "experience",
  "education",
  "achievements",
  "profiles",
  "certifications",
  "projects",
  "por",
];
const TIMEOUT_MS = 6000;

const isObject = (v) => v && typeof v === "object" && !Array.isArray(v);

// Objects merge key by key (so a partial Firestore doc keeps the other defaults); arrays replace.
function merge(base, remote) {
  if (!isObject(base) || !isObject(remote)) return remote ?? base;
  const out = { ...base };
  for (const key of Object.keys(remote)) out[key] = merge(base[key], remote[key]);
  return out;
}

const byOrder = (a, b) => (a.order ?? 999) - (b.order ?? 999);

async function loadFromFirestore() {
  const [singles, lists] = await Promise.all([
    Promise.all(SINGLES.map((name) => getDoc(doc(db, name, "main")))),
    Promise.all(LISTS.map((name) => getDocs(collection(db, name)))),
  ]);

  const data = {};
  SINGLES.forEach((name, i) => {
    data[name] = singles[i].exists() ? merge(defaults[name], singles[i].data()) : defaults[name];
  });
  // Once Firebase is reachable it is the source of truth: an empty collection stays empty.
  LISTS.forEach((name, i) => {
    data[name] = lists[i].docs.map((d) => ({ id: d.id, ...d.data() })).sort(byOrder);
  });
  return data;
}

const PortfolioContext = createContext(null);

export function PortfolioProvider({ children }) {
  const [state, setState] = useState(
    firebaseConfigured
      ? { status: "loading", source: "firebase", data: defaults }
      : { status: "ready", source: "local", data: defaults }
  );

  useEffect(() => {
    if (!firebaseConfigured) return;
    let cancelled = false;

    const timeout = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Firestore timed out")), TIMEOUT_MS)
    );

    Promise.race([loadFromFirestore(), timeout])
      .then((data) => !cancelled && setState({ status: "ready", source: "firebase", data }))
      .catch((error) => {
        console.warn("[portfolio] Could not load Firestore, using built-in defaults.", error);
        if (!cancelled) setState({ status: "ready", source: "local", data: defaults });
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return <PortfolioContext.Provider value={state}>{children}</PortfolioContext.Provider>;
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used inside <PortfolioProvider>");
  return ctx;
}
