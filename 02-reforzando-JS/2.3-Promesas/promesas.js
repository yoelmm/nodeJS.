// AHORA EN VEZ DE UTILIZAR LA FUNCIÓN CALLBACK SIMULAREMOS UNA PETICION A LA BASE DE DATOS
//  CON PROMESAS. LAS PROMESAS SON DEL EMC6

let empleados = [{
        id: 1,
        name: "Yoel"
    },
    {
        id: 2,
        name: "Jose"
    },
    {
        id: 3,
        name: "Pedro"
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

// el siguiente código fue tomado del archivo callback2.js. La siguiente función difiere del archivo de origen
// porque solo recibe como parámetro el "id", por ser una promesaq no se necesita añadirle la función callback como
// segundo parámetro. Las funciones callback ahora son parámetro de la promesa, es decir, resolve y reject son funciones callback
const getEmpleados = (id) => {

    return new Promise((resolve, reject) => {
        // Al invocar la promesa inmediatamente esta llama al ejecutor para respoder a la petición. Una vez se tenga
        // respuesta a dicha petición el ejecutor llama a la función callback resolve o reject según sea el caso.
        // es decir si se tiene un resultado a dicha petición se llama a resolve y si se tiene un error se llama a reject
        let empleadoBD = empleados.find(empleado => empleado.id === id);
        if (!empleadoBD) {
            reject(`el empleado con el ID ${id} no se encuentra en la BBDD`)
        } else {
            // en el archivo de origen se pasaba como parámetro "null" con el fin de indicar que no hay error
            // pero ahora estas funciones callback(tanto resolve como reject) solo admiten un parámetro
            resolve(empleadoBD);
        }
        //Al ser llamada la función  callback que corresponda(resolve o reject) esta función retorna un objeto, cuyo objeto
        // tiene dos propiedades internas que son : state y result. state es un objeto que puede tener tres estados: pendiente, cumplimentado o rechazado.
        // Son los estados tras ejecutar la promesa
        // result es otro objeto que puede tener tres estados también. Inicialmente undefined y luego según la respuesta recibida cambiar a value o error
        // es la información recibida como respuesta de la promesa
    })
};

//? Ahora coloco la función getSalary siguiendo el mismo ejemplo que el archivo anterior (callback2.js)

const getSalary = (empleado) => {

    return new Promise((resolve, reject) => {
        let salariosDB = salarios.find(salary => { return salary.id === empleado.id });

        if (!salariosDB) {
            reject(`el salario del empleado no se encuentra en la BBDD`)
        } else {
            resolve({
                name: empleado.name,
                salario: salariosDB.salario
            });
        }

    });
};

//Para poder acceder a estas propiedades del objeto que retorna la promesa, se tiene que utilizar los métodos then, catch o finally
// el más importante es then. catch se utiliza si solo nos interesa manejar el error recibido

// El método then a su vez tiene
//  dos callbacks como parámetros el resultado y el error ..then((result)=>{},(error)=>{})
// estos callbacks se pueden llamar como se desee, pero generalmente la comunidad lo llama result y error . En nuestro caso a result se le ha puesto
// el nombre de "empleado"


// getEmpleados(1).then(
//     empleado => {
//         console.log("el empleado de la BBDD es", empleado);
//         // Aqui llamo la función getSalary. 
//         getSalary(empleado).then((result) => {
//             console.log(`el salario de ${result.name} es de ${result.salario}`);
//         }, err => {
//             console.log(err);
//         });
//     },
//     error => {
//         console.log(error);
//     }
// )

// A CONTINUACIÓN SE OBSERVA COMO EXPRESAR EL LLAMADO DE LA FUNCIÓN ANTERIOR COMO UNA PROMESA EN CADENA
//!NOTA: SI SE QUIERE EXPRESAR UNA PROMESA EN CADENA SERíA DE LA SIGUIENTE MANERA:
getEmpleados(1).then(
        empleado => {
            console.log("el empleado de la BBDD es", empleado);
            // Aqui llamo la función getSalary. 
            return getSalary(empleado);
        })
    .then(result => {
        console.log(`el salario de ${result.name} es de ${result.salario}`);
    })
    .catch(err => {
        console.log(err);
    })

// NOTA:Cuando se trabaja con cadenas lo mejor es poner el método ".catch" para capturar el error
// y no pasar un segundo parámetro (err) como se venia haciendo. El ejecutar el método catch en cadenas
// permite atrapar cualquier error que provenga ya sea de la primera función getEmpleados(1) o de la segunda función
// en cadena getSalary(empleado). Cualquier error de estas funciones es atrapado con el catch y no es necesario
// pasarle un segundo parámetro al método then() como se estaba haciendo para capturar el error