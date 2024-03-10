let activo = false;

function agregarBorder() {
    let imagen = document.querySelector(".caja");
    let borderSi = imagen.style.border;

    if (activo === false) {
        imagen.style.border = "2px solid red"; 
        activo = true;
    } else {
        imagen.style.border = "white"; 
        activo = false;
    }
}