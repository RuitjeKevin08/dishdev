const popout=document.querySelector('#mobile-popout');
const main = document.querySelector('main');
const hamburgerFoto = document.querySelector('#hamburger-foto');
const bodyDefault = window.getComputedStyle(main).display;
function hamburgerFunc(){
    let navDisplay = window.getComputedStyle(popout).display;
    console.log('hamburger:');
    if (navDisplay ==='none') {
        console.log('open');
        popout.style.display = 'flex';
        hamburgerFoto.src = 'img/kruis.png';
        main.style.display = 'none';
    }
    else if (navDisplay ==='flex') {
        console.log('dicht');
        popout.style.display = 'none';
        hamburgerFoto.src = 'img/menutje.png';
        main.style.display = bodyDefault;
    }
}
hamburgerFoto.addEventListener('click', hamburgerFunc);