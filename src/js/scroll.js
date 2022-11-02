const mainItems = document.querySelectorAll(".main section")
ScrollReveal({
    reset: true,
    interval: 200,
    delay: 500,
    origin: 'bottom',
    distance: '100px'
});
mainItems.forEach((section) => {
        ScrollReveal().reveal(`.${section.getAttribute("class")}`)
})
