// Utilidades comunes de la portada y las páginas legales
const $id = (id) => document.getElementById(id);
(() => {
  const anio = $id("anio");
  if (anio) anio.textContent = new Date().getFullYear();
  // Aviso informativo: solo se usa almacenamiento técnico, no hace falta consentimiento
  const aviso = $id("avisoCookies");
  if (!aviso) return;
  let visto = false;
  try { visto = localStorage.getItem("punch-aviso-cookies") === "1"; } catch {}
  if (!visto) aviso.hidden = false;
  $id("cerrarCookies")?.addEventListener("click", () => {
    aviso.hidden = true;
    try { localStorage.setItem("punch-aviso-cookies", "1"); } catch {}
  });
})();
