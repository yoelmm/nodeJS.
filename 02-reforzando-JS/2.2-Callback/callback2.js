// simularemos una base de datos
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
]

const getEmpleados = (id, callback) => {
        // el método find del array devuelve el primero elemento del array que cumpla con la condición lógica
        let empleadoBD = empleados.find(empleado => empleado.id === id);
        if (!empleadoBD) {
            callback(`el empleado con el ID ${id} no se encuentra en la BBDD`)
        } else {
            callback(null, empleadoBD);
        }

    }
    // Ahora invoco la función

// getEmpleados(10, (err, employed) => {
//     if (err) {
//         // con el return logramos que la instrucciónes del código se ejecuten hasta el return, es decir,
//         // la siguiente instrucción que es console.log(employed) no se ejecutará. Si no colocamos el return 
//         // si se ejecutaría
//         return console.log(err);
//     }
//     console.log(employed);
// });

// Otro ejercicio para arrojar el nombre del empleado y el salario

const getSalary = (empleado, callback) => {
        let salariosDB = salarios.find(salary => { return salary.id === empleado.id });

        if (!salariosDB) {
            callback(`el salario del empleado no se encuentra en la BBDD`)
        } else {
            callback(null, {
                name: empleado.name,
                salario: salariosDB.salario
            });
        }
    }
    // invoco la función dentro de la función getEmpleados para tener el parámetro empleado 
getEmpleados(3, (err, employed) => {
    if (err) {
        // con el return logramos que la instrucciónes del código se ejecuten hasta el return, es decir,
        // la siguiente instrucción que es console.log(employed) no se ejecutará. Si no colocamos el return 
        // si se ejecutaría
        return console.log(err);
    }
    getSalary(employed, (err, employ) => {
        if (err) {
            return console.log(err);
        }
        console.log(employ)
    })
});