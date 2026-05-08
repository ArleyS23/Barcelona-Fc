import { PALMARES } from "../data/palmares.data.js";

export async function renderPalmares(root) {
  const host = root.querySelector("#palmares-grid");
  if (!host) return;
  host.innerHTML = PALMARES.map(
    (p) => `<article class="card"><h3>${p.nombre}</h3><p><strong>${p.cantidad}</strong> titulos</p><span class="badge">Ultima: ${p.ultima}</span></article>`,
  ).join("");
}
