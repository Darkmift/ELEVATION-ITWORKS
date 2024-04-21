import './style.css';
import { handler, lookupCity } from './App';
import { DEFAULT_CITY_NAME } from './config';

lookupCity(DEFAULT_CITY_NAME).then(() => handler('home'));
