import { handler } from './App';

describe('main', () => {
  var container;
  // before all tests, load the HTML
  beforeAll(() => {
    container = document.createElement('div');
    container.id = 'app';
    document.body.innerHTML = '';
    document.body.appendChild(container);
    handler('home');
  });

  // test if navbar has been rendered
  test('renders navbar', () => {
    const logoText = 'Weather App';
    const logoTitleEl = container.querySelector('[data-nav-link-home]');
    expect(logoTitleEl).toHaveTextContent(logoText);
  });

  // test if home page has been rendered data-page=home
  test('renders home page', () => {
    const homeEl = container.querySelector('[data-page="home"]');
    expect(homeEl).toBeInTheDocument();
  });

  // click on favorites link and test if favorites page has been rendered
  test('click on favorites link', () => {
    const favoritesLink = container.querySelector('[data-nav-link="favorites"]');
    favoritesLink.click();
    const favoritesEl = container.querySelector('[data-page="favorites"]');
    expect(favoritesEl).toBeInTheDocument();
  });

  // click on home link and test if home page has been rendered
  test('click on home link', () => {
    const homeLink = container.querySelector('[data-nav-link="home"]');
    homeLink.click();
    const homeEl = container.querySelector('[data-page="home"]');
    expect(homeEl).toBeInTheDocument();
  });
});
