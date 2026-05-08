# FC Barcelona Landing Page

Landing page modular e interactiva del FC Barcelona con CuleBot integrado.

## Stack
- HTML5 semantico
- CSS3 modular con variables
- JavaScript ES modules (sin framework)
- API Gemini 2.0 Flash para CuleBot

## Ejecutar
1. Sirve el proyecto con cualquier servidor estatico (Live Server, `python -m http.server`, etc.).
2. Copia `.env.example` a `.env` y define `GEMINI_API_KEY`.
3. Si tu flujo usa inyeccion global, expone `window.__ENV__.GEMINI_API_KEY`.

## Estructura
- `css/`: design tokens, layout y componentes.
- `js/data/`: datos canonicos del club.
- `js/modules/`: renderizadores por seccion.
- `js/chatbot/`: logica, UI e integracion Gemini de CuleBot.
- `pages/`: parciales HTML por seccion.

## Checklist de calidad aplicado
- Navegacion hash SPA con carga lazy de parciales.
- Render data-driven en historia, palmares, leyendas, plantilla, estadio.
- Formulario de contacto con validacion basica cliente.
- CuleBot con fallback seguro cuando falta API key.
- Estilos responsive base para navbar/contacto/chat.
