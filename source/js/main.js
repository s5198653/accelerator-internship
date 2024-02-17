import {iosVhFix} from './utils/ios-vh-fix';
import {initForm} from './modules/form';
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
import {initAutoResizeTextarea} from './auto-resize-textarea/auto-resize-textarea';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initToggleMenu();

    const stickyHeader = new StickyHeader();
    stickyHeader.init();

    initHeroSwiper();
    initModals();
    initAutoResizeTextarea();
    initPhoneMask();

    const select = new CustomSelect();
    select.init();
    initForm();

    initProgramsSwiper();
    initNewsSwiper();
    initAccordions();
    initReviewsSwiper();
  });
});
