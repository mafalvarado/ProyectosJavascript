/* EJERCICIO 1 */

function greeting(name) {
  if (name) {
    console.log(`Hola ${name} mucho gusto`)
  } else {
    console.log('Hola amigo')
  }
}

greeting('Fer')

/* RESPUESTA */

function saludar (name) {
  const saludo = `Hola ${name}, mucho gusto`

  return saludo
}

console.log(saludar())

/* EJERCICIO 2 

const global = 0

function num() {
  if (global > 10) {
    return
  }
  global = global + 1
  console.log(global)
}

num() */

/* RESPUESTA */

let count = 0

function alterar () {
  count = count + 1
}

alterar()
console.log(count)

/* EJERCICIO 3 */

function number (a) {
  if (a % 2 === 0) {
    console.log('es par')
  } else {
    console.log('es impar')
  }
}

number(6)
