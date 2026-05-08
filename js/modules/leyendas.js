import { LEYENDAS } from "../data/leyendas.data.js";

export async function renderLeyendas(root) {
  const host = root.querySelector("#leyendas-grid");
  if (!host) return;
  host.innerHTML = LEYENDAS.map(
    (item) =>
      `<article class="card"><h3>${item.nombre}</h3><p>${item.detalle}</p></article>`,
  ).join("");
}
