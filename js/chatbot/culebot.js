import { askCuleBot } from "./culebot-api.js";
import { appendMessage, setTyping } from "./culebot-ui.js";
import { CONFIG } from "../config.js";

export function initCuleBot() {
  const bubble = document.getElementById("culebot-bubble");
  const panel = document.getElementById("culebot-panel");
  const closeBtn = document.getElementById("culebot-close");
  const form = document.getElementById("culebot-form");
  const input = document.getElementById("culebot-input");
  const messages = document.getElementById("culebot-messages");
  const history = [];

  if (!bubble || !panel || !form || !input || !messages) return;

  appendMessage(messages, "assistant", "Hola Culer. Soy CuleBot, preguntame sobre el Barca.");

  bubble.addEventListener("click", () => {
    panel.hidden = false;
    input.focus();
  });
  closeBtn?.addEventListener("click", () => {
    panel.hidden = true;
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const content = input.value.trim();
    if (!content) return;
    appendMessage(messages, "user", content);
    history.push({ role: "user", content });
    input.value = "";
    setTyping(messages, true);
    const answer = await askCuleBot(content, history.slice(-CONFIG.MAX_CHAT_HISTORY));
    setTyping(messages, false);
    appendMessage(messages, "assistant", answer);
    history.push({ role: "assistant", content: answer });
  });
}
