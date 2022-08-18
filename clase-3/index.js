/*
estructura del for

for(desde; hasta; actualizacion){
    codigo a repetir
}
*/
// i++,     i = i +1

/*
for(let i = 0; i < 3; i++){
    alert("hola");
}
alert("terminamos");
*/

/*
let numero = parseInt(prompt(Ingresar un numero));

for (let i = 0; i<= 10; i++){
    let resultado = numero * i;
    let mensaje = `${numero} * ${i} = ${resultado}`;
    alert(mensaje);
}
*/

/*
for(let i = 0; i <= 10; i++) {
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Turno #${i} Nombre: ${nombre}`;
    alert(mensaje);
}
*/

/*
for(let i = 0; i <= 10; i++) {
    if (i === 5) {
        break
    }

    console.log("Hola");
}

console.log("terminamos");
*/

/*
for(let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log("terminamos");
*/

/*

bucle infinito (no activar)

let repetir = true;

while(repetir){
    console.log("hola");
}
*/

/*
let usuario = prompt("Ingrese el usuario");

while(usuario != "andres"){
    alert("usuario incorrecto");
    usuario = prompt("Ingrese el usuario");
}

alert("Bienvenido");
*/

/*
let numero;

do{
    let numero = parseInt(prompt("Ingrese un numero"));
}while(numero != 5)

*/

/*
estructura del switch
switch(valor){
    case value1:
        codigo a ejecutar
        break;
    
    case value2:
        codigo a ejecutar
        break;

    default:
        codigo a ejecutar
        break;
    }
*/

/*
    let moneda = "usd";

    switch(moneda){
        case "cop":
            console.log("es de colombia");
            break;
        
        case "ars":
            console.log("es de argentina");
            break;
        
        case "clp":
            console.log("es de chile");
            break;
        
        default:
            console.log("ingresarte una moneda diferente");
            break;
    }
*/

/*
let i = 0;

while (i < 10){
    console.log(i);
    i++;
}
*/

