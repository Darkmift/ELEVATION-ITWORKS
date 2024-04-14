import { getExchangeResult, getRates, getSupportedCurrencies } from './http/client';
import './style.css';

const ELEMENT_SELECTORS = { ROOT: '#app', NAVBAR: '[data-navbar]' };
var globalCodesDataCache;

document.addEventListener('DOMContentLoaded', init);

export async function fetchCodes() {
  if (globalCodesDataCache?.supported_codes) {
    return globalCodesDataCache;
  }
  globalCodesDataCache = await getSupportedCurrencies();
  return globalCodesDataCache;
}

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
  <form data-show-rates>
    <label for="from">From:</label>
    <select id="from" data-options-rates name="from"></select>
    <button type="submit">Show rates</button>
  </form>
`;

  renderSelectOptions('[data-options-rates]');

  getElement('[data-show-rates]').addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('🚀 ~ getElement ~ event:', event);
    const data = new FormData(event.target);
    const currency = data.get('from');
    getRates(currency).then((ratesData) => {
      const rates = ratesData.conversion_rates;
      const tableRatesEl = renderRatesTable(rates);
      getElement('[data-show-rates]').insertAdjacentHTML('afterend', tableRatesEl);
    });
  });
}

function renderExchangeCalculator() {
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

  renderSelectOptions('[data-base-currency]');
  renderSelectOptions('[data-target-currency]');

  getElement('[data-exchange-rates-form]').addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const fromCode = data.get('from');
    const toCode = data.get('to');
    const amount = data.get('amount');
    console.log({ from: fromCode, to: toCode, amount });

    getExchangeResult(fromCode, toCode, amount).then((result) => {
      const resultEl = getElement('[data-exchange-result]');
      if (resultEl) {
        resultEl.remove();
      }
      fetchCodes().then((data) => {
        const toName = data.supported_codes.find((code) => code[0] === toCode)[1];
        const fromName = data.supported_codes.find((code) => code[0] === fromCode)[1];
        getElement('[data-exchange-rates-form]').insertAdjacentHTML(
          'afterend',
          /*html*/ `<h3 data-exchange-result>${amount} of ${fromName} into ${toName} is: ${result.conversion_result} with a rate of ${result.conversion_rate}</h3>`
        );
      });
    });
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

function renderSelectOptions(selectSelector) {
  fetchCodes().then((data) => {
    getElement(selectSelector).innerHTML = renderCodeList(data.supported_codes);
  });
}

function renderCodeList(codeList) {
  let codeListHtml = '';
  for (let code of codeList) {
    codeListHtml += `<option value="${code[0]}">${code[1]}</option>`;
  }
  return codeListHtml;
}

export function renderRatesTable(rates) {
  // remove from document if exists
  const ratesTableWrapper = document.querySelector('[data-table-wrapper]');
  if (ratesTableWrapper) {
    ratesTableWrapper.remove();
  }

  let ratesTableHtml = '<div class="table-wrapper" data-table-wrapper><table data-rates-table>';
  ratesTableHtml += '<tr><th>Currency</th><th>Rate</th></tr>';
  for (let rate in rates) {
    ratesTableHtml += `<tr><td>${rate}</td><td>${rates[rate]}</td></tr>`;
  }

  ratesTableHtml += '</table></div>';
  return ratesTableHtml;
}
