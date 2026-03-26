const tabletPopout = document.querySelector('#tablet-popout');
const tabletHamburgerFoto = document.querySelector('#hamburger-foto-tablet');
function hamburgerFunc(){
    let navDisplay = window.getComputedStyle(tabletPopout).display;
    console.log('hamburger:');
    if (navDisplay ==='none') {
        console.log('open');
        tabletPopout.style.display = 'flex';
        tabletHamburgerFoto.src = 'img/kruis.png';
    }
    else if (navDisplay ==='flex') {
        console.log('dicht');
        tabletPopout.style.display = 'none';
        tabletHamburgerFoto.src = 'img/menutje.png';
    }
}
tabletHamburgerFoto.addEventListener('click', hamburgerFunc);
console.log('kosooifosm');