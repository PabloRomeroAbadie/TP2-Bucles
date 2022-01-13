/*Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con
“cancelar” deben mostrarse todas las cadenas concatenadas con un guión */

let cadenasConcatenadas = "";


do{
    let cadenaTexto = prompt("ingrese cadena de texto");
    if(cadenasConcatenadas === ""){
        cadenasConcatenadas = cadenasConcatenadas + cadenaTexto;
    }else{
        cadenasConcatenadas= cadenasConcatenadas + "-" + cadenaTexto;
    }
}while(confirm("¿desea continuar?")){
    document.write(cadenasConcatenadas);
}
