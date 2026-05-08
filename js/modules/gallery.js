const GALLERY_ITEMS = [
  { title: "Celebracion Champions", category: "titulos", src: "https://picsum.photos/900/600?barca-1" },
  { title: "Messi y la aficion", category: "leyendas", src: "https://picsum.photos/900/600?barca-2" },
  { title: "Render del nuevo Camp Nou", category: "estadio", src: "https://picsum.photos/900/600?barca-3" },
  { title: "Barca Femeni campeon", category: "femeni", src: "https://picsum.photos/900/600?barca-4" },
];

export async function renderGaleria(root) {
  const host = root.querySelector("#galeria-grid");
  const filter = root.querySelector("#galeria-filter");
  const lightbox = root.querySelector("#gallery-lightbox");
  const lightboxImg = root.querySelector("#lightbox-image");
  const lightboxCaption = root.querySelector("#lightbox-caption");
  const closeBtn = root.querySelector("#lightbox-close");
  const prevBtn = root.querySelector("#lightbox-prev");
  const nextBtn = root.querySelector("#lightbox-next");
  if (!host || !filter) return;
  let visibleItems = [...GALLERY_ITEMS];
  let currentIndex = 0;

  const draw = (category = "all") => {
    visibleItems = GALLERY_ITEMS.filter((item) => category === "all" || item.category === category);
    host.innerHTML = visibleItems
      .map(
        (item, index) =>
          `<article class="gallery-item" data-index="${index}" tabindex="0" role="button" aria-label="Abrir imagen ${item.title}">
            <img loading="lazy" src="${item.src}" alt="${item.title}" />
            <div class="card"><h3>${item.title}</h3><p class="badge">${item.category}</p></div>
          </article>`,
      )
      .join("");
  };

  const show = (index) => {
    if (!visibleItems.length || !lightbox || !lightboxImg || !lightboxCaption) return;
    currentIndex = (index + visibleItems.length) % visibleItems.length;
    const item = visibleItems[currentIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    lightboxCaption.textContent = item.title;
    lightbox.hidden = false;
  };
  const hide = () => {
    if (lightbox) lightbox.hidden = true;
  };

  filter.addEventListener("change", (e) => draw(e.target.value));
  host.addEventListener("click", (event) => {
    const item = event.target.closest(".gallery-item");
    if (!item) return;
    show(Number(item.dataset.index));
  });
  host.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const item = event.target.closest(".gallery-item");
    if (!item) return;
    event.preventDefault();
    show(Number(item.dataset.index));
  });
  closeBtn?.addEventListener("click", hide);
  prevBtn?.addEventListener("click", () => show(currentIndex - 1));
  nextBtn?.addEventListener("click", () => show(currentIndex + 1));
  root.addEventListener("keydown", (event) => {
    if (!lightbox || lightbox.hidden) return;
    if (event.key === "Escape") hide();
    if (event.key === "ArrowLeft") show(currentIndex - 1);
    if (event.key === "ArrowRight") show(currentIndex + 1);
  });
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) hide();
  });
  draw();
}
