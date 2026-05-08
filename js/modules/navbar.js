import { NAV_ITEMS } from "../config.js";
import { $, createEl } from "../utils.js";

export function initNavbar() {
  const menu = $("#navbar-menu");
  const toggle = $("#navbar-toggle");
  const nav = $("#main-navbar");

  menu.innerHTML = "";
  NAV_ITEMS.forEach((item) => {
    const li = createEl("li");
    const a = createEl("a", "navbar__link");
    a.href = `#${item.id}`;
    a.dataset.section = item.id;
    a.innerHTML = `<i class="fas ${item.icon}" aria-hidden="true"></i><span>${item.label}</span>`;
    li.append(a);
    menu.append(li);
  });

  toggle?.addEventListener("click", () => nav.classList.toggle("is-open"));
}

export function setActiveNav(sectionId) {
  document.querySelectorAll(".navbar__link").forEach((link) => {
    link.classList.toggle("active", link.dataset.section === sectionId);
  });
}
