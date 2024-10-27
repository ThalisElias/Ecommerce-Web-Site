const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

function openNav() {
  nav.classList.add("active");
}
if (bar) {
  bar.addEventListener("click", openNav);
}
function closeNav() {
  nav.classList.remove("active");
}
close.addEventListener("click", closeNav);
