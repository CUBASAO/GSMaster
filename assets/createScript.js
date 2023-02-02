'use strict';

// Declaracion de variables
var body = document.getElementsByTagName('body')[0];
//Declaracion de funciones
function createHeader() {
    let header = document.createElement('header');
    let title = document.createElement('h1');
    let txtTitle = document.createTextNode('Hola');
    title.append(txtTitle);
    header.appendChild(title);
    body.appendChild(header);
    
}