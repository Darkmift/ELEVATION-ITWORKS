import { storeToActiveListeneres, removeListenerIfExists } from '../utils/cleanupEventsIfExists';
import './SearchCityInput.css';
export default function SearchCityInput(onChangeHandler) {
  const LISTENER_KEY_1 = 'handleInput';
  removeListenerIfExists(LISTENER_KEY_1);

  // debounce the input
  let timeout;
  const handleInput = (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (e.target.value.length < 3) return;
      onChangeHandler(e.target.value);
    }, 700);
  };

  const inputEl = document.createElement('input');
  inputEl.setAttribute('data-search-city-input', '');
  inputEl.setAttribute('type', 'text');
  inputEl.classList.add('search-city-input');
  inputEl.setAttribute('placeholder', 'Enter city name');
  inputEl.addEventListener('input', handleInput);

  storeToActiveListeneres(LISTENER_KEY_1, () => {
    inputEl.removeEventListener('input', handleInput);
  });

  return inputEl;
}
