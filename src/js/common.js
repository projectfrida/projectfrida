const menuHamburger = document.querySelector(".pf-burger");
const pfNavbarContainer = document.querySelector(".pf-navbar-container");
let isNavbarActive = pfNavbarContainer.classList.contains("pf-navbar-active");

let navLinks = document.querySelectorAll(".pf-navbar__link");

function toggleNavbar(onlyClose) {
  if (onlyClose) {
    pfNavbarContainer.classList.remove("pf-navbar-active");
  } else {
    pfNavbarContainer.classList.toggle("pf-navbar-active");
  }
}

menuHamburger.addEventListener("click", () => toggleNavbar(false));
let closeNavbar = () => {
  // Only close Navbar when clicked
  toggleNavbar(true);
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeNavbar);
});
