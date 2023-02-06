'use strict';

// Declaracion de variables
var body = document.getElementsByTagName('body')[0];
var numNavItem = 4;
var arrDatosNav = ['Inicio', 'Reservas', 'Reseñas', 'Categorias', 'Recordatorios'];

//Declaracion de funciones
function createHeader(arrDatosNav) {
    let header = document.createElement('header');
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');
    //LOGO DE LA COMPAÑIA
    let logo = document.createElement('div');
    logo.classList.add('logo');
    let imgLogo = document.createElement('img');
    imgLogo.src = '';
    logo.appendChild(imgLogo);
    //PERFIL DEL USUARIO
    let profile = document.createElement('div');
    profile.classList.add('profile');
    //CONTENEDOR IMG PROFILE USUARIO
    let divImgProfile = document.createElement('div');
    divImgProfile.classList.add('imgProfile');
    let imgProfile = document.createElement('img');
    imgProfile.src = '#';
    divImgProfile.appendChild(imgProfile);
    let userInfo = document.createElement('div');
    let username = document.createElement('p');
    let usernameText = document.createTextNode('Nombre usuario');
    let closeSessions = document.createElement('a');
    closeSessions.textContent = 'Cerrar Sesion';
    closeSessions.href = '#';
    username.append(usernameText);
    userInfo.appendChild(username);
    userInfo.appendChild(closeSessions);
    profile.appendChild(divImgProfile);
    profile.appendChild(userInfo);
    for (let index = 0; index < numNavItem; index++) {
        let navItem = document.createElement('li');
        let navItemLink = document.createElement('a');
        navItemLink.setAttribute('href', '#');
        let navItemLinkText = document.createTextNode(arrDatosNav[index]);
        navItemLink.append(navItemLinkText);
        navItem.appendChild(navItemLink);
        ul.appendChild(navItem);
    }
    let searchBar = document.createElement('input');
    searchBar.setAttribute('type', 'search');
    searchBar.setAttribute('placeholder', 'Search')
    nav.appendChild(ul);
    header.appendChild(logo);
    header.appendChild(nav);
    header.appendChild(profile);
    header.appendChild(searchBar);
    body.appendChild(header);
}

function createMain(body) {
    let main = document.createElement('main');
    let navMain = document.createElement('div');
    navMain.setAttribute('class', 'navMain');
    let showServices = document.createElement('div');
    showServices.setAttribute('class', 'showServices');
    let buscador = document.createElement('h3');
    buscador.textContent = 'Buscador';
    let categorias = document.createElement('h4');
    categorias.textContent = 'Categorias';
    let categoriesContainer = document.createElement('div');
    categoriesContainer.setAttribute('class', 'catContainer');

    //Funcion para crear las opciones del filtro de servicios

    navMain.appendChild(buscador);
    navMain.appendChild(categorias);
    navMain.appendChild(categoriesContainer);
    main.appendChild(navMain);
    main.appendChild(showServices);
    body.appendChild(main);

}