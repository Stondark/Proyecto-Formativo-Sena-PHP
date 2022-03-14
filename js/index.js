/*! */

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

