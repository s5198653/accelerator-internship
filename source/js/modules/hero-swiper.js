import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';

const initHeroSwiper = () => {
  const slider = new Swiper('[data-swiper="hero-swiper"]', {
    observer: true,
    modules: [Pagination, Autoplay],
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //   // delay: 3000,
    //   disableOnInteraction: false,
    // },
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
