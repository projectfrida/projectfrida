const menuHamburger = document.querySelector(".pf-burger");
const pfNavbarContainer = document.querySelector(".pf-navbar-container");
/*const pfContactBtn = document.querySelector(
  ".pf-navbar-container .pf-btn-container"
);
*/
const pfNavbarLogo = document.querySelector(
  ".pf-navbar--light .pf-navbar__logo img"
);
let isNavbarActive = pfNavbarContainer.classList.contains("pf-navbar-active");

let navLinks = document.querySelectorAll(".pf-navbar__link");

function toggleNavbar(onlyClose) {
  if (onlyClose) {
    pfNavbarContainer.classList.remove("pf-navbar-active");
  } else {
    pfNavbarContainer.classList.toggle("pf-navbar-active");
  }

  if (pfNavbarLogo) {
    if (pfNavbarContainer.classList.contains("pf-navbar-active")) {
      pfNavbarLogo.src = "../assepf/images/logo.png";
    } else {
      pfNavbarLogo.src = "../assepf/images/logo-white.png";
    }
  }
}

menuHamburger.addEventListener("click", () => toggleNavbar(false));

// Scroll Add Classes

let scrollpos = window.scrollY;
const header_height = pfNavbarContainer.offsetHeight;

const add_class_on_scroll = () => {
  pfNavbarContainer.classList.add("pf-navbar-fade-in");

  if (pfNavbarLogo) {
    pfNavbarLogo.src = "../assepf/images/logo.png";
  }
  
};
const remove_class_on_scroll = () => {
  pfNavbarContainer.classList.remove("pf-navbar-fade-in");

  // Toggle  To white logo if navbar is Light Navbar is not open
  if (pfNavbarLogo && !isNavbarActive) {
    pfNavbarLogo.src = "../assepf/images/logo-white.png";
  }
  // pfContactBtn.style.display = "none";
  //pfContactBtn.classList.add("d-none");
};

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

let closeNavbar = () => {
  // Only close Navbar when clicked
  toggleNavbar(true);
};

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeNavbar);
});
