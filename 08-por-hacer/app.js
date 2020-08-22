// Aqui se procede a hacer la destructuración, Algo nuevo del EMC6
// De este modo se evita utilizar la sintaxis "argv.argv" para obtener la  propiedad YARGS con todos sus parámetros
const { argv } = require('./config/yargs')
    // se procede a importar el archivo "por-hacer" para luego ejecutar la función crear
const porHacer = require('./por-hacer/por-hacer');
// const yargs = require('./config/yargs');
// se procede a utilizar el comando switch para definir los comandos de entrada por consola (crear, listar, actualizar)
// como se hizo en el archivo "06-YARGS"

// La variable "comando" almacena el primer comando que se introduce por consola, es decir, el elemento de la matriz
// que se ubica en la posición cero [0].
let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log('crear por hacer');
        // procedo a invocar la función "crear" que se encuentra en el archivo "por-hacer"
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        //    en la variable tarea se guarda la descripción de la tarea introducida por consola
        // "porHacer" es el módulo que se importó del archivo "por-hacer", "crear" es la función del módulo
        // que se ha importado, "argv" es el array propiedad de "yargs" donde están algunos comandos por defectos
        // y los comandos que se han definido con sus propiedades, como por ejemplo en este caso la propiedad "descripcion"
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