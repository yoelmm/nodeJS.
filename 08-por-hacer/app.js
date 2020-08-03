// Aqui se procede a hacer la destructuración, Algo nuevo del EMC6
// De este modo se evita utilizar la sintaxis "argv.argv" para obtener la  propiedad YARGS con todos sus parámetros
const { argv } = require('./config/yargs')

// se procede a utilizar el comando switch para definir los comandos de entrada por consola (crear, listar, actualizar)
// como se hizo en el archivo "06-YARGS"

// La variable "comando" almacena el primer comando que se introduce por consola, es decir, el elemento de la matriz
// que se ubica en la posición cero [0].
let comando = argv._[0]
switch (comando) {
    case 'crear':
        console.log('tareas por hacer');
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        break;
    default:
        console.log('comando no es reconocido');
}