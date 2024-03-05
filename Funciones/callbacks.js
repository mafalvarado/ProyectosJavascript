const imprimir = (message) => console.log(message)

const formato = (str, callback) => {
  const formatted = str.split('').reverse().join(' ')
  callback(formatted)
  return formatted
}

formato('Hola mundo', imprimir)

// imprimir ('hola como están?')
