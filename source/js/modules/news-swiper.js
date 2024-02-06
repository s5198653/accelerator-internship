import Swiper from 'swiper';
import {Navigation, Pagination, Keyboard, Grid} from 'swiper/modules';

const initNewsSwiper = () =>
  new Swiper('[data-swiper="news-swiper"]', {
    modules: [Navigation, Pagination, Grid, Keyboard],
    loop: false,
    navigation: {
      nextEl: '[data-button="news-next"]',
      prevEl: '[data-button="news-prev"]',
    },
    pagination: {
      el: '.news__swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        spaceBetween: 32,
        grid: {
          rows: 1,
          fill: 'row',
        },
        allowTouchMove: false,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,

        grid: {
          rows: 2,
          fill: 'column',
        },
        allowTouchMove: true,
      },
      320: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 20,

        grid: {
          rows: 2,
          fill: 'column',
        },
        allowTouchMove: true,
      },
    },
  });

export {initNewsSwiper};
