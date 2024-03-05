// arrays en reversa

const array1 = ['azul', 'verde', 'morado', 'rojo']
const reverse = array1.reverse()
console.log(reverse)

// el número más grande de un array

const array2 = [11, 206, 3, 49, 5]
console.log(Math.max(...array2))

// función que sume 2 números y arroje un resultado

function sumaNumeros(a, b) {
  const suma = a + b
  console.log(suma)
}

sumaNumeros(5, 9)

// usando arrow function

const sum = (a, b) => a + b
console.log(sum(6, 39))

// INCLUDES

const frases = ['hola', 'adios', 'que tal', 'nos vemos', 'como estas']
console.log(frases.includes('hola'))
console.log(frases.includes('como te va'))

// utilizar un callback
const buscar = 'gato'
const cosas = ['perro', 'gato', 'pajaro', 'tortuga', 'raton', 'perro']

/* const found = cosas.filter((cosa, index) => {
  if (cosa === 'perro') return true
}) */

const found = cosas.filter((cosa) => cosa === buscar)

console.log(cosas, `${buscar} se encontró ${found.length} ${found.length > 1 ? 'veces' : 'vez'}`)

//console.log(found)
