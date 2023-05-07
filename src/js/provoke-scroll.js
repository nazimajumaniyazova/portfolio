const movingLine = document.querySelector('.provoke-scroll__moving-line');
const provokeScroll = document.querySelector('.provoke-scroll');

function animateLine() {
  let pos = -100;
  setInterval(frame, 15);
  function frame() {
    if (pos === 100) {
      pos = -100;
    } else {
      movingLine.style.top = pos + '%';
      pos++;
    }
  }
}

function onScroll() {
  if (window.pageYOffset > 400) {
    provokeScroll.classList.add('provoke-scroll_active');
  } else {
    provokeScroll.classList.remove('provoke-scroll_active');
  }
}

animateLine();
window.addEventListener('scroll', () => {
  onScroll();
});
