function valorBoton(){
    let parrafo = document.querySelector("p");
    let pass1 = document.querySelector(".selector1").value;
    let pass2 = document.querySelector(".selector2").value;
    let pass3 = document.querySelector(".selector3").value;

    if (pass1 + pass2 + pass3 == 911){
      parrafo.innerHTML = "Contraseña Correcta";
    } else if (pass1 + pass2 + pass3 == 714){
        parrafo.innerHTML = "Contraseña Correcta";
    } else {
        parrafo.innerHTML = "Contraseña Incorrecta";
    }
}