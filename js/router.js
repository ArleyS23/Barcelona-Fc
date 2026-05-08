import { loadPartial, $ } from "./utils.js";
import { setActiveNav } from "./modules/navbar.js";
import { renderHome } from "./modules/hero.js";
import { renderHistoria } from "./modules/historia.js";
import { renderPalmares } from "./modules/palmares.js";
import { renderLeyendas } from "./modules/leyendas.js";
import { renderPlantilla } from "./modules/plantilla.js";
import { renderEstadio } from "./modules/estadio.js";
import { renderGaleria } from "./modules/gallery.js";
import { renderContacto } from "./modules/contact.js";

const sectionRenderers = {
  home: renderHome,
  historia: renderHistoria,
  palmares: renderPalmares,
  leyendas: renderLeyendas,
  plantilla: renderPlantilla,
  estadio: renderEstadio,
  galeria: renderGaleria,
  contacto: renderContacto,
};

export async function navigate() {
  const sectionId = location.hash.replace("#", "") || "home";
  const app = $("#app");
  try {
    app.innerHTML = await loadPartial(sectionId);
    await sectionRenderers[sectionId]?.(app);
    setActiveNav(sectionId);
  } catch (error) {
    app.innerHTML = `<section class="section"><h2>Error</h2><p>No se pudo cargar la seccion.</p></section>`;
    console.error(error);
  }
}
