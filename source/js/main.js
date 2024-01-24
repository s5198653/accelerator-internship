import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './vendor/form-validate/form';
import {initHeroSwiper} from './modules/hero-swiper';
import {initToggleMenu} from './modules/burger-menu';
import {StickyHeader} from './modules/sticky-header';
import {initModals} from './modals/init-modals';
import {initPhoneMask} from './modules/phone-mask';
import {initProgramsSwiper} from './modules/programs-swiper';
import {initNewsSwiper} from './modules/news-swiper';
import {initAccordions} from './accordion/init-accordion';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initToggleMenu();
    const stickyHeader = new StickyHeader();
    stickyHeader.init();
    initModals();
    initPhoneMask();

    const form = new Form();
    window.form = form;
    form.init();
    initHeroSwiper();
    initProgramsSwiper();
    initNewsSwiper();
    initAccordions();
  });
});
