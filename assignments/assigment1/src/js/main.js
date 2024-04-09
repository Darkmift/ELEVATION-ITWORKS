import { contacts } from "../data/contacts.js";

console.log(contacts);

/****** Array Order Methods *************/
// Write a function that takes the array of contacts and returns a new array sorted by last name.
function sortByLastName(array) {
  return array.toSorted((a, b) => a.name.last.localeCompare(b.name.last));
}
const sortedByLastNameArr = sortByLastName(contacts.results);
console.log(sortedByLastNameArr);

// Write a function to return the array of contacts in reverse order. Do not use the built-in reverse() method.
function reverseArray(array) {
  return array.reduce((accum, value) => {
    accum.unshift(value);
    return accum;
  }, []);
}
console.log(reverseArray(sortedByLastNameArr));

// Write a function that returns the first 5 contacts from the sorted list (by last name).
function first5Contacts(array) {
  return array.slice(0, 5);
}
console.log(first5Contacts(sortedByLastNameArr));

// Create a function that returns an array of all unique first names. No duplicates should be present.
function uniqueFirstNames(array) {
  const result = [];
  array.forEach((value) => {
    const firstNameStr = value.name.first;
    if (!result.includes(firstNameStr)) result.push(firstNameStr);
  });
  return result;
}
console.log(uniqueFirstNames(sortedByLastNameArr));

// Write a function that concatenates the first and last name of each contact into a new array of full names.
function concatNames(array) {
  return array.map((value) => `${value.name.first} ${value.name.last}`);
}
console.log(concatNames(sortedByLastNameArr));

// Looping Through Arrays
// Write a loop that iterates through the array and logs each contact's email to the console.
function consoleEmails(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element.email);
  }
}
consoleEmails(sortedByLastNameArr);

// Write a function that takes an ID as a parameter and returns the contact with that ID.
function getContactById(ID, array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.id.value == ID) return element;
  }
  return null;
}
console.log(getContactById("120683-8869", sortedByLastNameArr));

// Create a function that counts how many contacts are from a specific country. The country should be a parameter of the function.
function countByCountry(countryStr, array) {
  return array.reduce(
    (accum, value) =>
      value.location.country == countryStr ? accum + 1 : accum,
    0
  );
}
console.log(
  `In Spain live ${countByCountry("Spain", sortedByLastNameArr)} contacts`
);

// Context
function objectByCountry(array) {
  return array.reduce((accum, contact) => {
    let num = accum[contact.location.country];
    if (accum[contact.location.country]) {
      accum[contact.location.country]++;
    } else {
      accum[contact.location.country] = 1;
    }
    return accum;
  }, {});
}
console.log(objectByCountry(sortedByLastNameArr));

// Write a function that returns a new array of contacts that are within a given age range, e.g., 25 to 35 years old.
function filterByAge(min, max, array) {
  return array.filter((value) => value.dob.age >= min && value.dob.age <= max);
}
console.log(filterByAge(25, 35, sortedByLastNameArr));

/******************** Small App Assignment: Contact Search Tool *************************/

const CLASS_LISTS = {
  INVISIBLE: "invisible",
};

const submitBtn = document.querySelector("button#search");
const searchInp = document.querySelector("input#text");
const resultEl = document.querySelector("#result");
const errorEl = document.querySelector("#error");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const searchStr = searchInp.value;
  if (isValidName(searchStr))
    showResult(getName(searchStr, sortedByLastNameArr));
  else if (isValidPhone(searchStr))
    showResult(getPhone(searchStr, sortedByLastNameArr));
  else showError();
});

function showResult(resultArr) {
  resultEl.classList.remove(CLASS_LISTS.INVISIBLE);
  errorEl.className = CLASS_LISTS.INVISIBLE;
  if (resultArr.length) {
    resultEl.innerHTML = "";
    resultArr.forEach((contact) => {
      resultEl.innerHTML += `<li>${contact}</li>`;
    });
  } else resultEl.textContent = "Nothing found";
}

function showError() {
  resultEl.className = CLASS_LISTS.INVISIBLE;
  errorEl.classList.remove(CLASS_LISTS.INVISIBLE);
}

function isValidName(str) {
  const strTrimmed = str.trim();
  return strTrimmed.length > 0 && isNaN(strTrimmed);
}

function isValidPhone(str) {
  const strTrimmed = str.trim();
  return strTrimmed.length > 0 && !isNaN(strTrimmed);
}

function getName(str, array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.name.first.includes(str) || element.name.last.includes(str)) {
      result.push(
        `${element.name.first} ${element.name.last}, tel:${element.phone}`
      );
    }
  }
  return result;
  // for test - "Jenisha"
}

function getPhone(str, array) {
  const result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.phone.includes(str)) {
      result.push(
        `${element.name.first} ${element.name.last}, tel:${element.phone}`
      );
    }
  }
  return result;
  // for test - "9526586068"
}
