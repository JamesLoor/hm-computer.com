const menuMobile = document.getElementById('menu-icon')
const menu = document.getElementById('menu')
const links = document.querySelectorAll('#menu a')

menuMobile.addEventListener('click', () => {
  menu.classList.toggle('menu-mobile-active')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile-active')
  })
})


window.onresize = () => window.innerWidth >= 1024 ? menu.classList.remove('menu-mobile-active') : null