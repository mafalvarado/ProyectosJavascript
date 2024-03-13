document.addEventListener("DOMContentLoaded", () => {
  /* const titulo = document.getElementById('elementoId')
  
    console.log("🚀 ~ titulo:", titulo) */

  const titulo = document.querySelectorAll("h1"); /* POR TAG NAME */
  
  const titulo2 =
    document.querySelectorAll(
      ".elementoClase"
    ); /* POR CLASE JS TOMA EL PRIMERO DEL HTML */
  
    const titulo3 =
    document.querySelectorAll(
      "[atributoElementO]"
    ); /* POR ATTRIBUTE JS TOMA EL PRIMERO DEL HTML */

  const parrafos = document.querySelectorAll("p");

  parrafos.forEach((p, i) => {
    // p.textContent('Hola') // agregar un string
    p.innerHTML = p.innerHTML + " " + (i + 1); // agregar HTML
  });

  const parrafos2 = document.querySelectorAll("p");

  parrafos2.forEach((p, i) => {
    const content = p.innerHTML;

    if (!content.includes(".")) p.innerHTML = "$" + content;
  });



  const secondaryTitle = document.querySelector("h2");

  secondaryTitle.style.fontSize = '50px';
});
