'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const mobileViewport = window.matchMedia('(max-width: 960px)');

if (menuButton && navigation) {
  const header = menuButton.closest('.site-header');
  const menuLabel = menuButton.querySelector('.menu-label');

  // Only collapse the navigation after its controls are ready.
  document.documentElement.classList.add('menu-ready');
  menuButton.hidden = false;

  const setMenuOpen = (open, returnFocus = false) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuLabel.textContent = open ? 'Close' : 'Menu';
    navigation.classList.toggle('is-open', open);
    if (returnFocus) menuButton.focus();
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || !mobileViewport.matches) return;
    // Keep focus out of the collapsed menu when following an in-page link.
    const href = link.getAttribute('href');
    const destination = href.startsWith('#') && document.getElementById(href.slice(1));
    setMenuOpen(false);
    if (destination) {
      destination.setAttribute('tabindex', '-1');
      destination.focus({ preventScroll: true });
      destination.addEventListener('blur', () => destination.removeAttribute('tabindex'), { once: true });
    } else {
      menuButton.focus();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false, true);
    }
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.site-brand') || !header.contains(event.target)) {
      setMenuOpen(false, navigation.contains(document.activeElement));
    }
  });

  header.addEventListener('focusout', (event) => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) setMenuOpen(false);
  });

  mobileViewport.addEventListener('change', () => {
    const focusWillHide = mobileViewport.matches && navigation.contains(document.activeElement);
    setMenuOpen(false, focusWillHide);
  });
}

const year = document.querySelector('#copyright-year');
if (year) year.textContent = String(new Date().getFullYear());
