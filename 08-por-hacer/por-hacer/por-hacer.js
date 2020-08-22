const fs = require('fs');

let listadoPorHacer = [];
// en este array se almacenará las notas de las tareas por hacer. El array inicialmente se ha declarado
// como un array vacío

const guardarDB = () => {
    // el comando "JSON.stringify" lo que hace es convertir el objeto "listadoPorHacer" en un 
    // texto formato json valido
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error("no se ha podido guardar", err);

    })
}


// Se procede a crear una función llamada "cargarDB"

const cargarDB = () => {

    // Para poder leer la información del archivo json, basta con hacer una petición 
    // require de ese archivo y, la función, al detectar que es un archivo JSON lo convierte en 
    // un objeto. Este objeto se almacena en la variable listadoPorHacer

    // El try y catch se colocan porque si el archivo data.json esta vacio se arroja un error
    // al momento de importar por medio del "require", ya que no es un formato de json valido.
    // Por este motiv se intenta ejecutar el código con el comando try y si arroja un error
    // se define el listadoPorHacer como un array vacio
    try {
        listadoPorHacer = require('../db/data.json');
        //? console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }

}


// Se procede a crear una una función "crear" donde se define internamente un objeto con 
// las caracteristicas de las tareas por hacer.

const crear = (descripcion) => {


    // se ha ejecutado el programa comentando todo el código siguiente con el fin de poder probar que
    // se muestre por consola la información contenida en el archivo "data.json"
    cargarDB();
    let porHacer = {
        descripcion,
        // descripcion:descripcion,  "NOTA": Recordar que a partir del EMC6 colocar si el nombre de la propiedad
        // es igual al nombre del argumento, es suficiente con coloar el nombre deñ argumento como se hizo anteriormente.
        //  En este caso descripcion
        completado: false
    };

    // Luego se procede a guardar el objeto "porHacer" en el array "listadoPorHacer"
    listadoPorHacer.push(porHacer);
    guardarDB();
    // Finalmente devolvemos el objeto porHacer tras ejecutar la función "crear"
    return porHacer;
}

// se procede a exportar la función "crear" con el fin de poder ser importado desde otros archivos

module.exports = {
    crear
}