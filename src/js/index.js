const rightInner = document.querySelector('.right__inner');

let sizeWidth = window.innerWidth;
window.addEventListener('resize', function () {
  sizeWidth = window.innerWidth;
});

function onScroll2() {
  if (window.pageYOffset > 250 && sizeWidth <= 800) {
    rightInner.classList.add('right__inner-onscroll');
  } else {
    rightInner.classList.remove('right__inner-onscroll');
  }
}

window.addEventListener('scroll', () => {
  onScroll2();
});
