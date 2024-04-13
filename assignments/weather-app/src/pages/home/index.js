import './home.css';
import {
  searchInput,
  // , select
} from './search';

export default function renderHome() {
  const homeEl = document.createElement('div');
  homeEl.classList.add('home');
  homeEl.innerHTML = /*html*/ `
    <h3>Welcome to the Weather App</h3>
  `;
  homeEl.append(searchInput());
  // homeEl.append(select([], (unit) => console.log(unit)));
  return homeEl;
}
