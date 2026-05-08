export const CONFIG = {
  CHATBOT_NAME: "CuleBot",
  MAX_CHAT_HISTORY: 10,
  GEMINI_API_KEY:
    globalThis?.__ENV__?.GEMINI_API_KEY || globalThis?.__CULEBOT_API_KEY__ || "",
};

export const NAV_ITEMS = [
  { id: "home", label: "Inicio", icon: "fa-home" },
  { id: "historia", label: "Historia", icon: "fa-landmark" },
  { id: "palmares", label: "Palmares", icon: "fa-trophy" },
  { id: "leyendas", label: "Leyendas", icon: "fa-star" },
  { id: "plantilla", label: "Plantilla", icon: "fa-users" },
  { id: "estadio", label: "Camp Nou", icon: "fa-building" },
  { id: "galeria", label: "Galeria", icon: "fa-images" },
  { id: "contacto", label: "Contacto", icon: "fa-envelope" },
];
