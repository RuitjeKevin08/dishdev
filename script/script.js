const hamburgerToggle = document.querySelector('.hamburger');
const mobileNav = document.querySelector('#mobile-navbar');
const mainNav = document.querySelector('.navbar');
const fotosEten = document.querySelector('#images');

function toggleHamburgerMenu() {
  const isMobile = window.matchMedia('(max-width: 450px)').matches;
  if (!isMobile) return;

  const nav = mainNav || mobileNav;
  if (!nav) return;

  const isHidden = window.getComputedStyle(nav).display === 'none';
  nav.style.display = isHidden ? 'flex' : 'none';

  if (fotosEten) fotosEten.style.display = isHidden ? 'none' : 'block';
}

if (hamburgerToggle) {
  hamburgerToggle.addEventListener('click', toggleHamburgerMenu);
}

const navLinks = document.querySelectorAll('.navbar a');
if (navLinks.length) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 450px)').matches && mainNav) {
        mainNav.style.display = 'none';
      }
    });
  });
}
