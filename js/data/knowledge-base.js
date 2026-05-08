export const KNOWLEDGE_BASE = {
  club: {
    nombre: "Futbol Club Barcelona",
    fundacion: "29 de noviembre de 1899",
    lema: "Mes que un club",
    estadio: "Camp Nou",
    entrenador_actual: "Hansi Flick",
  },
  palmares: {
    champions: 5,
    laliga: 27,
    copa_del_rey: 31,
    total: "128+ titulos oficiales",
  },
  leyendas: ["Messi", "Cruyff", "Xavi", "Iniesta", "Puyol", "Ronaldinho"],
  reglas: [
    "Solo responder sobre FC Barcelona",
    "Si la pregunta es fuera de tema, redirigir al Barca",
  ],
};

export const KNOWLEDGE_BASE_TEXT = JSON.stringify(KNOWLEDGE_BASE, null, 2);
