//* los objetos no son ITERABLES *//

const persona = {
  name: 'Samuel',
  age: 31,
  height: '1.80',
  gender: 'male',
  isAlive: true,
  foodType: ['frutas', 'verduras', 'proteinas'],
  eyes: { color: 'brown', shape: 'big' },
  dormir: function () {
    console.log('estoy durmiendo...')
  },
  comer: function () {
    console.log('estoy comiendo...')
  }
}

//* funciones = metodos *//

console.log(persona.name)

console.log(persona.eyes.shape)

persona.comer()
persona.dormir()

//* los parentesis ejecutan las funciones *//

