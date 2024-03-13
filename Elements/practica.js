/* PASOS PARA CREAR UN ELEMENTo DE HTML EN JS:
1. Obtener el contenedor 
2. Crear elemento 
3. Imprimir en HTML */

/*document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector('body')

    aqui se crea y configura el botón 

    const boton = document.createElement('a')

    boton.textContent = 'Iniciar Sesión'
    boton.style.background = 'purple'
    boton.style.color = 'white'
    boton.style.border = 'dashed teal 3px '
    boton.style.borderRadius = '5px'
    boton.style.display = 'block'
    boton.style.width = '200px'
    boton.style.textAlign = 'center'
    boton.style.padding = '10px'

    boton.setAttribute('href', '/iniciar-sesion.html')

    aqui se termina el botón

    container.append(boton) 

})*/

document.addEventListener("DOMContentLoaded", () => {

const container = document.querySelector('body')
const nav = document.createElement('div')

nav.classList = 'contenedor-de-botones'

container.append(nav)




})

