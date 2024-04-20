import { mockCityCurrentConditions, mockCityData } from './mockApiData';

export function lookupCityByName(cityName) {
  if (!mockCityData[0].LocalizedName.includes(cityName)) return null;
  return Promise.resolve(structuredClone(mockCityData[0]));
}

export function lookupCityByCoordiantes({ lat, lon }) {}

export function lookupCurrentWeatherByCityKey(cityKey) {
  if (mockCityCurrentConditions[0].MobileLink.includes(cityKey))
    return Promise.resolve({
      Code: '400',
      Message: `Invalid location key: ${cityKey}`,
      Reference: `/currentconditions/v1/${cityKey}`,
    });
  return Promise.resolve(structuredClone(mockCityCurrentConditions[0]));
}

export function lookupWeeklyForecastByCityKey(cityKey) {}
