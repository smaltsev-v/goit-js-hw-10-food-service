import './sass/main.scss';
import menu from './templates/gallery-items.hbs';
import menuItems from './menu.json';

console.log(menuItems);

const placeForMenuItems = document.querySelector('.js-menu');

function createMenuItems(menuItems) {
  return menu(menuItems);
}

placeForMenuItems.insertAdjacentHTML('beforeend', createMenuItems(menuItems));

const buttonOfTheme = document.querySelector('#theme-switch-toggle');
buttonOfTheme.addEventListener('change', switchTheme);

function switchTheme(e) {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  if (document.body.classList.contains(Theme.LIGHT)) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);

    let currentTheme = document.body.className;
    localStorage.setItem('theme', currentTheme);
    return;
  }

  document.body.classList.remove(Theme.DARK);
  document.body.classList.add(Theme.LIGHT);
  let currentTheme = document.body.className;
  localStorage.setItem('theme', currentTheme);
}

document.body.classList.add(localStorage.getItem('theme'));

const themeChecked = () => {
  if (localStorage.getItem('theme') === 'dark-theme') {
    buttonOfTheme.setAttribute('checked', true);
  }
};
themeChecked();
