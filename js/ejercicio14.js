// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre
// cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir
// “h-o-l-a- -q-u-e- -t-a-l”.

let cadenaTexto = prompt("ingrese cadena de texto");
let caracteres = cadenaTexto.length;
let caracter = "";

for(let i = 0; i < caracteres; i++){
    caracter = cadenaTexto.charAt(i)
    if(i === caracteres-1){
        document.write(caracter) 
    }else{
        document.write(caracter + "-")
    }
}




