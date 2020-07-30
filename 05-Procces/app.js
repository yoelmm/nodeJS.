// En este ejercicio vamos a trabajar utilizando el mismo código que la carpeta anterior (03-Require), pero
// separando la lógica de programación de la app principal. De este modo, se realiza la importación
// de un archivo externo para el correcto funcionamiento de la app. El código que se ha utilizado se ha copiado en
// en el archivo multiplicar.js


// let base = 7;
let argv = process.argv;
let parametro = argv[2];
// el split me permite separa un string en un array, el '=' es el indicador de separación. 
// es decir en consola se introduce --base=2. la separación sería = ['--base','2']
let base = parametro.split('=')[1];

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

//? PROCCES
// console.log(process);
// La propiedad argv del objeto procces integrado en nodeJS devuelve una matriz que contiene los argumentos
// de la linea de comando pasados cuando se inicio del proceso de nodeJS. El primer elemento
// de la matriz es la ruta donde está el ejecutable de node. El segundo argumento es la ruta del archivo
// que se esta ejecutando en ese momento y el resto de los argumentos se van agregando por la linea de
// comandos