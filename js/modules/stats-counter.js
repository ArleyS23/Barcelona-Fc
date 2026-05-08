export function animateStats(nodes) {
  nodes.forEach((node) => {
    const target = Number(node.dataset.statTarget || 0);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(id);
      }
      node.textContent = String(current);
    }, 18);
  });
}
