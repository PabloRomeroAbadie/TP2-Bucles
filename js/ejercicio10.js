// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada
// una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por
// ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("introduzca numero de filas"));
let columnas = parseInt(prompt("introduzca numero de columnas"))
let resultado = filas * columnas;

document.write("<table border>");

for(let i = 0; i < filas; i++){
    document.write("<tr>");
    for(let k = 0; k < columnas;k++ ){
    document.write("<td>");
    document.write(resultado);
    resultado--;
    document.write("</td>")
}document.write("</tr>"); 
}document.write("</table>")