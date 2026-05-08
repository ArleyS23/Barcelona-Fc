import { PLANTILLA_2025_26 } from "../data/plantilla.data.js";

export async function renderPlantilla(root) {
  const title = root.querySelector("#plantilla-entrenador");
  const host = root.querySelector("#plantilla-grid");
  if (!host || !title) return;
  title.textContent = `Entrenador: ${PLANTILLA_2025_26.entrenador}`;
  host.innerHTML = PLANTILLA_2025_26.jugadores
    .map((j) => `<article class="card"><h3>${j.nombre}</h3><p>${j.posicion}</p></article>`)
    .join("");
}
