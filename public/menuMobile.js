const menuMobile = document.getElementById('menu-icon')
const menu = document.getElementById('menu')
const links = document.querySelectorAll('#menu a')
let isMenuActive = false

menuMobile.addEventListener('click', () => {
  menu.classList.toggle('menu-mobile-active')
  isMenuActive = menu.classList.contains('menu-mobile-active')
  isHeaderMenuActive()
})

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile-active')
  })
})

function isHeaderMenuActive() {
  if(isHeaderActive && isMenuActive) {
    header.classList.add('header-active')
  }
  if (!isHeaderActive && isMenuActive){
    header.classList.add('header-active')
  }
  if(!isMenuActive && !isHeaderActive) {
    header.classList.remove('header-active')
  }
}


window.onresize = () => window.innerWidth >= 1024 ? menu.classList.remove('menu-mobile-active') : null