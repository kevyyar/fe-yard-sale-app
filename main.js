const mail = document.querySelector(".navbar-email");
const mailMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cart = document.querySelector(".navbar-shopping-cart");
const cartOrderDetails = document.querySelector(".product-detail");

mail.addEventListener("click", toggleMailMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
cart.addEventListener("click", toggleCartMenu);

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  cartOrderDetails.classList.add("inactive");
}

function toggleMailMenu() {
  mailMenu.classList.toggle("inactive");
  cartOrderDetails.classList.add("inactive");
}

function toggleCartMenu() {
  cartOrderDetails.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
  mailMenu.classList.add("inactive");
}
