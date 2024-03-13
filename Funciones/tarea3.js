/* 1. Función que recibe una fecha y devuelve la cantidad de minutos, segundos, días, 
meses y años que han pasado desde la fecha proporcionada hasta "hoy" */

/* const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()

const currentDate = `${day}/${month}/${year}`
console.log(currentDate) */

const randomDay = new Date('2000-12-24')
const today = new Date()

const comparison = (date1, date2) => {
  const diference = date2 - date1

  const segundos = Math.floor(diference / 1000)
  const minutos = Math.floor(segundos / 60)
  const horas = Math.floor(minutos / 60)
  const dias = Math.floor(horas / 24)
  const meses = Math.floor(dias / 30)
  const años = Math.floor(meses / 12)

  return {
    años: años,
    meses: meses,
    dias: dias,
    horas: horas,
    minutos: minutos,
    segundos: segundos
  }
}

console.log(
  `Han pasado: ${comparison(randomDay, today).años} años con ${comparison(randomDay, today).meses} meses con ${comparison(randomDay, today).dias} días`
)

// 2. Crear una función que al lanzar una moneda me diga si cae "aguila" o "sol"

function flipCoin() {
  const flip = Math.floor(Math.random() * 2)
  if (flip === 0) {
    console.log('Heads')
  } else {
    console.log('Tails')
  }
}

console.log(flipCoin())
