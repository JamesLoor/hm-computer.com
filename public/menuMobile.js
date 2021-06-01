const menuMobile = document.getElementById('menu-icon')
const menu = document.getElementById('menu')
let menuActive = false

menuMobile.onclick = () => {
  menuActive = !menuActive
  menuActive
  ? menu.classList.add('menu-mobile-active')
  : menu.classList.remove('menu-mobile-active')
}

window.onresize = () => window.innerWidth >= 1024 ? menu.classList.remove('menu-mobile-active') : null