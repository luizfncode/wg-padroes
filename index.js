function abrir() {
    menuMobile.classList.toggle("active");
    document.body.classList.toggle("no-scroll");

    if (menuMobile.classList.contains("active")) {
        botao.classList.replace("ti-menu-2", "ti-x");
    } else {
        botao.classList.replace("ti-x", "ti-menu-2");
    }
}

document.querySelectorAll(".menu-mobile a").forEach(link => {
    link.addEventListener("click", () => {
        menuMobile.classList.remove("active");
        document.body.classList.remove("no-scroll");
        botao.classList.replace("ti-x", "ti-menu-2");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        menuMobile.classList.remove("active");
        document.body.classList.remove("no-scroll");
        botao.classList.replace("ti-x", "ti-menu-2");
    }
});