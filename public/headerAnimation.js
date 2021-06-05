const header = document.querySelector('.header')
let isHeaderActive = false

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset
  if(currentScroll > 60){
    header.classList.add('header-active')
  } else if(currentScroll < 60){
    header.classList.remove('header-active')
  }

  isHeaderActive = header.classList.contains('header-active')
  isHeaderMenuActive()
})



