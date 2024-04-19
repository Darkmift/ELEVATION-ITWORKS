import './navbar.css';
export default function Navbar(handler) {
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

  const buttons = navbarEl.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const page = button.getAttribute('data-nav-link');
      handler(page);
    });
  });
  return navbarEl;
}
