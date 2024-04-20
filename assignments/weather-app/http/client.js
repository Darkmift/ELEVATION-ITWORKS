import axiosInstance from '.';

export async function searchCity(searchStr) {
  try {
    const result = await axiosInstance.get(`locations/v1/cities/autocomplete?q=${searchStr}`);
    return result.data[0];
  } catch (error) {
    console.error(`Error while searching for a city using searchStr-> ${searchStr}:`, error);
    return null;
  }
}

export async function getCurrentWeather(cityKey) {
  try {
    const urlStr = `currentconditions/v1/${cityKey}?details=true`;
    const result = await axiosInstance.get(urlStr);
    return result.data[0];
  } catch (error) {
    console.error(`Error while getting Current Weather conditions with cityKey ${cityKey}:`, error);
    return null;
  }
}

export async function get5DayForecast(cityKeyStr, metric = true) {
  try {
    const urlStr = `forecasts/v1/daily/5day/${cityKeyStr}.json?&details=true&metric=${metric}`;
    const result = await axiosInstance.get(urlStr);
    return result.data;
  } catch (error) {
    console.error('Error while getting 5 Day Forecast:', error);
    return null;
  }
}
