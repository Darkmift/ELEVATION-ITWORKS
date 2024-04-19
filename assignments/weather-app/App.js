import './style.css';
import Navbar from './layout/navbar';
import HomePage from './pages/home';
import FavoritesPage from './pages/favorites';

export const getAppEl = () => document.querySelector('#app');

export const handler = (page) => {
  const appEl = getAppEl();
  appEl.innerHTML = '';
  appEl.appendChild(Navbar(handler));

  switch (page) {
    case 'home':
      appEl.appendChild(HomePage());
      break;
    case 'favorites':
      appEl.appendChild(FavoritesPage());
      break;
    default:
      break;
  }
};
