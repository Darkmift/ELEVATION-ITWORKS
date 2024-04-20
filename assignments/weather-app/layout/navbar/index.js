import { removeListenerIfExists, storeToActiveListeneres } from '../../utils/cleanupEventsIfExists';
import './navbar.css';
export default function Navbar(handler) {
  const EVENT_LISTENER_KEY_1 = 'handleLogoClick';

  removeListenerIfExists(EVENT_LISTENER_KEY_1);

  const navbarEl = document.createElement('nav');
  navbarEl.classList.add('nav-bar');
  navbarEl.innerHTML = /*html*/ `
    <h3 data-nav-link-home>Weather App</h3>
    <div>
      <button data-nav-link="home">
        Home
      </button>
      <button data-nav-link="favorites">
        Favorites
      </button>
    </div>
  `;
  const logoEl = navbarEl.querySelector('h3');

  logoEl.addEventListener('click', () => {
    handler('home');
  });

  storeToActiveListeneres(EVENT_LISTENER_KEY_1, () => {
    logoEl.removeEventListener('click', () => {
      handler('home');
    });
  });

  const buttons = navbarEl.querySelectorAll('button');
  buttons.forEach((button, i) => {
    const LISTENER_KEY = `handleNavButtonClick${i}`;
    removeListenerIfExists(LISTENER_KEY);

    button.addEventListener('click', () => {
      const page = button.getAttribute('data-nav-link');
      handler(page);
    });

    storeToActiveListeneres(LISTENER_KEY, () => {
      button.removeEventListener('click', () => {
        handler(page);
      });
    });
  });
  return navbarEl;
}
