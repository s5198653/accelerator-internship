import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './vendor/form-validate/form';
import {StickyHeader} from './modules/sticky-header';
import {initAccordions} from './accordion/init-accordion';
import {initPhoneMask} from './modules/phone-mask';
import {CustomSelect} from './select/custom-select';
import {initHeroSwiper} from './modules/hero-swiper';
import {initToggleMenu} from './modules/burger-menu';
import {initModals} from './modals/init-modals';
import {initProgramsSwiper} from './modules/programs-swiper';
import {initNewsSwiper} from './modules/news-swiper';
import {initReviewsSwiper} from './modules/reviews-swiper';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initToggleMenu();

    const stickyHeader = new StickyHeader();
    stickyHeader.init();

    initModals();
    initPhoneMask();

    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();

    initHeroSwiper();
    initProgramsSwiper();
    initNewsSwiper();
    initAccordions();
    initReviewsSwiper();
  });
});
