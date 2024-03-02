const colores = ['verde', 'amarillo', 'rosa', 'azul', 'morado']

/*let i = 0

while (i < colores.length) {
  console.log(colores[i])
  i++
} 

for (i = 0; i < 4; i++) {
  console.log(colores[i])
}

for (i = 0; i < colores.length; i++) {
  console.log(colores[i])
} */


/* Para imprimir hasta eñ item que escoja */
let i = 0

while (i < colores.length) {
  console.log(colores[i])

  if (colores[i] === 'azul') break

  i++
}

/* para saltarme un item */

while (i < colores.lenght) {
  if (colores[i] === 'azul') {
    i++
    continue
  }

  console.log(colores[i])
  i++
}
