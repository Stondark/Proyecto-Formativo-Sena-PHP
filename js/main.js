/* Mostrar menú */
const nav_menu = document.getElementById("nav-menu"),
  show_menu = document.getElementById("show-menu"),
  close_menu = document.getElementById("close-menu");

show_menu.addEventListener("click", () => {
  nav_menu.classList.toggle("show");
});

close_menu.addEventListener("click", () => {
  nav_menu.classList.remove("show");
});

/* Login */
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
