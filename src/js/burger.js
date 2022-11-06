const mainContent = document.querySelector('.main')
const menuButton = document.querySelector('.menu-button')
const header = document.querySelector('.header')

const burgerBtn = document.querySelector('.burger')

const nav = document.querySelector(".nav")
menuButton.addEventListener('click', (e)=>{
    const eventTarget = e.target.closest('.menu-button')
    if(menuButton.querySelector('.burger-close')){
      burgerBtn.classList.remove('burger-close')
      header.style.transform = `translate(100%, 0)`
      mainContent.style.transform = `translate(0, 0)`
      mainContent.style.opacity = `1`
      return
    }
    header.style.transition = `all .3s ease`
    header.style.transform = `translate(0, 0)`
    mainContent.style.transition = `all .3s ease`
    mainContent.style.transform = `translate(-24%, 0)`
    mainContent.style.opacity = `0.45`
    burgerBtn.classList.add("burger-close")
})

window.addEventListener('click', (event) => {
  console.log(!!event.target.closest('.main'))
  if (!!event.target.closest('.main') && menuButton.querySelector('.burger-close')) {
    console.log('l')
    burgerBtn.classList.remove('burger-close')
    header.style.transform = `translate(100%, 0)`
    mainContent.style.transform = `translate(0, 0)`
    mainContent.style.opacity = `1`
  }
})