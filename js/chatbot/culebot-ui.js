import { createEl } from "../utils.js";

export function appendMessage(container, role, text) {
  const msg = createEl("p", `chat-msg ${role === "user" ? "user" : "bot"}`, text);
  container.append(msg);
  container.scrollTop = container.scrollHeight;
}

export function setTyping(container, enabled) {
  const existing = container.querySelector(".chat-typing");
  if (enabled && !existing) {
    const typing = createEl("p", "chat-msg bot chat-typing", "CuleBot escribiendo...");
    container.append(typing);
    container.scrollTop = container.scrollHeight;
  }
  if (!enabled && existing) existing.remove();
}
