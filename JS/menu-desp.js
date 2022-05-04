const menuDesplegable = document.querySelector('.menu-despegable ')
const btnlistar = document.querySelector('.listar ')

btnlistar.addEventListener('click', () => {
    menuDesplegable.classList.toggle('meno-desplegable-active')
})