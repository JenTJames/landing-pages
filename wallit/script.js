const mobileMenuButton = document.getElementById("menu_button");
const mobileMenu = document.getElementById("mobile_menu");

mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});
