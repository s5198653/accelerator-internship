import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const initHeroSwiper = () => {
  const slider = new Swiper('[data-swiper="hero-swiper"]', {
    observer: true,
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-slide-active .hero__swiper-pagination',
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        slider.pagination.init();
        slider.pagination.render();
        slider.pagination.update();
      },
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
};

export {initHeroSwiper};
