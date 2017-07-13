// Exibir Menu Hamburger
var menuHamburger = document.querySelector('#menuhamburger')
var botaoHamburger = document.querySelector('.botaoHamburger')

botaoHamburger.addEventListener('click', mostraMenu)

function mostraMenu () {
  console.log(menuHamburger)
  menuHamburger.classList.toggle("menuhamburger--mostra")
}