/*
let nombre = "pepito";
let edad = 23;
let direccion = "Calle 123";
*/

/*
estructura de un objeto

{key1: value1, key2: value2, ... , keyn: valuen}

*/

/*

let persona = {nombre: "pepito", edad: 23, direccion: "Calle 123"};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);

console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["direccion"]);

let lugar = "direccion";
console.log(persona[lugar]);

persona["nombre"] = "Juan";
persona.edad = 67;

console.log(persona);

*/

/*

// Funciones constructoras
function Persona(nombre, edad, dirrecion) {
    this.nombre = nombre;
    this.edad = edad;
    this.dirrecion = dirrecion;
}

const persona1 = new Persona("pepito", 23, "Calle 123");
const persona2 = new Persona("mariana", 22, "Calle 123");
console.log(persona1.nombre);
console.log(persona2.nombre);

*/

/*

function Persona(info){
    this.nombre = info.nombre;
    this.edad = info.edad;
    this.direccion = info.direccion;
    this.colorCabello = info.colorCabello;
    this.colorOjos = info.colorOjos;
}

let persona = new Persona({
    nombre: "Damian",
    edad: 34,
    direccion: "Calle 123",
    colorCabello: "Negro",
    colorOjos: "Azul"
});

console.log(persona1.edad);

function Perrito(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

let perrito1 = new Perrito("firu", 3);
let perrito2 = new Perrito("max", 4);

*/

/*

function Producto(img, precio, nombre){
  this.img = img;
  this.precio = precio;
  this.nombre = nombre;
}

let producto1 = new Producto( 406000, "httpa,sdfhlkasugfojdshf","Monitor sam...");

function Producto(tabla){
  this.img = tabla.img;
  this.precio = tabla.precio;
  this.nombre = tabla.nombre;
}

let producto2 = new Producto({
  nombre: "Monitor sam...",
  precio: 406000,
  img: "httpa,sdfhlkasugfojdshf",
})


*/

/*

function Producto(img, precio, nombre) {
    this.img = img;
    this.precio = precio;
    this.nombre = nombre;
}

let producto1 = new Producto({
    img: "http://www.sitofalso.com",
    precio: 406000,
    nombre: "Monitor Colombia"
})

*/

// console.log("lina".toLocaleUpperCase());

/*

function Persona(nombre, edad, dirrecion) {
    this.nombre = nombre;
    this.edad = edad;
    this.dirrecion = dirrecion;
    this.hablar = function () {console.log("Hola soy " + this.nombre);}
}

let persona1 = new Persona("maria", 45, "AV");
persona1.hablar();

*/

/*

let persona = {
    nombre: "pepito", 
    edad: 23, 
    direccion: "Calle 123"
};

for(const propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

*/

/*

function Persona(nombre, edad, dirrecion) {
    this.nombre = nombre;
    this.edad = edad;
    this.dirrecion = dirrecion;
    this.hablar = function () {console.log("Hola soy " + this.nombre);}
}

*/

/*

class Persona{
    constructor(nombre, edad, dirrecion) {
        this.nombre = nombre;
        this.edad = edad;
        this.dirrecion = dirrecion;
    }

    hablar(){
        console.log("Hola soy " + this.nombre);
    }
}

let persona1 = new Persona ("maria", 34, "AV");
console.log(persona1.edad);

*/

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }

    vender(){
        this.vendido = true;
    }

}

let producto1 = new Producto("Televisor", 100000);
let producto2 = new Producto("Televisor 2", 200000);

console.log(producto1);
console.log(producto2);
producto1.vender();
producto2.vender();
console.log(producto1);
console.log(producto2);
