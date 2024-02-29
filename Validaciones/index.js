function validaciones() {
  if (true) {
    console.log('hago algo')

    return
  }

  console.log('imprimo otra cosa')

  return
}

validaciones()


/* ME VA A IMPRIMIR AMBOS POR QUE NO TENGO 'RETURN' EN EL IF */

function valid() {
  if (true) {
    console.log('hago algo')
  }

  console.log('imprimo otra cosa')

  return
}

valid()

/* IF & ELSE */

const hayAgua = true

if (hayAgua) {
  console.log('te lo tomas')
} else {
  console.log('vas a comprar')
}

/* IF & ELSE IF */

const suma = 5 + 5

if (suma > 12) {
  console.log('es mayor')
} else if (suma === 9) {
  console.log('es igual')
} else {
  console.log('ninguna de las anteriores')
}

/* TERNARIOS 

if else
?  :

*/

const suma2 = 5 + 6

const resultado = suma2 > 4 ? console.log('MAYOR') : console.log('MENOR')
