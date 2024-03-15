/* Sintaxix
nodo.addEventListener('evento', (callback/parametros) => {}) 
- En el callback vamos a poner que va a suceder cuando el evento se ejecute
- El eventListener pasa los parámetros al callback (son opcionales) */

document.addEventListener('DOMContentLoaded', () => {


    const btn = document.querySelector('#btn-event')

    btn.addEventListener('click', (event) => {
        //boton, cuando te den click, no realices tu acción predeterminada usando .preventDefault
        event.preventDefault()
        console.log('Hola! hicimos click')

    })


})


