const menuDicht = document.querySelector('#inclu-menu-dicht');
const menuDichtKnop = document.querySelector('#inclu-menu-dicht-knop');
const menuOpen = document.querySelector('#inclu-menu-open');
const menuOpenKnop = document.querySelector('#inclu-menu-open-knop');
const darkModeKnop = document.querySelector('#dark-mode-switch');
const boldKnop = document.querySelector('#bold-text-switch');
const contrastKnop = document.querySelector('#contrast-switch');
const cssVariables = document.documentElement.style;
const all = document.querySelector('*');

function openCloseMenu(){
    let menuDichtDisplay = window.getComputedStyle(menuDicht).display;
    if (menuDichtDisplay == 'flex') {
        menuDicht.style.display = 'none';
        menuOpen.style.display = 'flex';
    }
    else {
        menuDicht.style.display = 'flex';
        menuOpen.style.display = 'none';
    }
}

function darkMode(){
    if (darkModeKnop.getAttribute('src') == 'img/switch-off.png') {
        darkModeKnop.src = 'img/switch-on.png';
        cssVariables.setProperty('--main-color', '#516659');
        cssVariables.setProperty('--header-color', '#799785');
        cssVariables.setProperty('--background-color', '#000000');
        if (contrastKnop.getAttribute('src') == 'img/switch-off.png') {
            cssVariables.setProperty('--text-color', '#FAF5E2');
        }
    }
    else {
        darkModeKnop.src = 'img/switch-off.png';
        cssVariables.removeProperty('--main-color');
        cssVariables.removeProperty('--header-color');
        cssVariables.removeProperty('--background-color');
        if (contrastKnop.getAttribute('src') == 'img/switch-off.png') {
            cssVariables.removeProperty('--text-color');
        }
    }
}

function boldText(){
    if (boldKnop.getAttribute('src') == 'img/switch-off.png') {
        boldKnop.src = 'img/switch-on.png';
        cssVariables.setProperty('--font-weight', 'bold');
    }
    else {
        boldKnop.src = 'img/switch-off.png';
        cssVariables.removeProperty('--font-weight');
    }
}

function highContrast(){
    if (contrastKnop.getAttribute('src') == 'img/switch-off.png') {
        contrastKnop.src = 'img/switch-on.png';
        cssVariables.setProperty('--text-color', '#ddff00');
    }
    else {
        contrastKnop.src = 'img/switch-off.png';
        if (darkModeKnop.getAttribute('src') == 'img/switch-on.png') {
            cssVariables.setProperty('--text-color', '#FAF5E2');
        }
        else {
            cssVariables.removeProperty('--text-color');
        }
    }
}

menuDichtKnop.addEventListener('click', openCloseMenu);
menuOpenKnop.addEventListener('click', openCloseMenu);
darkModeKnop.addEventListener('click', darkMode);
boldKnop.addEventListener('click', boldText);
contrastKnop.addEventListener('click', highContrast);