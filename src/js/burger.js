const mainContent = document.querySelector('.main');
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');
const rightContent = document.querySelector('.right__content');
const burgerBtn = document.querySelector('.burger');

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', (e) => {
  if (menuButton.querySelector('.burger-close')) {
    burgerBtn.classList.remove('burger-close');
    header.classList.remove('header_active');
    mainContent.classList.remove('main_moved');
    rightContent.classList.remove('right__content_moved');

    return;
  }
  mainContent.classList.add('main_moved');
  header.classList.add('header_active');
  rightContent.classList.add('right__content_moved');
  burgerBtn.classList.add('burger-close');
});

window.addEventListener('click', (event) => {
  if (
    !!event.target.closest('.main') &&
    menuButton.querySelector('.burger-close')
  ) {
    burgerBtn.classList.remove('burger-close');
    header.classList.remove('header_active');
    mainContent.classList.remove('main_moved');
    rightContent.classList.remove('right__content_moved');
  }
});
menu.addEventListener('click', (event) => {
  const eventTarget = event.target.closest('.menu__item');
  if (eventTarget) {
    header.classList.remove('header_active');
    burgerBtn.classList.remove('burger-close');
    mainContent.classList.remove('main_moved');
    rightContent.classList.remove('right__content_moved');
  }
});
