import { HISTORIA_HITOS } from "../data/historia.data.js";
import { createEl } from "../utils.js";

export async function renderHistoria(root) {
  const container = root.querySelector("#historia-timeline");
  if (!container) return;
  container.innerHTML = "";
  HISTORIA_HITOS.forEach((hito) => {
    const item = createEl("article", "timeline-item");
    item.innerHTML = `<h3>${hito.anio}</h3><p>${hito.evento}</p>`;
    container.append(item);
  });
}
