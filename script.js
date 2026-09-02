// =========================================
// HEADER — OCULTAR AL BAJAR / MOSTRAR AL SUBIR
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");

    if (!header) return;

    let ultimaPosicion = window.scrollY;

    window.addEventListener("scroll", () => {

        const posicionActual = window.scrollY;

        // Arriba de todo → header visible
        if (posicionActual <= 80) {
            header.classList.remove("header-hidden");
            ultimaPosicion = posicionActual;
            return;
        }

        // Scroll hacia abajo → ocultar
        if (posicionActual > ultimaPosicion) {
            header.classList.add("header-hidden");
        }

        // Scroll hacia arriba → mostrar
        else if (posicionActual < ultimaPosicion) {
            header.classList.remove("header-hidden");
        }

        ultimaPosicion = posicionActual;

    });

});


// =========================================
// ANIMACIONES AL HACER SCROLL
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(".scroll-animate");

    if (!elementos.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });

});
