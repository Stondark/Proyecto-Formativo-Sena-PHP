/* Mostrar menú */
const nav_menu = document.getElementById("nav-menu"),
  show_menu = document.getElementById("show-menu"),
  close_menu = document.getElementById("close-menu");
  
if(nav_menu){
  show_menu.addEventListener("click", () => {
    nav_menu.classList.toggle("show");
  });

  close_menu.addEventListener("click", () => {
    nav_menu.classList.remove("show");
  });
}

/* Mostrar sign-out */
const menu_close = document.getElementById("menu-close"),
  user_name = document.getElementById("user-name");

if (menu_close) {
  user_name.addEventListener("click", () => {
    menu_close.classList.toggle("show");
  });
}

/* Mostrar modal producto */
const abrir = document.getElementById("abrir-producto");
const cerrar = document.getElementById("close");
const modal = document.getElementById("modal-container");
const form = document.getElementById("form-new-producto");

function modal_cerrar() {
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
  console.log("Cerrando modal");
  form.reset();
}

if(modal){

  abrir.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("Mostrando modal");
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  });
  
  cerrar.addEventListener("click", () => { 
    modal_cerrar();
  });

  window.addEventListener("click", (e) => {
    if(e.target === modal ){
      modal_cerrar();
    } 
  }); 

  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      if(modal.style.opacity === "1"){
        modal_cerrar();
      }
    }
  });

}

// Evitar espacios login 
const user = document.getElementById("user");
const password = document.getElementById("password");

if(user){
  user.addEventListener("keyup", (e) =>{
    var ta =   $("#user");
    letras =   ta.val().replace(/ /g, "");
    ta.val(letras)
  });

  password.addEventListener("keyup", (e) =>{
    var ta =   $("#password");
    letras =   ta.val().replace(/ /g, "");
    ta.val(letras)
  });

}

// Saludo login.html 

const login = document.getElementById("form-login");

if(login){
  var hora = new Date();

  if(hora.getHours() >= 1 & hora.getHours() <= 12){
    document.getElementById("date").innerHTML = "<h2> Buenos días</h2>"
  } else if(hora.getHours() > 12 & hora.getHours() <= 18){
    document.getElementById("date").innerHTML = "<h2> Buenas tardes</h2>"
  } else{
    document.getElementById("date").innerHTML = "<h2> Buenas noches</h2>"
  }
}