import { mockCitySearch } from '../mocks/mockCitySearch';
import axiosInstance from '.';
import { IS_ENV_DEVELOPMENT } from '../config';

export async function searchCity(cityStr) {
  if (IS_ENV_DEVELOPMENT) {
    return mockCitySearch();
  }

  try {
    const { data } = await axiosInstance.get(`/cities/search`, {
      params: {
        q: cityStr,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
