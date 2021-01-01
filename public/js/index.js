const btn = document.getElementById("cta-btn");
const openMenu = document.getElementById("open_menu");
const closeMenu = document.getElementById("close_menu");
const navi = document.getElementById("navigation");

btn.addEventListener("click", () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("active");
  navi.classList.toggle("active");
});
