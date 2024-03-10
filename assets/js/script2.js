let parrafo = document.querySelector("p")

function agregarValor(){

let valor = document.querySelector("#v1").value
let valor2 = document.querySelector("#v2").value
let valor3 = document.querySelector("#v3").value


    if (Number(valor) + Number(valor2) + Number(valor3) <= 10){
        let final = Number(valor) + Number(valor2) + Number(valor3);
        parrafo.innerHTML = (`Llevas ${final} Stickers`);
    } else if (Number(valor) + Number(valor2) + Number(valor3) >= 10){
        parrafo.innerHTML = ("Llevas demasiados Stickers");
    }
}
