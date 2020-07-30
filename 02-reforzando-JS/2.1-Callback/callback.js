const getUsuarioByID = (id, callback) => {
    // Nota una función callback es pasada como parámetro de tipo string(en este caso: callback) a la función, pero luego 
    // cuando se invoca es mediante callback()  y se le incluyen todos los parámetros que se deseen  
    let usuario = {
            nombre: "Yoel",
            id // a partir del EMC6 es lo mismo colocar solo id ó id:id , ya que el parámetro de la función tiene el mismo nombre de la propiedad
        }
        // cuando la ejecución del código llegue aquí empieza a ejecutar el callback
        // se puede apreciar que se le incluido un parámetro con nombre : usuario, pero se le pueden incluir todos los que se deseen
        // callback(usuario);

    //? Suponiendo que el usuario con id=20 no existe en la base de datos con el fin de emular un error 
    if (id == 20) {
        let msj = `el usuario con id ${id} no existe en la BBDD`;
        callback(msj);
    } else {
        // ! agrego un null como parámetro para indicar que no existe ningún error

        callback(null, usuario);
    }
    //! NOTA: Al dejarlo así como está previamente al invocar la función se ejecuta el console.log
    // imprimiendo "usuario de la base de datos" el usuario con id 20 no exis...
    // De este modo, no se sabe cuando hubo un error y, por ello, es recomendable colocar siempre como primer
    // parámetro de una función callback el parámetro error = err
};

//* Invoco la función :
// ! agrego el parámetro err en la función callback
getUsuarioByID(2, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log("usuario de la base de datos", usuario); // esto no es concatenación. Lo que se ha hecho es incluir dos parámetros en el console.log
    }
})