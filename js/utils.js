export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

export async function loadPartial(sectionId) {
  const res = await fetch(`./pages/${sectionId}.html`);
  if (!res.ok) throw new Error(`No se pudo cargar ${sectionId}.html`);
  return res.text();
}

export function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (typeof text === "string") el.textContent = text;
  return el;
}

export function safeText(value) {
  return String(value ?? "");
}
