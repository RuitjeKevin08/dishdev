const hamburgerHTML=document.querySelector('#');
const nav=document.querySelector('#mobile-navbar');
const fotosEten = document.querySelector('#images')
const hamburgerFoto = document.querySelector('#hamburger-foto');
function hamburgerfunc(){
    let navDisplay = window.getComputedStyle(nav).display;
    console.log('hamburger:');
    if (navDisplay ==='none') {
        console.log('open');
        nav.style.display = 'flex';
        hamburgerFoto.src = 'img/menutje.png';
        fotosEten.style.display = 'none';
    }
    else if (navDisplay ==='flex') {
        console.log('dicht');
        nav.style.display = 'none';
        hamburgerFoto.src = 'img/menutje.png';
        fotosEten.style.display = 'block';
    }
}