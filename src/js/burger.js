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
    // if (sizeWidth <= 800) {
    //   rightContent.style.left = '50%';
    // } else {
    //   rightContent.style.left = '25%';
    // }
    burgerBtn.classList.remove('burger-close');
    // header.style.transform = `translate(100%, 0)`;
    // mainContent.style.left = `0%`;
    // mainContent.style.opacity = `1`;
    header.classList.remove('header_active');
    mainContent.classList.remove('main_moved');
    rightContent.classList.remove('right__content_moved');

    return;
  }
  mainContent.classList.add('main_moved');
  header.classList.add('header_active');
  rightContent.classList.add('right__content_moved');
  // header.style.transition = `all .5s ease`;
  // header.style.transform = `translate(0, 0)`;
  // mainContent.style.transition = `all .3s ease`;
  // mainContent.style.left = `-24%`;
  // mainContent.style.opacity = `0.45`;
  // rightContent.style.left = '3%';
  burgerBtn.classList.add('burger-close');
});

window.addEventListener('click', (event) => {
  if (
    !!event.target.closest('.main') &&
    menuButton.querySelector('.burger-close')
  ) {
    // if (sizeWidth <= 800) {
    //   rightContent.style.left = '50%';
    // } else {
    //   rightContent.style.left = '25%';
    // }
    burgerBtn.classList.remove('burger-close');
    header.classList.remove('header_active');
    mainContent.classList.remove('main_moved');
    rightContent.classList.remove('right__content_moved');
  }
});
menu.addEventListener('click', (event) => {
  const eventTarget = event.target.closest('.menu__item');
  if (eventTarget) {
    // if (sizeWidth <= 800) {
    //   rightContent.style.left = '50%';
    // } else {
    //   rightContent.style.left = '25%';
    // }
    header.classList.remove('header_active');
    burgerBtn.classList.remove('burger-close');
    mainContent.classList.remove('main_moved');
    rightContent.classList.remove('right__content_moved');
  }
});
