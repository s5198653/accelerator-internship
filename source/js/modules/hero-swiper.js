import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const initHeroSwiper = () =>
  new Swiper('[data-swiper="hero-swiper"]', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
      768: {
        allowTouchMove: true,
      },
      320: {
        allowTouchMove: true,
      },
    },
  });

export {initHeroSwiper};
