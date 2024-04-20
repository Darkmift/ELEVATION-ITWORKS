import './style.css';
import Navbar from './layout/navbar';
import HomePage from './pages/home';
import FavoritesPage from './pages/favorites';
import { get5DayForecast, getCurrentWeather, searchCity } from './http/client';

export const globalState = {
  cityData: null,
  currentWeatherData: null,
  fiveDayForecast: null,
  tempUnit: 'Metric' /** or Imperial */,
};

export const getAppEl = () => document.querySelector('#app');

export const lookupCity = async (city) => {
  try {
    const cityData = await searchCity(city);
    if (!cityData.Key) {
      throw new Error('Key');
    }
    globalState.cityData = cityData;

    const currentWeatherData = await getCurrentWeather(cityData.Key);
    if (!currentWeatherData) {
      throw new Error('CurrentWeather');
    }

    globalState.currentWeatherData = currentWeatherData;

    const fiveDayForecast = await get5DayForecast(cityData.Key);
    if (!fiveDayForecast) {
      throw new Error('FiveDayForecast');
    }
    globalState.fiveDayForecast = fiveDayForecast;
  } catch (error) {
    switch (error.message) {
      case 'Key':
        console.error(`City not found: ${city}`);
        break;
      case 'CurrentWeather':
        console.error(`Current weather not found for city: ${city}`);
        break;
      case 'FiveDayForecast':
        console.error(`5 Day forecast not found for city: ${city}`);
        break;
      default:
        console.error('Error while looking up city:', error);
        break;
    }
  } finally {
  }

  console.log('lookupCity serach str', city);
};

export const handler = (page) => {
  const appEl = getAppEl();
  appEl.innerHTML = '';
  appEl.appendChild(Navbar(handler));

  switch (page) {
    case 'home':
      appEl.appendChild(HomePage(lookupCity));
      break;
    case 'favorites':
      appEl.appendChild(FavoritesPage());
      break;
    default:
      break;
  }
};
