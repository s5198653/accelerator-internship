import Swiper from 'swiper';
import {Navigation, Scrollbar, Keyboard} from 'swiper/modules';

const initReviewsSwiper = () =>
  new Swiper('[data-swiper="reviews-swiper"]', {
    modules: [Navigation, Scrollbar, Keyboard],
    direction: 'horizontal',
    navigation: {
      nextEl: '[data-button="reviews-next"]',
      prevEl: '[data-button="reviews-prev"]',
    },
    scrollbar: {
      el: '.reviews__swiper-scrollbar',
      hide: false,
      dragSize: 392,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  });

export {initReviewsSwiper};
