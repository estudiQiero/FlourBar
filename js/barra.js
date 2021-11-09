// codigo para automatizar la barra de progreso de venta de pisos.
// por Miq Alarcia - estudi Qiero 2020.

let numeroPisos;

function mostrarOpciones() {
    let mostrarOpciones = document.getElementById('panel-opciones');
    mostrarOpciones.setAttribute('style', 'display:block');
    let mostrarCruz = document.getElementById('cerrarOpciones');
    mostrarCruz.setAttribute('style', 'display: block');
    let ocultarEngranaje = document.getElementById('cerrarEngranaje');
    ocultarEngranaje.setAttribute('style', 'display: none');
}

function interrOnOff() {
    // let IntOn = document.getElementById('interruptorOnOff');
    // IntOn.setAttribute('style', 'display:block');
    currentvalue = document.getElementById('interruptorOnOff').value;
    if (currentvalue == "Off") {
        document.getElementById("interruptorOnOff").value = "On";
        let valorInterr = document.getElementById('interruptorReservas');
        valorInterr.setAttribute('style', 'justifyContent:flexStart');
    } else {
        document.getElementById("interruptorOnOff").value = "Off";
        let valorInterr = document.getElementById('interruptorReservas');
        valorInterr.setAttribute('style', 'justifyContent:flexEnd');
    }
}

function ocultarOpciones() {
    let ocultarOpciones = document.getElementById('panel-opciones');
    ocultarOpciones.setAttribute('style', 'display:none');
    let ocultarCruz = document.getElementById('cerrarOpciones');
    ocultarCruz.setAttribute('style', 'display: none');
    let mostrarEngranaje = document.getElementById('cerrarEngranaje');
    mostrarEngranaje.setAttribute('style', 'display: block');
}

function pisosTotales() {
    let creaBloques = 1;
    numeroPisos = document.getElementById('pisosTotales').value;

    for (i = 1; i < numeroPisos; i++) {
        creaBloques = document.createElement('div');
        creaBloques.className = "libre";

        document.getElementById("termometro").appendChild(creaBloques);
    }

    // Modifica el texto de cantidad de Pisos vendidos.
    document.getElementById('varPisosTotales').innerHTML = numeroPisos;
    // borrar contenido del input
    document.getElementById("pisosTotales").value = "";

    barraProgreso();
}

// RESET
function borrarBloques() {
    let idTermometro = document.getElementById('termometro');
    let etiquetaDiv = idTermometro.getElementsByTagName('div');
    // calcular numero de divs activos
    let numDivsABorrar = etiquetaDiv.length;
    // borra todos los divs menos 1
    for (i = 1; i < numDivsABorrar; i++) {
        idTermometro.removeChild(idTermometro.lastChild);
    }

    document.getElementById("pisosTotales").value = "";

    // Coloca cursor a cero
    document.querySelector('#valorPorcentaje').style.left = 0 + "%";
    document.querySelector('#valorPorcentaje').innerHTML = 0 + "%";
    // Borra la clase 'vendido' del div q queda
    let borraClase = document.getElementsByClassName('vendido');
    borraClase.classList.remove('vendido');
}


function barraProgreso() {
    let idTermometro = document.getElementById('termometro');
    let etiquetaDiv = idTermometro.getElementsByTagName('div');
    // calcular numero de divs activos
    let numDivsABorrar = etiquetaDiv.length;
    if (numDivsABorrar > 1) {
        let mostrarInfo = document.getElementById('panelControl');
        mostrarInfo.setAttribute('style', 'display: flex');
    }

    let ventas = document.querySelector('#pisosVendidos').value;

    let porcentaje = ventas / numeroPisos;
    // redondeo hacia arriba del porcentaje
    porcentaje = Math.ceil(porcentaje * 100);
    document.querySelector('#valorPorcentaje').innerHTML = porcentaje + "%";
    document.querySelector('#valorPorcentaje').style.left = (porcentaje) + "%";

    // añade clase 'vendido' a bloques
    let bloque = document.getElementsByClassName('libre');
    if (ventas > 0) {
        for (i = 0; i < ventas; i++) {
            bloque[i].classList.add("vendido");
        }
    }



    document.getElementById("pisosVendidos").value = "";
}