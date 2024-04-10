import './style.css';

const ELEMENT_SELECTORS = { ROOT: '#app', NAVBAR: '[data-navbar]' };

document.addEventListener('DOMContentLoaded', init);

export function getElement(selector) {
  return document.querySelector(selector);
}

export function init() {
  renderNavbarElement();
  renderExchangePage();
}

export function renderExchangePage() {
  getElement(ELEMENT_SELECTORS.ROOT).innerHTML = /*html*/ `
    <h1>Exchange page</h1>
  `;
}

export function renderExchangeCalculator() {
  getElement(ELEMENT_SELECTORS.ROOT).innerHTML = /*html*/ `
    <h1>Exchange calculator</h1>
  `;
}

export function renderNavbarElement() {
  const navbarElement = getElement(ELEMENT_SELECTORS.NAVBAR);
  navbarElement.innerHTML = /*html*/ `
    <nav>
      <button data-exchange-btn>Exchange</button>
      <button data-exchange-calculator-btn>Exchange calculator</button>
    </nav>
  `;

  navbarElement.querySelector('[data-exchange-btn]').addEventListener('click', () => {
    renderExchangePage();
  });
  navbarElement.querySelector('[data-exchange-calculator-btn]').addEventListener('click', () => {
    renderExchangeCalculator();
  });
}
