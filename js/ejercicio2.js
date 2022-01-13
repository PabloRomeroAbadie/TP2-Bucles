do{
    let nota = parseInt (prompt("ingrese una nota"));
    if (nota === 0 || nota === 1 || nota === 2){
        alert("muy deficiente")
    } else if (nota === 3 || nota === 4){
            alert("insuficiente")
    }else if (nota === 5 || nota === 6){
        alert("suficiente")
    }else if (nota === 7){
       alert("bien")
    }else if (nota === 8 || nota === 9){
        alert("notable")
    }else if (nota === 10){
        alert("sobresaliente")
    }else {
       alert("numero erroneo")
    }
}while(nota != Number )
document.write("introduce un numero valido")

    