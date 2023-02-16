let obj = {
    nombre: "Carlos",
    edad: 44,
    apellido: "Ulibarri",
    keypress: function(){
        return ("Se ha presionado una tecla");
    },
    mouseOver: function(){
        return ("El puntero del mouse esta arriba");
    }
}

console.log(obj.nombre);
console.log(obj['nombre']); // Estas dos opciones son muestra el mismo resultado solo que el de corchetes es sensible a
                            // mayusculas y minusculas.

let myKey = 'nombre';
console.log(obj[myKey]);  

myKey = 'keypress';
console.log(obj[myKey]());

myKey = 'mouseOver';
console.log(obj[myKey]()); // Hay un undefined cuando usamos console.log porque no estamos regresando nada

let myArray = [];

myArray.push(4);
myArray.push("una  cadena");
myArray.push(obj);
myArray.push(function(){
    console.log("Hola desde mi array");
})

console.log(myArray) // Este console.log nos muestra como myArray tiene datos de diferente dato

console.log(myArray[2][myKey]()) // Se ejecuta sin problemas
//console.log(myArray[3][myKey]()) // Da error, dice que no es una funcion

let funcArray = [];

funcArray.push(() => {
    return ("Function 1");
});

funcArray.push(() => {
    return ("Function 2");
});

funcArray.push(() => {
    return ("Function 3");
});

funcArray.forEach((item) => {
    console.log (item());
}) // Se ejecuta posicion por posicion


var Emitter = require('./emitter.js');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log("Somewhere, someon said hello.");
});

emtr.on('greet', () => {
    console.log("A greeting ocurred!");
});

console.log("Hello!");
emtr.emit('greet'); // Imprim el said hello y greeting ocurred

emtr.on('jump', () => {
    console.log("Someone jumped!");
})

console.log(emtr); // Imprime todaslas funciones
emtr.emit('jump');