import { animateStats } from "./stats-counter.js";

export async function renderHome(root) {
  animateStats(root.querySelectorAll("[data-stat-target]"));
}
