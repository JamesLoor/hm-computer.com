const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset
    if(currentScroll > 60){
        header.classList.add('header-active')
    } else if(currentScroll < 60){
        header.classList.remove('header-active')
    }
})
