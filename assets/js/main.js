/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Menu Show
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

//Menu Hidden
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    //when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById("header");
    // Add a class if bottom offset is greater than 50 of the viewport
    this.scrollY >= 50
        ? header.classList.add("shadow-header")
        : header.classList.remove("shadow-header");
};

/*=============== SWIPER FAVORITES ===============*/
const swiperFavorites = new Swiper(".favorites__swiper", {
    loop: true,
    grabCursor: true,
    slidesPerView: "auto",
    centeredSlides: "auto",
});

/*=============== SHOW SCROLL UP ===============*/
// Function to show/hide scroll-up button based on scroll position
const scrollUp = () => {
    const scrollup = document.getElementById("scroll-up");
    // When the scrollup is greater than 350 vh, add the class show-scroll
    this.scrollY >= 350
        ? scrollup.classList.add("show-scroll")
        : scrollup.classList.remove("show-scroll");
};

// Event listener to call scrollUp function when scrolling
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Select all sections with an id attribute
const sections = document.querySelectorAll("section[id]");

// Function to add active-link class to navigation menu items based on scroll position
const scrollActive = () => {
    const scrollDown = window.scrollY;

    // Loop through each section
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        // Select corresponding navigation menu item
        const sectionsClass = document.querySelector(
            ".nav__menu a[href*=" + sectionId + "]"
        );

        // Add or remove active-link class based on scroll position
        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};

// Event listener to call scrollActive function when scrolling
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true,
});

sr.reveal(`.home__data, .favorites__container, .footer__container`);
sr.reveal(`.home__circle, .home__img`, { delay: 600, scale: 0.5 });
sr.reveal(`.home__chips-1, .home__chips-2, .home__chips-3`, {
    delay: 1000,
    interval: 100,
});
sr.reveal(`.home__leaf`, { delay: 1000 });
sr.reveal(`.home__tomato-1, .home__tomato-2`, {
    delay: 1400,
    interval: 100,
});
sr.reveal(`.care__img, .contact__img`, { origin: "left" });
sr.reveal(`.care__list, .contact__data`, { origin: "right" });
sr.reveal(`.banner__item, .products__card`, { interval: 100 });
