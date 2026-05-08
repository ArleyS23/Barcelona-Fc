import { CONFIG } from "../config.js";
import { KNOWLEDGE_BASE_TEXT } from "../data/knowledge-base.js";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const SYSTEM_PROMPT = `Eres CuleBot, asistente del FC Barcelona.
Reglas:
1) Responde solo temas del FC Barcelona.
2) Si preguntan algo fuera del Barca, redirige educadamente.
3) Se conciso (maximo 3 parrafos).
Base:
${KNOWLEDGE_BASE_TEXT}`;

export async function askCuleBot(userMessage, history = []) {
  if (!CONFIG.GEMINI_API_KEY) {
    return "CuleBot no esta configurado. Agrega GEMINI_API_KEY para activar respuestas IA.";
  }
  try {
    const payload = {
      contents: [
        ...history.map((item) => ({
          role: item.role === "assistant" ? "model" : "user",
          parts: [{ text: item.content }],
        })),
        { role: "user", parts: [{ text: `SISTEMA:\n${SYSTEM_PROMPT}\n\nUsuario: ${userMessage}` }] },
      ],
      generationConfig: { temperature: 0.6, maxOutputTokens: 512 },
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${CONFIG.GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`Gemini API error ${response.status}`);
    const data = await response.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No pude procesar esa pregunta, intenta de nuevo."
    );
  } catch (error) {
    console.error("CuleBot error", error);
    return "Tuve un problema tecnico temporal. Intentalo de nuevo en un momento.";
  }
}
