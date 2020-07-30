let data = '';
let base = 3;

for (let i = 1; i <= 10; i++) {
    // el "\n" se ha colocado para poder dar un salto de linea cada vez que se realice una multiplicación
    data += `${base}*${i}=${base*i}\n`;
}
// console.log(data);
console.log(data);
// El require se utiliza para importar módulos integrados en nodeJS, como por ejemplo el módulo .fs
var fs = require('fs');

// fs.writeFile('tabla-3.txt', 'Hello content!', (err) => {
// ! el primer parámetro es el nombre del archivo
// ! El segundo parámetro es la información que se quiere guardar en el archivo
// ! En el segundo parámetro del método fs.writeFile sustituimos el 'Hello content!' por 
// ! la variable que se ha creado anteriormente llamada "data"
// ! el tercer es un parámetro que permite confirmar si se ha creado el archivo o ha surgido un error
// ! si ha surgido un error se ejecuta la condición if(err) throw err para lanzar el error. De lo contrario, no se ejecuta
// fs.writeFile(`tabla-${base}.txt`, data, (err) => {
// si queremos guardar el archivo en una carpeta, definimos en que carpeta guardarla estableciendo la ruta en el nombre del archivo.
// pero primero se ha crear la carpeta con nombre tablas. Por ejemplo:
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo de la tabla ${base} ha sido creado`);
});

// Como se puede observar con el segundo código se guarda el archivo en la carpeta tablas que se ha creado