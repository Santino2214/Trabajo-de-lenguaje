const botonModo = document.getElementById("btn-modo");

function actualizarBotonModo() {
  const esOscuro = document.body.classList.contains("oscuro");
  botonModo.textContent = esOscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
  botonModo.setAttribute("aria-pressed", esOscuro);
}

