import { searchCity } from '../../../http/client';
import './search.css';

export function searchInput() {
  const searchEl = document.createElement('div');
  searchEl.classList.add('search');

  searchEl.innerHTML = /*html*/ `
    <input 
      class="search-input" 
      type="text" 
      placeholder="Search for a city" 
      id="search" 
      name="search" 
      required="required"
    />
    <button data-fetch-cities>Find</button>
  `;

  searchEl.classList.add('search');

  function fetchCities() {
    const searchInput = searchEl.querySelector('.search-input');
    const searchValue = searchInput.value;
    // searchInput.value = '';
    console.log('🚀 ~ fetchCities ~ searchValue:', searchValue);

    searchCity(searchValue)
      .then((data) => {
        console.log('🚀 ~ fetchCities ~ data', data);
        searchEl.insertAdjacentElement(
          'afterend',
          selectCityList(
            data.map((city) => {
              console.log('🚀 ~ data.map ~ city:', city.Key);
              return {
                value: city.Key,
                lable: city.AdministrativeArea.EnglishName,
              };
            }),
            (city) => console.log(city)
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });

    return searchValue;
  }

  const fetchBtnEl = searchEl.querySelector('[data-fetch-cities]');
  fetchBtnEl.removeEventListener('click', fetchCities);
  fetchBtnEl.addEventListener('click', fetchCities);

  return searchEl;
}

// a function that mimics select with divs
export function selectCityList(options, selectHandler) {
  const selectEl = document.createElement('div');
  selectEl.classList.add('select-cit');
  selectEl.innerHTML = /*html*/ `
    <div class="select-selected hover">Select city</div>
    ${options
      .map((option) => /*html*/ `<div class="select-items hover" data-value="${option.value}">${option.lable}</div>`)
      .join('')}
  `;

  const selectedEl = selectEl.querySelector('.select-selected');
  const itemsEl = selectEl.querySelectorAll('.select-items');

  function toggleVisibility() {
    itemsEl.forEach((element) => element.classList.toggle('select-hide'));
  }

  toggleVisibility();
  // cleanup
  selectEl.removeEventListener('click', toggleVisibility);
  selectedEl.addEventListener('click', toggleVisibility);

  function selectOption(e) {
    if (e.target.tagName === 'DIV') {
      selectedEl.textContent = e.target.textContent;
      selectHandler(e.target.getAttribute('data-value'));
    }
    toggleVisibility();
  }

  itemsEl.forEach((item) => {
    item.removeEventListener('click', selectOption);
    item.addEventListener('click', selectOption);
  });

  return selectEl;
}
