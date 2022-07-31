const cursorPointed = document.querySelector('.cursor');
const cursorCircle = document.querySelector('.circle')
const moveCursor = (e)=> {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
    cursorPointed.style.transform = `translate(-50%, -50%) translate3d(${mouseX}px, ${mouseY}px, 0)`;
   
}
window.addEventListener('mousemove', moveCursor)
function circleFunc(){
        cursorCircle.style.opacity = "1"
        cursorCircle.style.transition = "all .3s ease"
        for(var i=0;i<=100;){
            cursorCircle.style.width = i + "%"
            cursorCircle.style.height = i + "%"
            i=i+10;
        }
}
window.addEventListener('mousedown', ()=>{
    circleFunc()
        setTimeout(()=>{
            cursorCircle.style.transition = ""
            cursorCircle.style.opacity = "0"
            cursorCircle.style.width = 0 + "%"
            cursorCircle.style.height = 0 + "%"
        },200)

})
