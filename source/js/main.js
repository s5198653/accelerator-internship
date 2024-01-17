import {iosVhFix} from './utils/ios-vh-fix';
import {initHeroSwiper} from './modules/hero-swiper';
import {initToggleMenu} from './modules/burger-menu';
import {StickyHeader} from './modules/sticky-header';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initToggleMenu();
    const stickyHeader = new StickyHeader();
    stickyHeader.init();

    // const form = new Form();
    // window.form = form;
    // form.init();
    initHeroSwiper();
  });
});
