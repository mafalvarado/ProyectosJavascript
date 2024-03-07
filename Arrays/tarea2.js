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

const students = [
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

const grades = students.reduce((acc, curr) => {
  return acc
}, [])
