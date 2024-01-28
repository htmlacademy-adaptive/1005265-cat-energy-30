const menu = document.querySelector('.menu');
const menuControl = menu.querySelector('.menu__control');


const getMenuToggle = () => {
  menu.classList.toggle('menu--closed');
  menuControl.setAttribute('aria-label', 'Закрыть меню');

  if (!menu.classList.contains('menu--closed')) {
    menuControl.setAttribute('aria-label', 'Открыть меню');
  }
};

const getMobileMenu = () => {
  menu.classList.remove('menu--nojs');

  menuControl.setAttribute('aria-label', 'Открыть меню');
  menuControl.addEventListener('click', getMenuToggle);
};

getMobileMenu();
