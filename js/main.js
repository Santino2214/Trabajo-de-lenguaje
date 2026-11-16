const botonModo = document.getElementById("btn-modo");

function actualizarBotonModo() {
  const esOscuro = document.body.classList.contains("oscuro");
  botonModo.textContent = esOscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
  botonModo.setAttribute("aria-pressed", esOscuro);
}

if (botonModo) {
  try {
    if (localStorage.getItem("modo") === "oscuro") {
      document.body.classList.add("oscuro");
    }
  } catch (e) {
  }
  actualizarBotonModo();

  botonModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    actualizarBotonModo();
    try {
      const modo = document.body.classList.contains("oscuro") ? "oscuro" : "claro";
      localStorage.setItem("modo", modo);
    } catch (e) {
    }
  });
}
