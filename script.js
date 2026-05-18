document.addEventListener("DOMContentLoaded", () => {
    
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // --- INTERACCIÓN DEL DOM 2: Galería / Selector Dinámico de Platillos ---
    const botonesPlatillo = document.querySelectorAll(".btn-platillo");
    const imagenDinamica = document.getElementById("imagenDinamica");

    botonesPlatillo.forEach(boton => {
        boton.addEventListener("click", () => {
            // Remover estado activo de los otros botones
            botonesPlatillo.forEach(btn => btn.classList.remove("active"));
            // Activar botón actual
            boton.classList.add("active");
            // Cambiar el atributo src de la imagen con la URL guardada en data-img
            const nuevaImgUrl = boton.getAttribute("data-img");
            imagenDinamica.setAttribute("src", nuevaImgUrl);
        });
    });

    // --- 5. VALIDACIÓN DEL FORMULARIO CON JAVASCRIPT ---
    const formulario = document.getElementById("formularioContacto");
    const nombreInput = document.getElementById("nombre");
    const correoInput = document.getElementById("correo");
    const mensajeInput = document.getElementById("mensaje");

    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorMensaje = document.getElementById("errorMensaje");
    const exitoFormulario = document.getElementById("exitoFormulario");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Evita que la página se recargue automáticamente
        
        let formularioValido = true;

        // Limpiar mensajes previos de error o éxito
        errorNombre.textContent = "";
        errorCorreo.textContent = "";
        errorMensaje.textContent = "";
        exitoFormulario.textContent = "";

        // Validar Nombre (No vacío y mínimo 3 caracteres)
        if (nombreInput.value.trim() === "") {
            errorNombre.textContent = "Por favor, escribe tu nombre.";
            formularioValido = false;
        } else if (nombreInput.value.trim().length < 3) {
            errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
            formularioValido = false;
        }

        // Validar Correo Electrónico con Expresión Regular estándar
        const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (correoInput.value.trim() === "") {
            errorCorreo.textContent = "Por favor, ingresa tu correo electrónico.";
            formularioValido = false;
        } else if (!patronCorreo.test(correoInput.value.trim())) {
            errorCorreo.textContent = "El formato de correo electrónico no es válido.";
            formularioValido = false;
        }

        // Validar Mensaje (No vacío y mínimo 10 caracteres)
        if (mensajeInput.value.trim() === "") {
            errorMensaje.textContent = "Por favor, escribe un mensaje.";
            formularioValido = false;
        } else if (mensajeInput.value.trim().length < 10) {
            errorMensaje.textContent = "El mensaje debe ser más detallado (mínimo 10 caracteres).";
            formularioValido = false;
        }

        // Si todo está correcto, simular envío exitoso
        if (formularioValido) {
            exitoFormulario.textContent = "¡Muchas gracias! Tu solicitud ha sido enviada con éxito. Te responderemos pronto.";
            formulario.reset(); // Vaciar las cajas de texto automáticamente
        }
    });
});
