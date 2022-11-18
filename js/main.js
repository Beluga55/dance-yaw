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
const body = document.querySelector("body");
const introToggle = document.querySelector(".intro__data");
const introMenu = document.querySelector(".intro__popup");
const introClose = document.querySelectorAll(".intro__close");
const ScreenshotsPopup = document.querySelector(".screenshots__popup");
const screenShotsImage = document.querySelectorAll(".screenshots__image");
const PopupImg = document.querySelector(".screenshots__popup img");
const DownloadButton = document.querySelectorAll(".screenshots__download");

introToggle.addEventListener("click", () => {
  introMenu.classList.add("show");
  body.classList.add("scroll-lock");
});

introClose.forEach((close) => {
  close.onclick = () => {
    introMenu.classList.remove("show");
    body.classList.remove("scroll-lock");
    ScreenshotsPopup.classList.remove("show");
  };
});

/*==================== SCREENSHOTS ====================*/
screenShotsImage.forEach((image) => {
  image.onclick = () => {
    ScreenshotsPopup.classList.add("show");
    PopupImg.src = image.getAttribute("src");
    body.classList.add("scroll-lock");

    DownloadButton.forEach((download) => {
      download.onclick = () => {
        download.href = image.getAttribute("src");
        download.download = image.getAttribute("id");
      };
    });
  };
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

var swiperScreenshots = new Swiper(".screenshots__container", {
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

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);
