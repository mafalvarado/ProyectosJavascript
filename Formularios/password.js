document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('[name="password"]')
    const toggle = document.querySelector('#showPassword')

    toggle.addEventListener('click', (event) => {
        const btnSpan = event.target

        if(btnSpan.innerHTML === '🐵') {
            input.setAttribute('type', 'text')
            btnSpan.innerHTML = '🙈'
          }
          else {
            input.setAttribute('type', 'password')
            btnSpan.innerHTML = '🐵'
          }

    })


})