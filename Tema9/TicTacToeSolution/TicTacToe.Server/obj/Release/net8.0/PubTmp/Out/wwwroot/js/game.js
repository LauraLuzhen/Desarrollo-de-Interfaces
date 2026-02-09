"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/gameHub").build();
var miFicha = "";

connection.start().catch(err => console.error(err.toString()));

// --- ESCUCHAR AL SERVIDOR ---

connection.on("AsignarFicha", function (ficha) {
    miFicha = ficha;
    document.getElementById("myToken").innerText = ficha;
});

connection.on("EsperandoOponente", function () {
    document.getElementById("statusMessage").innerText = "Esperando oponente...";
});

connection.on("IniciarJuego", function (datos) {
    document.getElementById("statusMessage").innerText = "¡Juego iniciado! Turno de: " + datos.nombreTurno;
});

// Este evento solo se encarga de poner la ficha
connection.on("ActualizarTablero", function (index, ficha) {
    const cell = document.querySelector(`[data-index='${index}']`);
    if (cell) {
        cell.innerText = ficha;
        cell.disabled = true;
    }
});

// Creamos este evento nuevo para manejar solo los nombres de los turnos
connection.on("CambioDeTurno", function (siguienteTurnoId, nombreSiguiente) {
    document.getElementById("statusMessage").innerText = "Turno de: " + nombreSiguiente;
});

connection.on("FinJuego", function (resultado, ganador, ficha) {
    if (resultado === "Tablas") {
        document.getElementById("statusMessage").innerText = "¡Empate! (Tablas)";
    } else {
        document.getElementById("statusMessage").innerText = "¡Ganador: " + ganador + " (" + ficha + ")!";
    }
    document.getElementById("btnReset").style.display = "block";
});

// --- ACCIONES DEL USUARIO ---

document.getElementById("btnJoin").onclick = function () {
    const name = document.getElementById("userName").value;
    if (name) {
        connection.invoke("UnirseAlJuego", name);
        // Cambiamos de vista
        document.getElementById("loginSection").style.display = "none";
        document.getElementById("gameSection").style.display = "block";
    } else {
        alert("¡Escribe tu nombre!");
    }
};

document.querySelectorAll(".cell").forEach(btn => {
    btn.onclick = function () {
        const index = parseInt(this.getAttribute("data-index"));
        connection.invoke("MarcarCasilla", index).catch(err => console.error(err.toString()));
    };
});

document.getElementById("btnReset").onclick = function () {
    connection.invoke("ReiniciarJuego");
    location.reload(); // Recargamos para limpiar todo
};