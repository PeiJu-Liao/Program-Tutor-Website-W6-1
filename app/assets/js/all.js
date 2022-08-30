const swiper = new Swiper(".courseSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 16,
    }
  }
});


const swiper2 = new Swiper(".tutorial-swiper", {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 16,
    }
  }
});

const swiper3 = new Swiper(".feedback-swiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
  language: "zh-TW",
  clearBtn: true
});

