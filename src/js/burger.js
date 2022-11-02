const mainContent = document.querySelector('.main')
const menuButton = document.querySelector('.menu-button')
const header = document.querySelector('.header')
menuButton.addEventListener('click', (e)=>{
    const eventTarget = e.target.closest('.menu-button')
    header.style.transition = `all .3s ease`
    header.style.transform = `translate(0, 0)`
    mainContent.style.transition = `all .3s ease`
    mainContent.style.transform = `translate(-24%, 0)`
    mainContent.style.opacity = `0.45`
    console.log('lss')
})