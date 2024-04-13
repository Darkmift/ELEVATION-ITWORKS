import './style.css';
import renderHome from './pages/home';
import renderFavorites from './pages/favorites';

const appElement = document.getElementById('app');

export function render(pageComponent = renderHome) {
  renderNavBar();
  appElement.append(pageComponent());
}

function renderNavBar() {
  const navBar = document.createElement('nav');
  navBar.classList.add('nav-bar');
  // navbar html should have a h3 on left and 2 buttons on right home and favorite
  navBar.innerHTML = /*html*/ `
    <h3>Weather App</h3>
    <div class="nav-btns">
      <button data-nav-home>Home</button>
      <button data-nav-favorites>Favorite</button>
    </div>
  `;

  const homeBtn = navBar.querySelector('[data-nav-home]');
  homeBtn.addEventListener('click', () => {
    appElement.innerHTML = '';
    render(renderHome);
  });
  const favoritesBtn = navBar.querySelector('[data-nav-favorites]');
  favoritesBtn.addEventListener('click', () => {
    appElement.innerHTML = '';
    render(renderFavorites);
  });
  appElement.append(navBar);
}
