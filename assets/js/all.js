"use strict";

var swiper = new Swiper(".courseSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 16
    }
  }
});
var swiper2 = new Swiper(".tutorial-swiper", {
  slidesPerView: 2,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 16
    }
  }
});
var swiper3 = new Swiper(".feedback-swiper", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 600,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  language: "zh-TW",
  clearBtn: true
});
//# sourceMappingURL=all.js.map
