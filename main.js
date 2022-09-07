const mail = document.querySelector(".navbar-email");
const mailMenu = document.querySelector(".desktop-menu");

mail.addEventListener("click", toggleMailMenu);

function toggleMailMenu() {
  mailMenu.classList.toggle("inactive");
}
