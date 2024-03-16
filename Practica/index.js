document.addEventListener('DOMContentLoaded', () => {

    const container = document.querySelector('body')

    const nav = document.createElement('div')

    nav.classList = 'contenedor-de-botones'

    container.append(nav)

    // ... 

    const createBtn = ({background ='cyan', color = 'white', url, text = '....'}, box) => {
        const btn = document.createElement('a')

        btn.textContent = text
        btn.setAttribute('href', url)

        btn.style.background = background
        btn.style.color = color
        btn.style.border = 'dashed pink 3px '
        btn.style.borderRadius = '5px'
        btn.style.display = 'inline-block'
        btn.style.minWidth = '200px'
        btn.style.textAlign = 'center'
        btn.style.padding = '10px'

        box.append(btn)

    }

    createBtn({}, nav)

    createBtn({background:'purple', color:'black', url:'/nueva-pagina.htlm', text:'boton de fer'}, nav)
    createBtn({background:'white', color:'teal', url:'/nueva-pagina2.htlm', text:'boton de maria'}, nav)

})