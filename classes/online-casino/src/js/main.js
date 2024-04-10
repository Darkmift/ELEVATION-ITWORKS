async function makeBet() {
  const yesOrno = lowBankBalance() ? 'no' : 'yes';

  try {
    const response = await fetch('https://yesno.wtf/api?force=' + yesOrno);
    const data = await response.json();
    if (data.answer === 'yes') return data.image;
    return Promise.reject(data.image);
  } catch (error) {
    console.log("🚀 ~ makeBet ~ error:", error)
    // NOTIFY UI of error
  }
}

const betEl = document.querySelector('[data-bet]');
const winsEl = document.querySelector('[data-wins]');
const lossesEl = document.querySelector('[data-losses]');
const moneyEl = document.querySelector('[data-money]');
const bankEl = document.querySelector("[data-bank]");
const imgEl = document.querySelector("[data-image]")

const betAmount = 50;

betEl.addEventListener('click', () => {
  makeBet()
    .then((data) => {
      moneyEl.textContent = parseInt(moneyEl.textContent) + betAmount;
      bankEl.textContent = parseInt(bankEl.textContent) - betAmount;
      winsEl.textContent = parseInt(winsEl.textContent) + 1;
      imgEl.setAttribute("src", data)
    })
    .catch((error) => {
      console.log(error);
      moneyEl.textContent = parseInt(moneyEl.textContent) - betAmount;
      bankEl.textContent = parseInt(bankEl.textContent) + betAmount;
      lossesEl.textContent = parseInt(lossesEl.textContent) + 1;
      imgEl.setAttribute("src", error);
    });
});

const lowBankBalance = () => {
  return parseInt(bankEl.textContent) <= 1500;
};
