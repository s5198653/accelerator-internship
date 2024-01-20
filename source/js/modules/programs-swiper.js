import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const initProgramsSwiper = () =>
  new Swiper('[data-swiper="programs-swiper"]', {
    modules: [Navigation],
    direction: 'horizontal',
    navigation: {
      nextEl: '[data-button="programs-next"]',
      prevEl: '[data-button="programs-prev"]',
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 1,
        allowTouchMove: true,
      },
    },
  });

export {initProgramsSwiper};
