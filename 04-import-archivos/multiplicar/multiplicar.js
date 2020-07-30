// El require se utiliza para importar módulos integrados en nodeJS, como por ejemplo el módulo .fs
var fs = require('fs');

const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = '';

        // coloco una serie de instrucciones para que se acepten solo números 

        // el error de la siguiente condición es que acepta números como string ('5');
        if (!Number(base)) {
            reject(`el valor introducido  "${base}" no es un número`);
            // el return es para que el código se quede hasta aquí y no continúe
            return;
        }

        for (let i = 1; i <= 10; i++) {
            // el "\n" se ha colocado para poder dar un salto de linea cada vez que se realice una multiplicación
            data += `${base}*${i}=${base*i}\n`;
        }
        // console.log(data);
        console.log(data);
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                // en el resolve se manda el nombre del archivo porque en el archivo app.js cuando se invoca la
                // funcion crearArchivo se está esperando como parámetro el nombre del archivo
                resolve(`tabla-${base}.txt`)
            }

        });

    })
}

// Ahora procedo a exportar esta función para ser utilizada de forma global para poder ser utilizada 
// en el archivo app.js. Para ello, se hace lo siguiente:

module.exports = {
    // crearArchivo:crearArchivo,
    // A partir del EMC6  si el nombre de la propiedad es el mismo que el parámetro, es suficiente colocar
    // el nombre del parámetro. Por ejemplo:
    crearArchivo
}