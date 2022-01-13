// Crea script para generar pirámide siguiente con los números del 1 al número que indique
// el usuario (no mayor de 50)
// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numero = prompt("indique un numero del 1 al 50");

if(Number(numero) == numero){
    if(numero > 0 && numero <= 50){
    for(i=1; i <=numero;i++){
        for(k=1; k <=i; k++){
            document.write(k)
        }document.write("<br>")
    }
}else{
    alert("no ingreso un numero valido");
    }  
}
 