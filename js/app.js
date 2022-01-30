/*---------------SCROLL HACIA ABAJO------------------*/

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", scroll);

function scroll() {
    window.scrollBy({
        top: 10000,
        behavior: "smooth",
    });
}

/*-----------------BARS MENU----------------------*/

window.addEventListener("load", () => {
    const menu_header = document.querySelector(".header");
    const btn_menu = document.querySelector(".bars_menu");

    btn_menu.addEventListener("click", () => {
        menu_header.classList.toggle("header_open");
        const vivi_tu_hogar = document.querySelector(".subdiv_inicio");
        let style_element = window.getComputedStyle(vivi_tu_hogar);
        let element_display = style_element.getPropertyValue("display");

        setTimeout(() => {
            if (element_display === "flex") {
                vivi_tu_hogar.style.display = "none";
            } else if (element_display === "none") {
                vivi_tu_hogar.style.display = "flex";
            }
        }, 200);
    });
});

/*-----------------BARS MENU----------------------*/

const validarForm = (e) => {
    e.preventDefault();
    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;
    const regName = /^[a-zA-Z ]+$/;
    const regEmail = /\S+@\S+.\S+/;

    if (
        regName.test(nombre) &&
        regName.test(apellido) &&
        regEmail.test(email) &&
        mensaje
    ) {
        alert("¡Formulario completado satisfactoriamente!");
    } else {
        let warnings = [];

        if (!regName.test(nombre)) {
            warnings.push("El nombre es inválido");
        }
        if (!regName.test(apellido)) {
            warnings.push("El apellido es inválido");
        }
        if (!regEmail.test(email)) {
            warnings.push("El e-mail es inválido");
        }
        if (!mensaje) {
            warnings.push("El campo de mensaje esta vacío");
        }
        confirm("- " + warnings.join(".\n- "));
    }
};

const form = document.getElementById("form");

form.addEventListener("submit", validarForm);