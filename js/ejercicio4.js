/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número
deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá
indicarse la suma total de los números introducidos.*/

let resultado = 0;

do{
    let numeros = parseInt(prompt("ingrese un numero"));
    if(Number(numeros) === numeros){
        resultado = resultado + numeros;
    }else{
        alert("ingrese un numero valido")
    }
}while(confirm("¿desea continuar?")){
    document.write("El resultado de la suma de los numeros ingresados es: "+resultado);
}