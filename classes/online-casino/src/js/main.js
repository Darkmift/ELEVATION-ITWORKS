function makeBet() {
  return fetch('https://yesno.wtf/api')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.answer === 'yes' ? Promise.resolve() : Promise.reject();
    });
}
// function makeBet() {
//   return new Promise((resolve, reject) => {
//     const result = Math.random() > 0.5;
//     console.log("🚀 ~ returnnewPromise ~ result:", result)

//     result ? resolve() : reject();
//   });
// }

// get data-bet
const betEl = document.querySelector('[data-bet]');
// get data-wins
const winsEl = document.querySelector('[data-wins]');
// get data-losess
const lossesEl = document.querySelector('[data-losses]');
// get data-money
const moneyEl = document.querySelector('[data-money]');
// get data-bank
const bankEl = document.querySelector('[data-bank]');

const betAmount = 50;

betEl.addEventListener('click', () => {
  makeBet()
    .then(() => {
      moneyEl.textContent = parseInt(moneyEl.textContent) + betAmount;
      bankEl.textContent = parseInt(bankEl.textContent) - betAmount;
      winsEl.textContent = parseInt(winsEl.textContent) + 1;
    })
    .catch(() => {
      moneyEl.textContent = parseInt(moneyEl.textContent) - betAmount;
      bankEl.textContent = parseInt(bankEl.textContent) + betAmount;
      lossesEl.textContent = parseInt(lossesEl.textContent) + 1;
    });
});
