// Toggle navbar
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// Remove menu for every click
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Selektiraj sve linkove u navigaciji
const navLinks = document.querySelectorAll(".nav__link");

function activateLink(clickedLink) {
  // Ukloni 'active-link' sa svih linkova
  navLinks.forEach((link) => link.classList.remove("active-link"));

  // Dodaj 'active-link' samo na kliknuti link
  clickedLink.classList.add("active-link");
}

// Dodaj event listener za klik na sve linkove
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    activateLink(this); // Pozovi funkciju i proslijedi kliknuti link
  });
});

// Selektiraj sve linkove u navigaciji
const navLinks = document.querySelectorAll(".nav__link");

function activateLink(clickedLink) {
  // Ukloni 'active-link' sa svih linkova
  navLinks.forEach((link) => link.classList.remove("active-link"));

  // Dodaj 'active-link' samo na kliknuti link
  clickedLink.classList.add("active-link");
}

// Dodaj event listener za klik na sve linkove
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    activateLink(this); // Pozovi funkciju i proslijedi kliknuti link
  });
});

// Scroll Sections Active Link za automatsko aktiviranje na osnovu pozicije
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 30;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Aktiviraj samo link sekcije u kojoj se trenutno nalaziš
      activateLink(link);
    }
  });

  // Osiguraj da "Contact" ostane aktivan ako je pri dnu stranice
  const lastSection = sections[sections.length - 1];
  if (scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    const lastSectionId = lastSection.getAttribute("id");
    const lastLink = document.querySelector(
      ".nav__menu a[href*=" + lastSectionId + "]"
    );
    activateLink(lastLink);
  }
}

window.addEventListener("scroll", scrollActive);

// Change BG Header
function scrollHeader() {
  const header = document.getElementById("header");
  return this.scrollY >= 550
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: false,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  },
});
