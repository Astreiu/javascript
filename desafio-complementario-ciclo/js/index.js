// defino variables
let codigoPostal
let localidad

alert("Bienvenido a el selector de localidades - Ingrese localidad para iniciar")
//bucle mientras no se escriba salir
while (localidad != "salir"){
    localidad = prompt("Ingrese localidad");
    localidad = localidad .toLowerCase(); // paso a minusculas
    // condicional para saber si las localidades estan registradas
    if (localidad == "colegiales"){
        alert("Ingresado a " + localidad)
    }else if (localidad === "palermo"){
        alert("Ingresado la localidad " + localidad);
    } else if (localidad === "recoleta"){
        alert("Ingresado la localidad " + localidad);
    } else if (localidad === "belgrano"){
        alert("Ingresado la localidad " + localidad);
    }
    else{
        alert("El barrio no es valido")
        break
    }
    // ingreso de codigo postal y condicion se agregar o no el codigo postal 
    codigoPostal = prompt("Ingrese codigo postal");
    codigoPostal = parseInt(codigoPostal); //convierto a numero entero
    if (codigoPostal > 1000){
        alert("codigo postal de "+ localidad + " - Agregado");
    } else{
        alert("codigo postal de "+ localidad + " - Invalido");
    }
}
