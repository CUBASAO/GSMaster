'use strict';

// Declaracion de variables
var body = document.getElementsByTagName('body')[0];
var numNavItem=4;
var arrDatosNav = ['Inicio','Reservas','Reseñas','Categorias','Recordatorios'];

//Declaracion de funciones
function createHeader(arrDatosNav) {
    let header = document.createElement('header');
    let nav =document.createElement('nav');
    let ul = document.createElement('ul');
    for (let index = 0; index < numNavItem; index++) {
        let navItem = document.createElement('li'); 
        let navItemLink = document.createElement('a');
        navItemLink.setAttribute('href','#');
        let navItemLinkText = document.createTextNode(arrDatosNav[index]);
        navItemLink.append(navItemLinkText);
        navItem.appendChild(navItemLink);
        ul.appendChild(navItem);    
    }
    nav.appendChild(ul);
    header.appendChild(nav);
    body.appendChild(header);

}