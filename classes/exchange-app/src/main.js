import { getRates, getSupportedCurrencies } from './http/client';
import './style.css';

const ELEMENT_SELECTORS = { ROOT: '#app', NAVBAR: '[data-navbar]' };
var globalCodesData;

document.addEventListener('DOMContentLoaded', init);

export async function fetchCodes() {
  if (globalCodesData?.supported_codes) {
    return;
  }
  globalCodesData = await getSupportedCurrencies();
}

export function getElement(selector) {
  return document.querySelector(selector);
}

export function init() {
  renderNavbarElement();
  renderExchangePage();
}

export function renderCodeList(codeList) {
  let codeListHtml = '';
  for (let code of codeList) {
    codeListHtml += `<option value="${code[0]}">${code[1]}</option>`;
  }
  return codeListHtml;
}

export function renderExchangePage() {
  getElement(ELEMENT_SELECTORS.ROOT).innerHTML = /*html*/ `
    <h1>Exchange page</h1>
    <form data-show-rates>
      <label for="from">From:</label>
      <select id="from" name="from"></select>
      <button type="submit">Show rates</button>
    </form>
  `;

  fetchCodes().then(() => {
    getElement('#from').innerHTML = renderCodeList(globalCodesData.supported_codes);
  });

  getElement('[data-show-rates]').addEventListener('submit', async (event) => {
    event.preventDefault();
    const fromCurrency = getElement('#from').value;

    const ratesData = await getRates(fromCurrency);
    console.log('🚀 ~ getElement ~ ratesData:', ratesData);
    if (!ratesData) {
      console.error('Error while fetching rates');
      return;
    }
    const tableRatesEl = renderRatesTable(ratesData.conversion_rates);
    // append after [data-show-rates] form
    getElement('[data-show-rates]').insertAdjacentHTML('afterend', tableRatesEl);
  });
}

export function renderExchangeCalculator() {
  getElement(ELEMENT_SELECTORS.ROOT).innerHTML = /*html*/ `
    <h1>Exchange calculator</h1>
    <form data-exchange-rates-form>
      <label for="from">From:</label>
      <select id="from" data-base-currency name="from"></select>
      <label for="to">To:</label>
      <select id="to" data-target-currency name="to"></select>
      <label for="amount">Amount:</label>
      <input type="number" id="amount" name="amount">
      <button type="submit">Exchange</button>
    </form>
  `;

  getElement('[data-exchange-rates-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const from = getElement('[data-base-currency]').value;
    const to = getElement('[data-target-currency]').value;
    const amount = getElement('#amount').value;
    console.log(from, to, amount);
  });

  fetchCodes().then((data) => {
    getElement('#from').innerHTML = renderCodeList(globalCodesData.supported_codes);
    getElement('#to').innerHTML = renderCodeList(globalCodesData.supported_codes);
  });
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

export function renderRatesTable(rates) {
  // remove from document if exists
  const ratesTable = document.querySelector('[data-rates-table]');
  if (ratesTable) {
    ratesTable.remove();
  }

  let ratesTableHtml = '<div class="table-wrapper"><table data-rates-table>';
  ratesTableHtml += '<tr><th>Currency</th><th>Rate</th></tr>';
  for (let rate in rates) {
    ratesTableHtml += `<tr><td>${rate}</td><td>${rates[rate]}</td></tr>`;
  }

  ratesTableHtml += '</table></div>';
  return ratesTableHtml;
}
