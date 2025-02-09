// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let amigos = [];
let agregar = "";

// Función Verificar 
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("¡Se necesitan 2 o más amigos para realizar el sorteo!⚠️");
    } else {
        // Generamos el número aleatorio dentro de sortearAmigo
        let sorteo = Math.floor(Math.random() * amigos.length); 
        // Llamamos a la función elResultado y le pasamos el sorteo
        limpiarLista();
        elResultado(sorteo);
        amigos=[];
    }
    return;
}

// Función agregar
function agregarAmigo() {
    limpiarResultado();
    agregar = document.getElementById('amigo').value;
    if (agregar == "") {
        alert("Por favor, escribe un nombre... ¿o es que no tienes amigos? 🤨");
    } else {
        amigos.push(agregar);
        listaAmigo(agregar);
        limpiar();
    }
    return;
}

// Función limpiar
function limpiar() {
    let vacio = document.getElementById('amigo').value = "";
}
//limpiar lista de amigos 
function limpiarLista(){
    let sinLista = document.getElementById("listaAmigos");    
    sinLista.innerHTML="";
}
//Limpiar resultado
function limpiarResultado(){
    let sinResultado = document.getElementById("resultado");    
    sinResultado.innerHTML="";
}

// Función para agregar amigos a la lista en HTML
function listaAmigo(nombre) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML += `<li>${nombre}</li>`;
}

// Función para mostrar el amigo secreto
function elResultado(sorteo) {
    let amigoSorteado = amigos[sorteo];
    let lista = document.getElementById("resultado");
    lista.innerHTML += `<li>Tu amigo secreto es: ${amigoSorteado} 🎉🎉</li>`;
}
