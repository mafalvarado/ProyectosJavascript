/*el orden de los parametros si importa */
/*entre corchetes: cuerpo de la funcion */

function imprimir(name, lastName) {
  console.log(name, lastName)
}

/*DOS FORMAS DE MANDAR LLAMAR UNA FUNCIÓN */

imprimir('fer', 'alvarado')

function imprimir2({ name, lastName }) {
  console.log(name, lastName)
}

imprimir2({ name: 'rosa', lastName: 'azul' })

function imprimir3({ name, lastName }) {
  console.log(name, lastName)
}

imprimir3({ lastName: 'azul', name: 'rosa' })

/* OTRA FORMA */

function imprimir4({ name, lastName, age, gender, height }) {
  console.log(name, lastName, age, gender)
}

imprimir4({
  lastName: 'azul',
  name: 'rosa',
  age: '30',
  gender: 'female',
  height: '1.54'
})

/* PROPS IMPRIME SOLO LO QUE QUIERO */

function imprimir5(props) {
  const { age, ...rest } = props
  console.log(age, rest)
}

imprimir5({
  lastName: 'azul',
  name: 'rosa',
  age: '30',
  gender: 'female',
  height: '1.54'
})

/* SCOPE GLOBAL */

const a = 'Hola Mundo'

console.log(a)

/* SCOPE LOCAL */

function scope() {
  const b = 'Saludos'
  console.log(b)
}

scope()

/* FUNCION SUMA */

function suma(a, b) {
  const resultado = a + b
  console.log(resultado)
}

suma(4, 5)

/* TEMPLATE STRINGS / INTERPOLACIÓN */

const person = 'Fer'

console.log(`Hola mundo ${person} mucho gusto`)
