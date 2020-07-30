// Después de haber instalado el archivo donde se registran las dependencias (package.json) y haber
// instalado la librería "Yargs" como paquete de dependencia en el programa se procede a llamar la liberia
// por medio de la función require
//? const argv_yargs = require('yargs').argv;
// recuerda que el argv es una propiedad que devuelve en este caso un objeto con algunos argumentos
// por defecto y, además, se le pueden añadir más argumentos a este objeto desde la consola de comandos

// A continuación, se procede a utilizar la propiedad del módulo process para obtener en este caso
// un array de argumentos que vienen por defecto en este módulo integrado en nodejs. Además, cabe recordar
// que  se pueden incluir nuevos argumentos por la consola de comandos
//? let argv_process = process.argv;

// A continuación procedemos a comparar los argumentos que se arrojan al aplicar la propiedad "argv" 
// a la libreria "yargs" y al módulo integrado de nodejs llamado process
//? console.log(argv_process);
//? console.log(argv_yargs);

// Al introducir por consola el comando generico "node app" se puede apreciar que un objeto
// y un array correspondientes al módulo process y libreria "Yargs" respectivamente. Si se introduce el comando
// "node app listar --base 5" se puede oobservar que en la matriz como resultado de process cada palabra introducida
// despues del comando "node app" se registra com0 un nuevo elemento del array, es decir, [....,'listar','--base', '5']
// Mientras que en el objeto de YARGS se registra "listar" dentro de un array que forma parte del objeto como un comando
// por su sintaxis en cambio la palabra "--base" se registra como un parámetro porque viene precedido por los caracteres "--"
// y por ello se considera como un parametro y por ultimo el "5" se considera como un valor del parámetro "base" y por ello,
// se registra en el objeto como {_:[listar],.., base:5,..}, siempre y cuando la palabra que esté despues de un parámetro venga precedida
// por un espacio " " o un "=" se considera como valor del parámetro anterior. En este caso el 5 viene precedido por un espacio

// !NOTA A CONTINUACION SE LE AGREGA UN POCO MÁS DE COMPLEJIDAD A YARGS
// Tras buscar en google npm Yargs se ha observado que se pueden definir las caracteristicas de los
// parámetros que se introducen por consola después del comando general "node app".

const argv_yargs = require('yargs')
    .command('listar', 'aqui puede ir una breve descripción, en este caso de la multiplicación', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
                // el default permite establecer un valor por defecto al parámetro limite en caso
                // que la persona no introduzca su valor por consola

        }
    })
    .command('crear', 'Permite crear un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
                // el default permite establecer un valor por defecto al parámetro limite en caso
                // que la persona no introduzca su valor por consola

        }
    })
    .argv;
//? console.log(argv_yargs);
// si quieero obtener información solo de la base, cuyo parámetro se ha definido por consola
// hago lo siguiente:
// console.log(argv_yargs.base);
// console.log(argv_yargs.limite);

// console.log(argv_yargs)

// el método "command" permite definir los parámetros y su configuración, en este caso el comando "listar"
// listar es el primer argumento de "command", el segundo argumento es una breve descripción del comando "listar" y el
// tercero es un un objeto donde se configuran las caracteristicas de los parámetros. Por ejemplo: base es un parámetro
// y se ha definido por medio de "demand" que sea obligatorio llamar a este configurar este parámetro por consola
// cuando se ejecute el comando "listar" de lo contrario arroja un error indicando que es requerida pasar el parámetro "base"

// "alias" es una caracteristica para definir un shorcut a los parámetros,es decir, llamar a los parámetros por un atajo de letras
// en este caso en vez de colocar por consola --base se puede colocar solamente -b de forma abreviada

// Por ultimo, si se introduce por consola el comando "node app listar --help" aparece información realcionada
// con la configuración de los parámetros del comando "listar"

//? Esta es la forma tradicional de invocar la función crearArchivo:
// llamo con un require el archivo multiplicar para ser utilizado aqui. En ese archivo está toda la lógica del código
// const multiplicar = require('./multiplicar/multiplicar')
// console.log(multiplicar);
// multiplicar.crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(error => console.log(error));

//? Hay otra forma de invocar la función crearArchivo por medio de un método que se llama destructuración
// consiste en poner dentro de llaves "{}" la función o método del archivo que se importa mediante el require
// De este modo, se accede directamente a la función o método invocando solo su nombre y no por medio del nombre del archivo
// const { crearArchivo } = require('./multiplicar/multiplicar');
// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(error => console.log(error));

// !NOTA: RECUERDA QUE TODOS LOS COMANDOS INTRODUCIDOS POR CONSOLA SE REGISTRAN EN EL ARRAY DEL OBJETO
// ! DE LA PROPIEDAD ARGV DE EL PAQUETE YARGS. Por ejemplo si se introduce por consola "node app crear" 
// !el comando no genérico que es "crear" se almacena en el array del objeto de la propiedad ARGV de la 
// !libreria YARGS

// Debido a lo anteriormente comentado, podemos manejar los elementos (comandos) situado el array con nombre "_"

//  A continuación, se observa como se manejan los comandos introducidos por consola desde el array de argv utilizando yargs

// la siguiente variable indica que se quiere manipular el primer elemento (comando), que está en la posición "0"
// del array con nombre :"_" de la propiedad arg utilizando yargs
let comando = argv_yargs._[0];

// Ahora se procede a utilizar el comando SWITCH para definir condiciones de los comandos que se quieren utilizar:
// Ahora se procede a pegar el código que se ha desarrollado para crear archivos
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv_yargs.base, argv_yargs.limite);
        break;

    case 'crear':
        console.log('crear');


        // crearArchivo(base) ejecutando el código con esta instrucción se arroja un error porque "base" ya no está definida por una variable sino por el objeto de la propiedad argv del paquete YARGS
        crearArchivo(argv_yargs.base, argv_yargs.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no reconocido');

        // hacemos unas pruebas por consola para verificar que se arroje por consola listar, crear o el menos de
        // comando no reconocido según sea el caso
}


// ! Nota: se puede optimizar la configuración del YARGS, se pude crear otro archivo con nombre "config" por ejemplo
// ! donde se guarde todo el código donde se hace el llamado de la libreria "Yargs". Siendo especifico, todo el código desde
// ! la linea 32 hasta la 59. Luego en ese archivo se colocan las instrucciones para exportar el módulo y poder ser usado
// ! en otros archivos. Además, el tercer parámetro del método command se puede optimizar colocando una variable tipo objeto que contiene
// ! todos los parámetros que forman parte de ese objeto.