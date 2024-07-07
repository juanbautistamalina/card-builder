function añadirTarjeta() {
  
    let titulo = document.getElementById("titulo");
    let tituloContenido = titulo.value;

    let descripcion = document.getElementById("descripcion");
    let descripcionContenido = descripcion.value;

    if (tituloContenido == "") {
    } else {
        const tarjeta = document.createElement("DIV");
        tarjeta.classList.add("tarjeta");

        const tituloTarjeta = document.createElement("H3");
        tituloTarjeta.innerHTML = tituloContenido;

        const descripcionTarjeta = document.createElement("P");
        descripcionTarjeta.innerHTML = descripcionContenido;

        tarjeta.appendChild(tituloTarjeta);
        tarjeta.appendChild(descripcionTarjeta);
        contenedor.appendChild(tarjeta);

        titulo.value = "";
        descripcion.value = "";
  }
}

function limpiarTarjetas() {
  contenedor.innerHTML = "";
}

const contenedor = document.getElementById("contenedor-tarjetas");

const añadir = document.getElementById("btn-añadir");
añadir.onclick = añadirTarjeta;

const limpiar = document.getElementById("btn-limpiar");
limpiar.onclick = limpiarTarjetas;
