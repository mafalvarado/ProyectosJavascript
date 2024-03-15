
/*
- importar funciones normales
import calcular from './calculadora.js'
- cuando tenemos funciones nombradas en el file usamos {} 
import calcular2 {suma, multiplicacion} from './calculadora.js'
- cuando las funciones nombradas tienen el mismo nombre de nuestras funcionesles agregamos <as>
import calcular2 {suma as suma2, multiplicacion as multiplicacion2} from './calculadora.js'
*/




import datos from './datos.json' assert {type: 'json'}
/* podemos importar archivos .json pero hay que especificar que son tipo .json */

import datosNormales from './datos-normales.js'

document.addEventListener('DOMContentLoaded', () => {
  

console.log(datos)

console.log(datosNormales)

})

