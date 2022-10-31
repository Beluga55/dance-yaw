/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== IMAGES ===============*/
const introToggle = document.querySelector(".intro__data");
const introMenu = document.querySelector(".intro__popup");
const introClose = document.querySelector(".intro__close");
const body = document.querySelector("body");

introToggle.addEventListener("click", () => {
  introMenu.classList.add("show");
  body.classList.add("scroll-lock");
});

introClose.addEventListener("click", () => {
  introMenu.classList.remove("show");
  body.classList.remove("scroll-lock");
});

/*=============== SWIPER ABOUT AND SCREENSHOTS  ===============*/
var swiperAbout = new Swiper(".about__container", {
  spaceBetween: 32,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".about__modal"),
  modalBtns = document.querySelectorAll(".about__button"),
  modalCloses = document.querySelectorAll(".about__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});
