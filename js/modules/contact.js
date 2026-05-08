export async function renderContacto(root) {
  const form = root.querySelector("#contact-form");
  const feedback = root.querySelector("#contact-feedback");
  if (!form || !feedback) return;

  form.querySelectorAll("input[required], textarea[required], select[required]").forEach((field) => {
    field.addEventListener("input", () => {
      field.setCustomValidity("");
      if (!field.checkValidity()) {
        field.setCustomValidity("Completa este campo para continuar.");
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("nombre") || "").trim();
    const email = String(data.get("email") || "").trim();
    const msg = String(data.get("mensaje") || "").trim();
    const antiguedad = String(data.get("antiguedad") || "").trim();
    if (!name || !email || !msg || !antiguedad) {
      feedback.textContent = "Completa todos los campos obligatorios.";
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = "El email no tiene un formato valido.";
      return;
    }
    feedback.textContent = "Gracias por tu mensaje. Visca el Barca!";
    form.reset();
  });
}
