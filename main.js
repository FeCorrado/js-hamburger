// classi
const bMenu = document.querySelector(".fa-bars");
const delMenu = document.querySelector(".fa-times");
const hMenu = document.querySelector(".hamburger-menu");
//menù visibile
bMenu.addEventListener("click", function () {
  hMenu.classList.add("active");
});
//chiusura menù
delMenu.addEventListener("click", function () {
  hMenu.classList.remove("active");
});