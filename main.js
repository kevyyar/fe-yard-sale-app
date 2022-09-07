const mail = document.querySelector(".navbar-email");
const mailMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

mail.addEventListener("click", () => toggleMenu(mailMenu));
mobileMenuIcon.addEventListener("click", () => toggleMenu(mobileMenu));

function toggleMenu(element) {
  element.classList.toggle("inactive");
}
