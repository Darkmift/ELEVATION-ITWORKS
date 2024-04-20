import './home.css';
import SearchCityInput from '../../components/SearchCityInput';
import CurrentWeather from '../../components/CurrentWeather';

export default function HomePage(lookupCity) {
  const homeEl = document.createElement('div');
  homeEl.classList.add('home-page');
  // Correct the attribute to be a proper data attribute
  homeEl.setAttribute('data-page', 'home');
  homeEl.innerHTML = /*html*/ `<h1>Home</h1>`;
  homeEl.appendChild(SearchCityInput(lookupCity));
  homeEl.appendChild(CurrentWeather());
  return homeEl;
}
