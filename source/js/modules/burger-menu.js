import {ScrollLock} from '../utils/scroll-lock';
import {FocusLock} from '../utils/focus-lock';

const header = document.querySelector('[data-header="sticky"]');
const burgerButton = document.querySelector('[data-burger="burger"]');
const overlay = document.querySelector('.header__overlay');
const navList = document.querySelector('.header__nav-list');
const scrollLock = new ScrollLock();
const focusLock = new FocusLock();
const linksWithSubMenu = document.querySelectorAll(
  '[data-sub-menu="sub-menu"]'
);

const onLinkClick = ({target}) => {
  const link = target.closest('.header__nav-link');
  link.classList.toggle('header__nav-link--opened');
};

const initToggleSubMenu = () => {
  linksWithSubMenu.forEach((link) => {
    link.addEventListener('click', onLinkClick);
  });
};

const resetSubMenu = () => {
  linksWithSubMenu.forEach((link) => {
    if (link.classList.contains('header__nav-link--opened')) {
      link.classList.remove('header__nav-link--opened');
    }
    link.removeEventListener('click', onLinkClick);
  });
};

const closeMenu = () => {
  header.classList.remove('is-open');
  scrollLock.enableScrolling();
  focusLock.unlock('[data-header]');
  document.removeEventListener('keydown', onDocumentKeydown);
  navList.removeEventListener('click', onDocumentClick);
  resetSubMenu();
};

const addEventListenersToCloseMenu = () => {
  navList.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
  overlay.addEventListener('click', closeMenu);
};

const openMenu = () => {
  header.classList.add('is-open');
  scrollLock.disableScrolling();
  focusLock.lock('[data-header]');
  addEventListenersToCloseMenu();
};

function onDocumentClick(evt) {
  if (evt.target.hasAttribute('data-close-menu')) {
    closeMenu();
  }
}

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    closeMenu();
  }
}

const initToggleMenu = () => {
  burgerButton.addEventListener('click', () => {
    if (!header.classList.contains('is-open')) {
      openMenu();
      initToggleSubMenu();
    } else {
      closeMenu();
    }
  });
};

export {initToggleMenu};
