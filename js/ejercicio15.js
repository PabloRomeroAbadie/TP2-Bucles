// Realiza un script que cuente el número de vocales que tiene un texto.

let cadenaTexto = prompt("ingrese cadena de texto");
let caracter= "";
let contador = 0;

for(let i = 0; i <cadenaTexto.length; i++){
    caracter = cadenaTexto.charAt(i)
    if(caracter == "a" || caracter== "e" || caracter== "i" || caracter== "o" || caracter== "u" ){
        contador++;
    }
}

document.write("numero de vocales: " +contador);