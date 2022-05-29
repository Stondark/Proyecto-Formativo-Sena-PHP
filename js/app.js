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

function load_ajax(text){
    Swal.fire({
        title: "Espere...",
        text: text,
        icon: 'info',
    })
}




check_theme();

/* LOGIN.HTML */



