/* RESPUESTA

const numeros = [1,2,3,4,5,6]
const resultado1 = numeros.map((numero) => Array(numero).fill(numero))
console.log("🚀 ~ resultado1:", resultado1)
const resultado2 = numeros.map((numero) => {
  const array = []
  for(let i = 0; i < numero; i++) array.push(numero)
  return array
})
console.log("🚀 ~ resultado2:", resultado2)
const resultado3 = numeros.reduce((acc, curr) => {
  const array = []
  for(let i = 0; i < curr; i++) array.push(curr)
  acc.push(array)
  return acc
}, [])
console.log("🚀 ~ resultado3:", resultado3)

*/

/* Dado un arreglo [1,2,3,4,5,6], retornar un nuevo arreglo que contenga como elementos, 
arreglos con la cantidad de elementos que indica el numero: ejemplo: [[1],[2,2],[3,3,3], ...] */

const numeros = [1, 2, 3, 4, 5, 6]

const array = numeros.reduce((acc, curr) => {
  acc.push(acc + curr)
  return acc
}, [])

console.log(array)

//const array2 = numeros.forEach((element) => console.log(element))

/* const resultado = numeros.map((numero) => numero.push(numero))

console.log('resultado:', resultado) */

/* Crear una función que dado una array y un string devuelva los elementos del arreglo que contengan al 
string ejemplo: f('ma',['manzana','perro','marmota']) devuelve ['manzana','marmota'] */

const objects = ['manzana', 'marmota', 'perro', 'manta', 'libro']
const result = objects.filter((object) => object.includes('ma'))

console.log(result)

// Dado un arreglo de calificaciones de un grupo, devolver el promedio de cada alumno

const alumnos = [
  {
    name: 'Pedro',
    grades: [8, 10, 5, 9, 5]
  },
  {
    name: 'Lucía',
    grades: [7, 6, 9, 9, 7]
  },
  {
    name: 'Silvia',
    grades: [6, 5, 9, 8, 10]
  },
  {
    name: 'Laura',
    grades: [8, 5, 5, 6, 8]
  }
]

const promedios = alumnos.map((alumno) => {
  let sumatoria = 0
  const gradesLength = alumno.grades.length

  alumno.grades.forEach((grade) => {
    sumatoria = sumatoria + grade
  })

  const resultado = sumatoria / gradesLength
  const persona = {
    name: alumno.name,
    average: resultado
  }

  return persona
})

console.log('promedios:', promedios)
