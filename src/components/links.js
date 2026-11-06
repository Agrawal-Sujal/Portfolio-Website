// Turn the values stored in Firestore into hrefs.
export function mailHref(email) {
  if (!email) return "";
  return email.startsWith("mailto:") ? email : `mailto:${email}`;
}

export function contactHref(links = {}) {
  return mailHref(links.email) || links.linkedin || "#";
}
