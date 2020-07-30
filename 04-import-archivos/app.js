// En este ejercicio vamos a trabajar utilizando el mismo código que la carpeta anterior (03-Require), pero
// separando la lógica de programación de la app principal. De este modo, se realiza la importación
// de un archivo externo para el correcto funcionamiento de la app. El código que se ha utilizado se ha copiado en
// en el archivo multiplicar.js


let base = 7;

// llamo con un require el archivo multiplicar para ser utilizado aqui. En ese archivo está toda la lógica del código

const multiplicar = require('./multiplicar/multiplicar')

// console.log(multiplicar);

multiplicar.crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(error => console.log(error));

// Hay otra forma de invocar la función crearArchivo por medio de un método que se llama destructuración

// const {crearArchivo}= require('./multiplicar/multiplicar');
// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(error => console.log(error));