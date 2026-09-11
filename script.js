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
// MIS PROYECTOS — ORDENAR SOLO EN CELULAR
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const projects = document.querySelector(".projects");
    const titles = document.querySelectorAll(".project-title-image");
    const videos = document.querySelectorAll(".projects-videos video");
    const descriptions = document.querySelectorAll(".project-description-image");

    if (!projects || titles.length < 3 || videos.length < 3 || descriptions.length < 3) {
        return;
    }

    let mobileContainer = null;
    let placeholders = [];

    function activarOrdenMobile() {

        if (mobileContainer) return;

        // Guardar la posición original de cada elemento
        const elementos = [
            ...titles,
            ...videos,
            ...descriptions
        ];

        placeholders = elementos.map((elemento) => {

            const placeholder = document.createComment("posición original");

            elemento.parentNode.insertBefore(placeholder, elemento);

            return {
                elemento: elemento,
                placeholder: placeholder
            };

        });

        // Crear contenedor para celular
        mobileContainer = document.createElement("div");
        mobileContainer.className = "projects-mobile";

        // Insertarlo después del título principal
        const projectsTitle = projects.querySelector(".projects-title");

        projectsTitle.after(mobileContainer);

        // Crear los 3 proyectos
        for (let i = 0; i < 3; i++) {

            const proyecto = document.createElement("div");
            proyecto.className = "project-mobile-item";

            proyecto.appendChild(titles[i]);
            proyecto.appendChild(videos[i]);
            proyecto.appendChild(descriptions[i]);

            mobileContainer.appendChild(proyecto);
        }

    }

    function desactivarOrdenMobile() {

        if (!mobileContainer) return;

        // Devolver cada elemento a su lugar original
        placeholders.forEach(({ elemento, placeholder }) => {
            placeholder.parentNode.insertBefore(elemento, placeholder);
            placeholder.remove();
        });

        mobileContainer.remove();

        mobileContainer = null;
        placeholders = [];
    }

    function comprobarPantalla() {

        if (window.innerWidth <= 768) {
            activarOrdenMobile();
        } else {
            desactivarOrdenMobile();
        }

    }

    comprobarPantalla();

    window.addEventListener("resize", comprobarPantalla);

});
// =========================================
// SELECTOR DE IDIOMA — ESPAÑOL / INGLÉS
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const languageToggle = document.getElementById("languageToggle");
    const languageText = document.getElementById("languageText");

    if (!languageToggle || !languageText) return;


    // =========================================
    // ELEMENTOS QUE TIENEN TRADUCCIÓN
    // =========================================

    const elementosTraducibles = document.querySelectorAll(
        "[data-es][data-en]"
    );


    // =========================================
    // CAMBIAR IDIOMA
    // =========================================

    function cambiarIdioma(idioma) {

        elementosTraducibles.forEach((elemento) => {

            elemento.textContent = elemento.getAttribute(
                `data-${idioma}`
            );

        });

// =========================================
// CAMBIAR PORTADA SEGÚN EL IDIOMA
// =========================================

const portada = document.querySelector(".hero-image");

if (portada) {

    if (idioma === "en") {
        portada.src = "titulo ingles.png";
        portada.alt = "Portfolio Guadalupe Garraza - English";
    } else {
        portada.src = "baner.png";
        portada.alt = "Portfolio Guadalupe Garraza";
    }

}
    }

    // =========================================
    // CAMBIAR TÍTULO SOBRE MÍ SEGÚN EL IDIOMA
    // =========================================

    const tituloSobreMi = document.querySelector(".about-title-image");

    if (tituloSobreMi) {

        if (idioma === "en") {
            tituloSobreMi.src = "About Me.png";
            tituloSobreMi.alt = "About Me";
        } else {
            tituloSobreMi.src = "SOBRE MI 2.png";
            tituloSobreMi.alt = "Sobre mí";
        }

    }

    // Cambiar texto del selector
        // Cambiar texto del selector

        if (idioma === "en") {
            languageText.textContent = "EN";
        } else {
            languageText.textContent = "ES";
        }


        // Guardar idioma elegido

        localStorage.setItem("idiomaPortfolio", idioma);
    }


    // =========================================
    // CLICK EN EL SELECTOR
    // =========================================

    languageToggle.addEventListener("change", () => {

        if (languageToggle.checked) {
            cambiarIdioma("en");
        } else {
            cambiarIdioma("es");
        }

    });


    // =========================================
    // RECORDAR IDIOMA
    // =========================================

    const idiomaGuardado =
        localStorage.getItem("idiomaPortfolio") || "es";


    if (idiomaGuardado === "en") {

        languageToggle.checked = true;
        cambiarIdioma("en");

    } else {

        languageToggle.checked = false;
        cambiarIdioma("es");

    }

});
