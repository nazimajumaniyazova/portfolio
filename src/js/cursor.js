const cursorPointed = document.querySelector('.cursor');
const cursorCircle = document.querySelector('.circle');
const cursorDot = document.querySelector('.cursor-dot')

const moveCircle = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  cursorPointed.style.transition = "all .1s ease";
  cursorPointed.style.transform = `translate(-50%, -50%) translate3d(${mouseX}px, ${mouseY}px, 0)`; 
}

function aimateCircle(){
  cursorCircle.style.opacity = "1";
  cursorCircle.style.transition = "all .3s ease";
  for(let i=0;i<=100;){
    cursorCircle.style.width = i + "%";
    cursorCircle.style.height = i + "%";
    i=i+10;
  }
  setTimeout(()=>{
    cursorCircle.style.transition = "";
    cursorCircle.style.opacity = "0";
    cursorCircle.style.width = 0 + "%";
    cursorCircle.style.height = 0 + "%";
  },300)
}

window.addEventListener('mousemove', moveCircle);
window.addEventListener('mousedown', aimateCircle);
