// MENÚ DESPLEGABLE

const nav_menu = document.getElementById("nav-menu"),
    show_menu = document.getElementById("bar-menu"),
    close_menu = document.getElementById("close-menu");

show_menu.addEventListener("click", () => {
    nav_menu.classList.toggle("show");
});

close_menu.addEventListener("click", () => {
    nav_menu.classList.remove("show");
});

// MODO NOCTURNO DIURNO 

const theme_mode = document.getElementById("switch"); // Botón de cambio de modo
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const body = document.documentElement;

theme_mode.addEventListener("click", () =>{
    body.classList.toggle("light");
    change_icon();
})

change_theme();

function change_icon() {
    if (body.classList.contains("light")) {
        sun.style.display = "none";
        moon.style.display = "block";
        localStorage.setItem("light-mode", "true");
    } else{
        sun.style.display = "block";
        moon.style.display = "none";
        localStorage.setItem("light-mode", "false");
    }
}

function change_theme() { 
    if (localStorage.getItem("light-mode") === "true") {
        body.classList.toggle("light");
        change_icon();
    }
    else{
        body.classList.remove("light");
        change_icon();
    }
}

// Validación formulario correo

const form_contacto = document.getElementById("form-contact");
const inputs_contacto = document.querySelectorAll("#form-contact input");
const text_area = document.querySelectorAll("#form-contact textarea");
const expresiones = {
    subject: /^[a-zA-Z0-9À-ÿ]{4,16}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/,
    message: /^.{4,100}$/
}

const campos = {
    subject: false,
    email: false,
    phone: false,
    mensaje: false
}

function validar_form(e) {
    switch (e.target.name) {
        case "subject": 
            validar_campo(expresiones.subject, e.target, "subject", "Ingrese un nombre válido");
            break;
        case "email":
            validar_campo(expresiones.email, e.target, "email","Ingrese un correo válido");
            break
        case "phone":
            validar_campo(expresiones.phone, e.target, "phone","Ingrese un número válido");
            break
        case "mensaje":
            validar_campo(expresiones.message, e.target, "mensaje", "Ingrese un mensaje válido");
            break
    }
}

function validar_campo(expresion, input, campo,txt) {
    if (expresion.test(input.value)) {
        document.getElementById(campo).classList.remove("error");
        document.getElementById(`error-msg ${campo}`).innerHTML = "";
        campos[campo] = true;
    }else{
        document.getElementById(campo).classList.add("error");
        document.getElementById(`error-msg ${campo}`).innerHTML = txt;
        campos[campo] = false;
    }

    if (campos[campo] && campos.mensaje) {
        document.getElementById("send-button").disabled = false;
    }else {
        document.getElementById("send-button").disabled = true;
    }
}


form_contacto.addEventListener("submit", (e) => {
    e.preventDefault();
    if (campos) {
        Swal.fire({
            icon: 'success',
            title: '¡Correo enviado!',
            text: '¡El correo se envió correctamente!',
        });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Al parecer hay campos incorrectos!',
        });
    }
});

inputs_contacto.forEach((input) => {
    input.addEventListener("keyup", validar_form);  
    input.addEventListener("blur", validar_form);  
});

text_area.forEach((textarea) => {
    textarea.addEventListener("keyup", validar_form);  
    textarea.addEventListener("blur", validar_form);  
});
