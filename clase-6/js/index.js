// const arreglo1 =[];
// const arreglo2 =[5, 7, 6, 8, 9];
// const arreglo3 =["andres", "joana", "mariana", "juaco"];
// const arreglo4 =[true, false, false, true];
// const arreglo5 =[true, 5, "pepito"];

// console.log(arreglo5[1]);
// console.log(arreglo5[2]);
// console.log(arreglo2[2] + arreglo2[4]);

/*

const arreglo2 =[5, 7, 6, 8, 9];

for(let index = 0; index < 5; index++){
    console.log(arreglo2[index]);
}

*/

// const arreglo3 =["andres", "joana", "mariana", "juaco"];

// for(let index = 0; index < arreglo3.length; index++){
//    console.log(arreglo3[index].toUpperCase());
// }

/*

// push agrega elementos al final
arreglo3.push("camila");
console.log(arreglo3.length);
console.log(arreglo3);

// unshift agrega elementos al principio
arreglo3.unshift("pepito");
console.log(arreglo3.length);
console.log(arreglo3);

// pop para sacar elementos del final
arreglo3.pop();
console.log(arreglo3.length);
console.log(arreglo3);

// shift para sacar elementos del principio
arreglo3.shift();
console.log(arreglo3.length);
console.log(arreglo3);

*/

// splice hace una copia o hace un recorte - depende el uso que quiera darle

/* const arreglo3 =["andres", "joana", "mariana", "juaco"];

const nuevo = arreglo3.splice(1,3);
console.log(arreglo3);
console.log(nuevo);

*/

//join concatena todos los elementos del arreglo en un solo string separando los elementos por lo indicado dentro de los parentesis

/*

const arreglo3 =["andres", "joana", "mariana", "juaco"];

console.log(arreglo3.join(" - "));

*/


//concat concatena arreglos - arrays

/*

const arreglo3 =["andres", "joana", "mariana", "juaco"];

const numeros = [1, 2, 3, 4, 5];

const varios = numeros.concat(arreglo3);
console.log(varios);

*/

//slide hace una copia de un arreglo

/*

const arreglo3 =["andres", "joana", "mariana", "juaco"];

console.log(arreglo3.slice(1, 3));

*/

// indexOf busca la posicion en el arreglo

/*

const arreglo3 =["andres", "joana", "mariana", "juaco"];

console.log(arreglo3.indexOf("mariana"));

*/

//includes valida si el arreglo contiene el elemento que se encuentran en los ()

/*

const arreglo3 =["andres", "joana", "mariana", "juaco"];

console.log(arreglo3.includes("andres"));

*/

//reverse invierte el orden de los arreglos

/*

const arreglo3 =["andres", "joana", "mariana", "juaco"];

console.log(arreglo3.reverse());

*/

/*

const arreglo3 =["andres", "joana", "mariana", "juaco"];

const eliminar = (nombre) => {
    let posicion = arreglo3.indexOf(nombre);

    if(posicion != -1){
        arreglo3.splice(posicion, 1);
    }
    
    console.log(arreglo3);

}

eliminar("joana");

*/

/*

const array = [
    {nombre: "camisa", precio: 1000},
    {nombre: "gorra", precio: 700},
];

array.push({nombre: "pantalon", precio: 500});

console.log(array);

*/

/*

class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }
}

const array = [];

for(let i = 0; i < 7; i++){
  let nombre = prompt("ingrese el nombre");
  let precio = prompt("ingrese el precio");
  let obj = new Producto(nombre, precio);

  array.push(obj);
}

console.log(array);


*/

const productos = [
    {id: 1, producto: "Arroz"},
    {id: 2, producto: "Fideo"},
    {id: 3, producto: "Pan"},

];

for(const item of productos){
    console.log(item.producto);
}