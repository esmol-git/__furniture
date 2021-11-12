let burger = document.querySelector(".burger");
let menus = document.querySelector(".nav__menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  menus.classList.toggle("show-menu");
  // body_lock(500);
});

/*=============== MIXER FILTER ===============*/
var mixer = mixitup(".furniture__items", {});
var selectFilter = document.querySelector("#select");

selectFilter.addEventListener("change", function () {
  var selector = selectFilter.value;
  mixer.filter(selector);
});

/*=============== CHOICES ===============*/
const defaultSelect = () => {
  const element = document.querySelector(".default");
  const choices = new Choices(element, {
    searchEnabled: false,
    noResultsText: "Ничего не найдено",
    itemSelectText: "",
  });

  let ariaLabel = element.getAttribute("aria-label");
  element.closest(".choices").setAttribute("aria-label", ariaLabel);
};

defaultSelect();

/*=============== SWIPER===============*/
const swiper = new Swiper(".swiper", {
  watchSlidesVisibility: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 320px
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const navbar = document.querySelector(".header");
  if (this.scrollY >= 50) navbar.classList.add("scroll-navbar");
  else navbar.classList.remove("scroll-navbar");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 460) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.swiper, .home__info, .home__footer`);
sr.reveal(
  `.section__title, .section__subtitle, .service-item, .furniture__controls,.furniture__btn, .card`,
  {
    interval: 100,
  }
);
sr.reveal(`.home__left, .discount__img, .about__img`, {
  origin: "left",
});
sr.reveal(`.about__info`, { origin: "right" });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

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
