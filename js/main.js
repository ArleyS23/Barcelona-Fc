import { initNavbar } from "./modules/navbar.js";
import { navigate } from "./router.js";
import { initCuleBot } from "./chatbot/culebot.js";

function init() {
  initNavbar();
  initCuleBot();
  window.addEventListener("hashchange", navigate);
  navigate();
}

init();
