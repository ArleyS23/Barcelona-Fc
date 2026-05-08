import { ESTADIO_DATA } from "../data/estadio.data.js";

export async function renderEstadio(root) {
  const host = root.querySelector("#estadio-content");
  if (!host) return;
  host.innerHTML = `
    <p><strong>${ESTADIO_DATA.nombre}</strong> (${ESTADIO_DATA.inauguracion})</p>
    <p>Capacidad actual: ${ESTADIO_DATA.capacidadActual}</p>
    <p>Nueva capacidad: ${ESTADIO_DATA.capacidadNueva}</p>
    <ul>${ESTADIO_DATA.espaiBarca.map((f) => `<li>${f}</li>`).join("")}</ul>
  `;
}
