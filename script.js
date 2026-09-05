// =========================================
// HEADER — OCULTAR AL BAJAR / MOSTRAR AL SUBIR
// =========================================

const header = document.querySelector(".header");

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
// =========================================
// HEADER: OCULTAR AL BAJAR / MOSTRAR AL SUBIR
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".header");

    if (!header) return;

    let lastScroll = 0;

    window.addEventListener("scroll", function () {

        const currentScroll = window.pageYOffset;

        // Estamos arriba de todo
        if (currentScroll <= 50) {
            header.classList.remove("header-hidden");
            lastScroll = currentScroll;
            return;
        }

        // Bajando
        if (currentScroll > lastScroll) {
            header.classList.add("header-hidden");
        }

        // Subiendo
        if (currentScroll < lastScroll) {
            header.classList.remove("header-hidden");
        }

        lastScroll = currentScroll;

    });

});
// =========================================
// ANIMACIONES AL HACER SCROLL
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(".scroll-animate");

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
// =========================================
// MENÚ CELULAR — ABRIR / CERRAR
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    if (!hamburger || !menu) return;

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("menu-abierto");
    });

    // Cerrar el menú al tocar una opción
    const enlaces = menu.querySelectorAll("a");

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menu.classList.remove("menu-abierto");
        });
    });

});
// =========================================
// MENÚ CELULAR — ABRIR / CERRAR ☰
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    if (!hamburger || !menu) return;

    hamburger.addEventListener("click", function () {

        menu.classList.toggle("menu-open");

    });

});
