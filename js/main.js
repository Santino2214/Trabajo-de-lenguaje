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

const formulario = document.getElementById("form-contacto");

function mostrarError(campo, mensaje) {
  campo.classList.add("is-invalid");
  document.getElementById("error-" + campo.id).textContent = mensaje;
}

function limpiarError(campo) {
  campo.classList.remove("is-invalid");
  document.getElementById("error-" + campo.id).textContent = "";
}

if (formulario) {
  const campoNombre = document.getElementById("nombre");
  const campoEmail = document.getElementById("email");
  const campoMensaje = document.getElementById("mensaje");
  const resultado = document.getElementById("resultado-form");

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    resultado.innerHTML = "";
    let hayErrores = false;

    if (campoNombre.value.trim().length < 2) {
      mostrarError(campoNombre, "Escribí tu nombre (mínimo 2 letras).");
      hayErrores = true;
    } else {
      limpiarError(campoNombre);
    }

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(campoEmail.value.trim())) {
      mostrarError(campoEmail, "Ingresá un email válido, por ejemplo nombre@correo.com.");
      hayErrores = true;
    } else {
      limpiarError(campoEmail);
    }

    if (campoMensaje.value.trim().length < 10) {
      mostrarError(campoMensaje, "El mensaje debe tener al menos 10 caracteres.");
      hayErrores = true;
    } else {
      limpiarError(campoMensaje);
    }

    if (hayErrores) {
      resultado.innerHTML =
        '<div class="alert alert-danger" role="alert">Revisá los campos marcados e intentá de nuevo.</div>';
    } else {
      const nombre = campoNombre.value.trim();
      resultado.innerHTML =
        '<div class="alert alert-success" role="alert">¡Gracias, ' + nombre +
        '! Recibimos tu mensaje y te vamos a responder pronto.</div>';
      formulario.reset();
    }
  });
}

const botonSubir = document.getElementById("btn-subir");

if (botonSubir) {
  window.addEventListener("scroll", () => {
    botonSubir.classList.toggle("visible", window.scrollY > 300);
  });
}