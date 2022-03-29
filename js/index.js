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


const abrir = document.getElementById("abrir-venta");
const cerrar = document.getElementById("close");
const modal = document.getElementById("modal-container");

function modal_cerrar() {
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
  console.log("Cerrando modal");
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



