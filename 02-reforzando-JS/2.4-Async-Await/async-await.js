// A partir del ECMAscript7 existe un nuevo método para poder trabajar con promesas, que es con
// async-await. Por medio de este nuevo método se facilita la comprensión  y el trabajo con promesas

//? "async" es una palabra clave del ECMAscript 7 se coloca antes de un función tradicional o una función flecha
//?para indicar que esa función retorna un promesa. Por ejemplo:

// * Ejemplo en una función flecha:
const getNombre = async() => {
    // cualquier error que suceda aquí va a disparar el catch. Por ejemplo:
    // throw new Error("No se ha encontrado el usuario en la BBDD");
    // con el throw new Error se llama al constructor del objeto Error para definir un error personalizado


    return "Yoel";
};
//* Ejemplo en una función tradicional: 
// const getNombre = async function(){
// return "JOSE"
// }

// Ahora se procede a manejar la respuesta que retorna la promesa con el método async
// utilizando el metodo .then
getNombre().then(nombre => {
        console.log(nombre);
    }) // para atrapar el error en caso de existir algún error, se hace lo siguiente:
    .catch(error => {
        console.log("el error es: ", error)
    })

//! NOTA: con el async es como si se estuviera haciendo lo que hemos venido haciendo en los
// !archivos anteriores:

// const getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Fernando');
//     })
// }

//*COMO UTILIZAR "await" Y PARA QUE SIRVE?
// await es un método que permite esperar que se ejecute una función para poder continuar con la siguiente función
// es algo similiar como una petición sincrona, es decir, tiene que culminar una función para poder iniciar
// la siguiente. NOTA: PARA PODER UTILIZAR await debe estar dentro de un async. Por tanto, no funciona su uso en
// funciones regulares solo en promesas. Por ejemplo:

const getSaludo = async() => {

    let nombre = await getNombre();

    return `Hola ${nombre}`;
}