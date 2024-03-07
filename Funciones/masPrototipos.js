// PROTOTIOPO MAP

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const resultado = numeros.map((numero) => numero * 2)

console.log('resultado:', resultado)

// TABLAS DE MULTIPLICAR

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = numbers.map(
  (numero2) => `la multiplicación de ${numero2} es igual a ${numero2 * 2}`
)

console.log('resultado:', result)

// COMO ESCRIBIR UN ARRAY NO MANUAL

const numeros3 = Array(100).fill().map((elemento, index) => index + 1)
console.log(numeros3)

