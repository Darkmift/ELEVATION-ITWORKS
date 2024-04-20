import './CurrentWeather.css';
import { globalState } from '../App';
import { removeListenerIfExists, storeToActiveListeneres } from '../utils/cleanupEventsIfExists';

const state = {
  weatherText: 'Scattered Clouds',
  cityTopSectionLeft: {
    Key: 4453,
    isFavorite: false,
  },
  cityTopSectionRight: {
    icon: 'https://openweathermap.org/img/wn/01d.png',
    cityName: 'City Name',
    temp: 72,
    tempUnit: 'F',
  },
  forecasts: [
    { day: 'Mon', temperature: 72, units: 'F' },
    { day: 'Tue', temperature: 70, units: 'F' },
    { day: 'Wed', temperature: 68, units: 'F' },
    { day: 'Thu', temperature: 65, units: 'F' },
    { day: 'Fri', temperature: 63, units: 'F' },
  ],
};

const dayMapper = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};

function toggleFavorite(Key) {
  // TODO complete this feature
  state.cityTopSectionLeft.isFavorite = !state.cityTopSectionLeft.isFavorite;
  const currentWeatherEl = document.querySelector('[data-component="current-weather"]');
  currentWeatherEl.replaceWith(CurrentWeather());
}

function getMappedDay(dateStr) {
  const date = new Date(dateStr);
  return dayMapper[date.getDay()];
}

function mapGlobalStateToLocalState() {
  const { cityData, currentWeatherData, tempUnit, fiveDayForecast } = globalState;
  state.cityTopSectionRight.icon = `https://developer.accuweather.com/sites/default/files/${currentWeatherData.WeatherIcon}-s.png`;
  state.cityTopSectionRight.cityName = cityData.LocalizedName;
  state.cityTopSectionRight.tempUnit = tempUnit;
  state.cityTopSectionRight.temp = currentWeatherData.Temperature[tempUnit].Value;
  state.WeatherText = currentWeatherData.WeatherText;
  state.forecasts = fiveDayForecast.DailyForecasts.map((forecast) => {
    return {
      day: getMappedDay(forecast.Date),
      temperature: forecast.Temperature.Maximum.Value,
      units: forecast.Temperature.Maximum.Unit,
    };
  });
}

export default function CurrentWeather() {
  mapGlobalStateToLocalState();

  const currentWeatherEl = document.createElement('div');
  currentWeatherEl.classList.add('current-weather');
  currentWeatherEl.setAttribute('data-component', 'current-weather');

  const topSection = currentWeatherEl.appendChild(document.createElement('div'));
  topSection.classList.add('top-section');
  topSection.appendChild(TopSectionRight(state.cityTopSectionRight));
  topSection.appendChild(TopSectionLeft({ ...state.cityTopSectionLeft, toggleFavorite }));
  currentWeatherEl.appendChild(topSection);

  const weatherTextEl = currentWeatherEl.appendChild(document.createElement('h1'));
  weatherTextEl.textContent = state.WeatherText;
  currentWeatherEl.appendChild(weatherTextEl);

  currentWeatherEl.appendChild(DayForecastList(state.forecasts));

  return currentWeatherEl;
}

export function TopSectionRight({ icon, cityName, temp, tempUnit }) {
  const topSectionLeftEl = document.createElement('div');
  topSectionLeftEl.classList.add('top-section-left');
  topSectionLeftEl.innerHTML = /*html*/ `
    <img src="${icon}" alt="${cityName}"/>
    <div>
      <h5>${cityName}</h5>
      <h3>${temp} ${tempUnit}</h3>
    </div>
  `;
  return topSectionLeftEl;
}

export function TopSectionLeft({ isFavorite, Key, toggleFavorite }) {
  const LISTENER_KEY_1 = 'handtoggleFavoriteElClickleInput';

  removeListenerIfExists(LISTENER_KEY_1);

  const topSectionRightEl = document.createElement('div');
  topSectionRightEl.classList.add('top-section-right');
  topSectionRightEl.innerHTML = /*html*/ `
      <span data-is-favorite class="is-favorite">❤️</span>
      <button data-toggle-favorite>Add to favorites</button>
  `;

  const isFavoriteEl = topSectionRightEl.querySelector('[data-is-favorite]');
  isFavoriteEl.textContent = isFavorite ? '❤️' : '🤍';

  const toggleFavoriteEl = topSectionRightEl.querySelector('[data-toggle-favorite]');
  toggleFavoriteEl.addEventListener('click', () => toggleFavorite(Key));

  storeToActiveListeneres(LISTENER_KEY_1, () => {
    toggleFavoriteEl.removeEventListener('click', () => toggleFavorite(Key));
  });

  return topSectionRightEl;
}

export function DayForecastList(dayForecastArray) {
  const dayForecastListEl = document.createElement('div');
  dayForecastListEl.classList.add('day-forecast-list');
  dayForecastArray.forEach((dayForecast) => {
    dayForecastListEl.appendChild(DayForeCast(dayForecast));
  });
  return dayForecastListEl;
}

export function DayForeCast({ day, temperature, units }) {
  const dayForecastEl = document.createElement('div');
  dayForecastEl.classList.add('day-forecast');
  dayForecastEl.innerHTML = /*html*/ `
    <h3>${day}</h3>
    <h4>${temperature} ${units}</h4>
  `;
  return dayForecastEl;
}
