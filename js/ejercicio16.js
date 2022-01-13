// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo
// “hola que tal” deberá mostrar “lat euq aloh”.

let cadenaTexto = prompt("ingrese cadena de texto");
let caracter= "";
let resultado= "";

for(let i=0; i<cadenaTexto.length;i++){
    caracter =  cadenaTexto.charAt(i)
    resultado= caracter + resultado
}
document.write(resultado)

