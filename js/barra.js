// codigo para automatizar la barra de progreso de venta de pisos.
// por Miq Alarcia - estudi Qiero 2020.

let numeroPisos = '-';
// Asignamos el total general de pisos vendidos como 0
let totalPisosVendidos = 0;
let pisosLibres = 0;

// Definimos datos bajo barra de progreso.
document.getElementById('numPisosVendidos').innerHTML = totalPisosVendidos;
document.getElementById('numPisosLibres').innerHTML = numeroPisos;


// porcentaje mostrado en el dato de bara de progreso
let porcentaje = 0;
document.querySelector('#valorPorcentaje').innerHTML = porcentaje + "%";
document.querySelector('#valorPorcentaje').style.left = (porcentaje) + "%";

// PANEL DE CONTROL DESPLEGABLE
function mostrarPanelControl() {
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

function ocultarPanelControl() {
    let ocultarOpciones = document.getElementById('panel-opciones');
    ocultarOpciones.setAttribute('style', 'display:none');
    let ocultarCruz = document.getElementById('cerrarOpciones');
    ocultarCruz.setAttribute('style', 'display: none');
    let mostrarEngranaje = document.getElementById('cerrarEngranaje');
    mostrarEngranaje.setAttribute('style', 'display: block');
}

function pisosTotales(e) {
    let creaBloques = 1;
    numeroPisos = document.getElementById('pisosTotales').value;
    document.getElementById('numPisosLibres').innerHTML = numeroPisos;
    pisosLibres = parseInt(numeroPisos) - parseInt(totalPisosVendidos)

    for (i = 1; i < numeroPisos; i++) {
        creaBloques = document.createElement('div');
        creaBloques.className = "libre";

        document.getElementById("termometro").appendChild(creaBloques);
    }

    // Modifica el texto de cantidad de Pisos vendidos.
    document.getElementById('varPisosTotales').innerHTML = numeroPisos;
    // borrar contenido del input
    document.getElementById("pisosTotales").value = "";

    // NO FUNCIONA - pulsacion de tacla entenr para confirmar envio de datos.
    // if (e.keyCode === 13 && !e.shiftKey) {
    //     e.preventDefault();
    //     const boton = document.getElementById('pisosTotales').value;
    //     angular.element(boton).triggerHandler('click');
    // }

    barraProgreso();

    // Define valor q corresponda tras funcion barraProgreso() a Pisos Libres.
    document.getElementById('numPisosLibres').innerHTML = pisosLibres;

}

// MOV. Y CALCULOS PISOS VENDIDOS SOBRE BARRA
function barraProgreso() {
    // const numPisosVendidos = document.getElementById('numPisosVendidos');
    // const numPisosReservados = document.getElementById('numPisosReservados');
    // const numPisosLibres = document.getElementById('numPisosLibres');

    let idTermometro = document.getElementById('termometro');
    let etiquetaDiv = idTermometro.getElementsByTagName('div');
    let divs = document.querySelectorAll('#termometro div'); // Nos sirve para el forEach de borrar .vendido

    // ACTIVAMOS VISUALIZCION OPCIONES
    // Cambiamos clase 'display:Flex' en Panel de control
    // calcular numero de divs activos
    let numDivsABorrar = etiquetaDiv.length;
    // Activamos visualización del Panel de Control si hay + de 1 div en la barra de progreso.
    if (numDivsABorrar > 1) {
        let mostrarInfo = document.getElementById('panelControl');
        mostrarInfo.setAttribute('style', 'display: flex');
    }

    // Capturamos el valor introducido en el campo de OPCIONES.
    let ventas = 0
    let bloque = document.getElementsByClassName('libre');
    ventas = document.querySelector('#pisosVendidos').value;
    // Si el total de pisos vendidos = 0
    if (totalPisosVendidos == 0) {
        if ((ventas > numeroPisos) || (ventas > pisosLibres)) {
            document.getElementById('pisosVendidos').innerHTML = "";
            ventas = 0;
        } else {
            ventas = document.querySelector('#pisosVendidos').value;
            // Bucle para añadir la clase .vendido a termometro
            for (i = 0; i < ventas; i++) {
                bloque[i].classList.add("vendido");
            }
        }
        // Al total de pisos se le suma el dato del campo del Panel de Control
        totalPisosVendidos = parseInt(totalPisosVendidos + ventas)
    } else { // Si el total de pisos vendidos es más de 1
        if (ventas > pisosLibres) {
            document.getElementById('pisosVendidos').innerHTML = "";
            ventas = 0;
        } else {
            // Borra la clase 'vendido' de todos los divs existentes.
            divs.forEach(div => {
                div.classList.remove('vendido');
            });

            // Se suma al total de pisos vendidos, el campo del Panel de Control
            totalPisosVendidos = parseInt(totalPisosVendidos) + parseInt(ventas);
            // Bucle de suma de pisos con el total de pisos vendidos. Se añade la clase .vendido
            for (i = 0; i < totalPisosVendidos; i++) {
                bloque[i].classList.add("vendido");
            }

            if (totalPisosVendidos === numeroPisos) {
                mostrarInfo.setAttribute('style', 'display: none');
            }
        }
    }

    // Movimiento y cálculo del porcentaje sobre el termómetro.
    if (numeroPisos == "") {
        porcentaje = 0;
    } else {
        porcentaje = totalPisosVendidos / numeroPisos;
        // redondeo hacia arriba del porcentaje
        porcentaje = Math.ceil(porcentaje * 100);
    }
    document.querySelector('#valorPorcentaje').innerHTML = porcentaje + "%";
    document.querySelector('#valorPorcentaje').style.left = (porcentaje) + "%";

    // Se limpia el campo de entrada del Panel de Control
    document.getElementById("pisosVendidos").value = "";

    // Cálculos de valores para Pisos vendidos y Pisos libres bajo barra de progreso
    document.getElementById('numPisosVendidos').innerHTML = totalPisosVendidos;
    pisosLibres = parseInt(numeroPisos) - parseInt(totalPisosVendidos);
    document.getElementById('numPisosLibres').innerHTML = pisosLibres;
}

// RESET
function borrarBloques() {
    let idTermometro = document.getElementById('termometro');
    let divs = document.querySelectorAll('#termometro div');
    // Borra la clase 'vendido' de los divs.
    divs.forEach(div => {
        div.classList.remove('vendido');
    });
    // Elimina los divs dependientes de #termometro hasta dejar sólo 1.
    for (i = 1; i < divs.length; i++) {
        idTermometro.removeChild(idTermometro.lastChild);
    };


    document.getElementById("pisosTotales").value = "";

    // Coloca cursor a cero
    document.querySelector('#valorPorcentaje').style.left = 0 + "%";
    document.querySelector('#valorPorcentaje').innerHTML = 0 + "%";
    // Establece datos bajo Barra a =.
    numeroPisos = '-';
    document.getElementById('numPisosLibres').innerHTML = numeroPisos;
    totalPisosVendidos = 0;
    document.getElementById('numPisosVendidos').innerHTML = totalPisosVendidos;
    // Borra la clase 'vendido' del div q queda
    // const borraClase = document.querySelectorAll('#termometro .libre');
    // borraClase.classList.remove('vendido');
}