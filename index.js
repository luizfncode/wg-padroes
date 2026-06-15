const menuMobile = document.querySelector(".menu-mobile");
const botao = document.querySelector("header button i");

function abrir() {
    menuMobile.classList.toggle("active");

    if (menuMobile.classList.contains("active")) {
        botao.classList.remove("ti-menu-2");
        botao.classList.add("ti-x");
    } else {
        botao.classList.remove("ti-x");
        botao.classList.add("ti-menu-2");
    }
}

document.querySelectorAll(".menu-mobile a").forEach(link => {
    link.addEventListener("click", () => {
        menuMobile.classList.remove("active");

        botao.classList.remove("ti-x");
        botao.classList.add("ti-menu-2");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        menuMobile.classList.remove("active");

        botao.classList.remove("ti-x");
        botao.classList.add("ti-menu-2");
    }
});