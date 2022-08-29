var menuSuperior = document.querySelector('.menu-superior')
var menu = document.querySelector('.menu-hamburguer')

menu.addEventListener('click', function(){
    menuSuperior.classList.toggle('active')
})