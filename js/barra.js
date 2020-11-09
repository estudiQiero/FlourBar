// codigo para automatizar la barra de progreso de venta de pisos.
// por Miq Alarcia - estudi Qiero 2020.

function barraProgreso() {

    // Chequear que ningun elemento dentro del id "termometro" contiene la clase "vendido". Si la encuentra, borrarla con "remove".
    // let i;
    // let termometro = document.getElementByid('termometro');
    // for (i = 0; i < ventas; i++) {
    //     bloque[i].classList.add("vendido");
    // }

    let ventas = document.querySelector('#pisosVendidos').value;

    let porcentaje = ventas / 13;
    // posicionamiento del texto porcentaje
    let puntoCero = -25; // coordenada 0
    let puntoActual = (puntoCero + (45 * ventas))
    // redondeo hacia arriba del porcentaje
    porcentaje = Math.ceil(porcentaje * 100);
    document.querySelector('#valorPorcentaje').innerHTML = porcentaje + "%";
    document.querySelector('#valorPorcentaje').style.left = (puntoActual) + "px";

    // añade clase 'vendido' a bloques
    let i;
    let bloque = document.getElementsByClassName('libre');
    if (ventas > 0) {
        for (i = 0; i < ventas; i++) {
            bloque[i].classList.add("vendido");
        }
    }
}

barraProgreso();