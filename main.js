const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});

const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    body.dataset.theme = themeName;
    updateIcon(themeName);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
}

function updateIcon(themeName) {
    if (themeName === "dark") {
        themeIcon.classList.remove("ri-sun-line");
        themeIcon.classList.add("ri-moon-line");
    } else {
        themeIcon.classList.remove("ri-moon-line");
        themeIcon.classList.add("ri-sun-line");
    }
}

(function () {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "light"); // Default to light if no theme saved
})();

themeToggle.addEventListener("click", toggleTheme);