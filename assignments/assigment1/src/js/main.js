import { contacts } from "../data/contacts.js";
contacts.results.sort((a, b) => b.name.last.localeCompare(a.name.last));

let firstFive = contacts.results.slice(0, 5);
console.log(firstFive);

let uniqueContacts = [
  ...new Set(contacts.results.map((contact) => contact.name.first)),
];
console.log(uniqueContacts);

let fullNames = contacts.results.map(
  (contact) => `${contact.name.last} ${contact.name.first}`
);
console.log(fullNames);

for (let contact of contacts.results) {
  console.log(contact.email);
}

function findContactById(contacts, id) {
  return contacts.results.find((contact) => contact.id.value === id);
}

function countPeopleFromCountry(contacts, countryName) {
  return contacts.results.filter(
    (contact) => contact.location.country === countryName
  ).length;
}

const countCountry = (array) => {
  return array.reduce((acc, contact) => {
    if (!acc[contact.location.country]) {
      acc[contact.location.country] = 0;
    }
    acc[contact.location.country]++;
    return acc;
  }, {});
};

let ageRange = contacts.results.filter(
  (contact) => contact.dob.age >= 25 && contact.dob.age <= 35
);
console.log(ageRange);

console.log(contacts);

document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.querySelector('input[type="text"]');
  const searchButton = document.querySelector('button[type="submit"]');
  const resultsContainer = document.querySelector(".result-container");
  const resultsUl = document.createElement("ul");
  resultsContainer.appendChild(resultsUl);

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    const value = inputField.value.trim();
    let filteredContacts = [];
    const isNumber = !isNaN(Number(value));

    if (isNumber) {
      // Если значение число, фильтруем контакты по номеру телефона
      filteredContacts = contacts.results.filter((contact) =>
        contact.phone.includes(value)
      );
    }
    // Если значение не число, предполагаем, что это строка, и фильтруем контакты по имени или фамилии
    if (filteredContacts.length === 0) {
      filteredContacts = contacts.results.filter(
        (contact) =>
          contact.name.first.includes(value) ||
          contact.name.last.includes(value)
      );
    }
    // Очищаем предыдущие результаты
    resultsUl.innerHTML = "";

    // Отображаем новые результаты
    filteredContacts.forEach((contact) => {
      const listItem = document.createElement("li");
      listItem.classList.add(
        "card",
        "mb-3",
        "d-flex",
        "flex-row",
        "align-items-center",
        "p-3",
        "shadow"
      );

      // Создаём и добавляем изображение
      const img = document.createElement("img");
      img.src = contact.picture.thumbnail;
      img.classList.add("avatar");

      // Создаём контейнер для тела карточки
      const cardBody = document.createElement("div");

      // Добавляем имя
      const name = document.createElement("h5");
      name.classList.add("card-title", "mb-3");
      name.textContent = `${contact.name.first} ${contact.name.last}`;
      cardBody.appendChild(name);

      // Добавляем текст телефон
      const phone = document.createElement("span");
      phone.textContent = `Phone: `;
      cardBody.appendChild(phone);

      // Создаем ссылку на телефонный номер
      const phoneLink = document.createElement("a");
      phoneLink.href = `tel:${contact.phone}`;
      phoneLink.textContent = contact.phone;
      phoneLink.classList.add("small", "text-decoration-none");
      cardBody.appendChild(phoneLink);

      // Создаем перенос строки
      cardBody.appendChild(document.createElement("br"));

      // Создаем элемент для отображения адреса электронной почты с текстом "Email: "
      const emailText = document.createElement("span");
      emailText.textContent = `Email: `;
      cardBody.appendChild(emailText);

      // Создаем ссылку на адрес электронной почты
      const emailLink = document.createElement("a");
      emailLink.href = `mailto:${contact.email}`;
      emailLink.textContent = contact.email;
      emailLink.classList.add("small", "text-decoration-none"); // Добавляем классы Bootstrap для стилизации ссылки
      cardBody.appendChild(emailLink);

      // Добавляем изображение и тело карточки в элемент списка
      listItem.appendChild(img);
      listItem.appendChild(cardBody);

      // Добавляем элемент списка в UL
      resultsUl.appendChild(listItem);
    });
  });
});
