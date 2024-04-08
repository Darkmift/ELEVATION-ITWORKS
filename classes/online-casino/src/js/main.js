<<<<<<< HEAD
async function makeBet() {
  const yesOrno = lowBankBalance() ? 'no' : 'yes';

  try {
    const response = await fetch('https://yesno.wtf/api?force=' + yesOrno);
    const data = await response.json();
    console.log('first')

    console.log({ isLowBankBalans: lowBankBalance(), data });
    if (data.answer === 'yes') return data.image;
    return Promise.reject(data.image);
  } catch (error) {
    console.log("🚀 ~ makeBet ~ error:", error)
    // NOTIFY UI of error
  }
}

function makeBet2() {
  const yesOrno = lowBankBalance() ? 'no' : 'yes';

  return fetch('https://yesno.wtf/api?force=' + yesOrno)
=======
function makeBet() {
  return fetch("https://yesno.wtf/api")
>>>>>>> 2b18ab4d657f11c2cc44e03e9077a8a3412ad9a9
    .then((response) => {
      return response.json();
    })
    .then((data) => {
<<<<<<< HEAD
      // console.log({ isLowBankBalans: lowBankBalance(), data });

      return data.answer === 'yes' ? Promise.resolve() : Promise.reject();
=======
      return data.answer === "yes" ? Promise.resolve() : Promise.reject();
>>>>>>> 2b18ab4d657f11c2cc44e03e9077a8a3412ad9a9
    });
}

function makeBet1() {
  return new Promise((resolve, reject) => {
    const result = Math.random() > 0.5;
    console.log('🚀 ~ returnnewPromise ~ result:', result);

    result ? resolve() : reject();
  });
}

// get data-bet
const betEl = document.querySelector('[data-bet]');
// get data-wins
const winsEl = document.querySelector('[data-wins]');
// get data-losess
const lossesEl = document.querySelector('[data-losses]');
// get data-money
const moneyEl = document.querySelector('[data-money]');
// get data-bank
const bankEl = document.querySelector("[data-bank]");
// get img el
const imgEl = document.querySelector("[data-image]")

const imgEl = document.querySelector("[data-img]");

const betAmount = 50;

betEl.addEventListener('click', () => {
  makeBet()
    .then((data) => {
<<<<<<< HEAD
      // console.log(data)
      moneyEl.textContent = parseInt(moneyEl.textContent) + betAmount;
      bankEl.textContent = parseInt(bankEl.textContent) - betAmount;
      winsEl.textContent = parseInt(winsEl.textContent) + 1;
      imgEl.setAttribute("src", data)
    })
    .catch((error) => {
      // console.log(error)
      moneyEl.textContent = parseInt(moneyEl.textContent) - betAmount;
      bankEl.textContent = parseInt(bankEl.textContent) + betAmount;
      lossesEl.textContent = parseInt(lossesEl.textContent) + 1;
      imgEl.setAttribute("src", error)
=======
      console.log(data);
      moneyEl.textContent = parseInt(moneyEl.textContent) + betAmount;
      bankEl.textContent = parseInt(bankEl.textContent) - betAmount;
      winsEl.textContent = parseInt(winsEl.textContent) + 1;
      imgEl.setAttribute("src", data);
    })
    .catch((error) => {
      console.log(error);
      moneyEl.textContent = parseInt(moneyEl.textContent) - betAmount;
      bankEl.textContent = parseInt(bankEl.textContent) + betAmount;
      lossesEl.textContent = parseInt(lossesEl.textContent) + 1;
      imgEl.setAttribute("src", error);
>>>>>>> 2b18ab4d657f11c2cc44e03e9077a8a3412ad9a9
    });
});

const lowBankBalance = () => {
  return parseInt(bankEl.textContent) <= 1500;
};
