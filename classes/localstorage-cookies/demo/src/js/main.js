console.log('hi');

const inputEl = document.querySelector('[data-input]');
const titleEl = document.querySelector('[data-username]');

const CONFIG = { USERNAME_KEY: 'username' };

init();

function init() {
  // read from ls
  const username = localStorage.getItem(CONFIG.USERNAME_KEY);
  if (!username) return;
  renderName(username);
}

/**
 *
 * @param {string} nameStr
 * renders inside titleeEl
 */
function renderName(nameStr) {
  titleEl.textContent = nameStr;
  localStorage.setItem(CONFIG.USERNAME_KEY, nameStr);
}

inputEl.addEventListener('change', (evt) => renderName(evt.target.value));
