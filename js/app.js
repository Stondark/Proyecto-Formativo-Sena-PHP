// FUNCIONES PARA CHECKEAR EL MODO EN CADA PÁGINA
function check_theme() { // ACÁ VALIDAMOS EL MODO
    var body = document.documentElement;
    if (localStorage.getItem("light-mode") === "true") {
        body.classList.toggle("light");
    }
    else{
        body.classList.remove("light");
    }
}

check_theme();

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





