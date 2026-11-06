import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The one orchestrated page-load moment: the old headline gets struck out,
 * then the new one types in.
 */
export default function Headline({ hero }) {
  const { struck, line, accent } = hero;
  const total = line.length + 1 + accent.length;

  const [count, setCount] = useState(() => (prefersReducedMotion() ? total : 0));
  const [struckOn, setStruckOn] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCount(total);
      setStruckOn(true);
      return;
    }

    setCount(0);
    setStruckOn(false);

    const strikeTimer = setTimeout(() => setStruckOn(true), 350);
    let interval;
    const typeTimer = setTimeout(() => {
      let n = 0;
      interval = setInterval(() => {
        n += 1;
        setCount(n);
        if (n >= total) clearInterval(interval);
      }, 55);
    }, 1000);

    return () => {
      clearTimeout(strikeTimer);
      clearTimeout(typeTimer);
      clearInterval(interval);
    };
  }, [total]);

  const typedLine = line.slice(0, count);
  const typedAccent = count > line.length + 1 ? accent.slice(0, count - line.length - 1) : "";
  const caretInAccent = count > line.length;

  return (
    <h1 className="hero-title" aria-label={`${line} ${accent}`}>
      <span className={`hero-struck${struckOn ? " is-on" : ""}`} aria-hidden="true">
        {struck}
        <i />
      </span>
      <span className="tb" aria-hidden="true">
        <span className="tb-ghost">{line}</span>
        <span className="tb-live">
          {typedLine}
          {!caretInAccent && <span className="caret" />}
        </span>
      </span>
      <span className="tb tb-accent" aria-hidden="true">
        <span className="tb-ghost">{accent}</span>
        <span className="tb-live">
          {typedAccent}
          {caretInAccent && <span className="caret" />}
        </span>
      </span>
    </h1>
  );
}
