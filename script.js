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
        portada.classList.add("english-cover");
    } else {
        portada.src = "baner.png";
        portada.alt = "Portfolio Guadalupe Garraza";
        portada.classList.remove("english-cover");
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

// =========================================
// CAMBIAR IMAGEN SOBRE MÍ SEGÚN EL IDIOMA
// =========================================

const imagenSobreMi = document.querySelector(".about-main-image");

if (imagenSobreMi) {

    if (idioma === "en") {
        imagenSobreMi.src = "foto About Me.png";
        imagenSobreMi.alt = "About Me";
        imagenSobreMi.classList.add("english-about");
    } else {
        imagenSobreMi.src = "FOTO SOBRE MI.png";
        imagenSobreMi.alt = "Sobre mí";
        imagenSobreMi.classList.remove("english-about");
    }

}
        // =========================================
// CAMBIAR TÍTULO HABILIDADES SEGÚN EL IDIOMA
// =========================================

const tituloHabilidades = document.querySelector(".skills-title-image");

if (tituloHabilidades) {

    if (idioma === "en") {
        tituloHabilidades.src = "titulo skills.png";
        tituloHabilidades.alt = "Skills";
        tituloHabilidades.classList.add("english-skills");
    } else {
        tituloHabilidades.src = "habilidades 2.png";
        tituloHabilidades.alt = "Habilidades";
        tituloHabilidades.classList.remove("english-skills");
    }

}
// =========================================
// CAMBIAR TÍTULO MIS PROYECTOS SEGÚN EL IDIOMA
// =========================================

const tituloProyectos = document.querySelector(".projects-title-image");

if (tituloProyectos) {

    if (idioma === "en") {
    tituloProyectos.src = "titulo my projects.png";
    tituloProyectos.classList.add("english-projects");
    tituloProyectos.alt = "My Projects";
} else {
    tituloProyectos.src = "mis proyectos (2).png";
    tituloProyectos.classList.remove("english-projects");
    tituloProyectos.alt = "Mis Proyectos";
}

}
// =========================================
// CAMBIAR TÍTULOS DE PROYECTOS SEGÚN EL IDIOMA
// =========================================

const titulosProyectos = document.querySelectorAll(".project-title-image");

if (titulosProyectos.length >= 3) {

 if (idioma === "en") {

    titulosProyectos[0].src = "PROYECTO 1.png";
    titulosProyectos[0].alt = "Project 1";

    titulosProyectos[1].src = "PROYECTO 2.png";
    titulosProyectos[1].alt = "Project 2";

    titulosProyectos[2].src = "PROYECTO 3.png";
    titulosProyectos[2].alt = "Project 3";

    const videosProyectos = document.querySelector(".projects-videos");

    if (videosProyectos) {
        videosProyectos.classList.add("english-project-videos");
    }

} else {

    titulosProyectos[0].src = "titulo 1.png";
    titulosProyectos[0].alt = "Ecommerce de producto digital";

    titulosProyectos[1].src = "titulo 2.png";
    titulosProyectos[1].alt = "Página web personalizada";

    titulosProyectos[2].src = "titulo 3.png";
    titulosProyectos[2].alt = "Página web de Dropshipping";

    const videosProyectos = document.querySelector(".projects-videos");

    if (videosProyectos) {
        videosProyectos.classList.remove("english-project-videos");
    }

}
// =========================================
// CAMBIAR SOBRES DE NAVEGACIÓN SEGÚN EL IDIOMA
// =========================================

const sobres = document.querySelectorAll(".sobres-navegacion .sobre-boton img");

if (sobres.length >= 5) {

    if (idioma === "en") {

        sobres[0].src = "sobre ingles 1.png";
        sobres[0].alt = "Home";

        sobres[1].src = "sobre ingles 2.png";
        sobres[1].alt = "About Me";

        sobres[2].src = "sobre ingles 3.png";
        sobres[2].alt = "My Projects";

        sobres[3].src = "sobre ingles 4 (2).png";
        sobres[3].alt = "Certificates";

        sobres[4].src = "sobre ingles 5.png";
        sobres[4].alt = "Skills";

    } else {

        sobres[0].src = "sobre español 1.png";
        sobres[0].alt = "Inicio";

        sobres[1].src = "sobre español 2.png";
        sobres[1].alt = "Sobre mí";

        sobres[2].src = "sobre español 3.png";
        sobres[2].alt = "Mis Proyectos";

        sobres[3].src = "sobre español 4.png";
        sobres[3].alt = "Certificados";

        sobres[4].src = "sobre español 5.png";
        sobres[4].alt = "Habilidades";

    }

}
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
