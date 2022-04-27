// FUNCIONES PARA CHECKEAR EL MODO EN CADA PÁGINA
var body = document.documentElement;

function check_theme() { // ACÁ VALIDAMOS EL MODO
    if (localStorage.getItem("light-mode") === "true") {
        body.classList.toggle("light");
    }
    else{
        body.classList.remove("light");
    }
}

check_theme();


/* MOSTRAR CIERRE DE SESIÓN  */
const menu_close = document.getElementById("menu-close"),
    user_name = document.getElementById("user-name");

if (menu_close) {
    user_name.addEventListener("click", () => {
    menu_close.classList.toggle("show");
    });
}



// PRODUCTOS.PHP 
const abrir = document.getElementById("abrir-producto");
const cerrar = document.getElementById("close");
const modal = document.getElementById("modal-container");
const form = document.getElementById("form-new-producto");

/* Función abrir modal nuevo producto */
function modal_abrir() {
    console.log("Mostrando modal");
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
}

/* Función cerrar el modal nuevo producto */

function modal_cerrar() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    console.log("Cerrando modal");
    form.reset();
}

if (modal) {
    abrir.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Mostrando modal");
        modal.style.opacity = "1";
        modal.style.visibility = "visible";
    });

    cerrar.addEventListener("click", () => {
        modal_cerrar();
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal_cerrar();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (modal.style.opacity === "1") {
                modal_cerrar();
            }
        }
    });
    }

/* VENTAS.PHP */


/* LOGIN.HTML */

// Evitar espacios login
const user = document.getElementById("user");
const password = document.getElementById("password");

if (user) {
    user.addEventListener("keyup", (e) => {
        var ta = $("#user");
        letras = ta.val().replace(/ /g, "");
        ta.val(letras);
    });

    password.addEventListener("keyup", (e) => {
        var ta = $("#password");
        letras = ta.val().replace(/ /g, "");
        ta.val(letras);
    });
}

/* USERS.PHP */





