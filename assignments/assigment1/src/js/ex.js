import { contacts } from "../data/contacts.js";
// const sortedArray = (array) => {
//   return array.sort((a, b) => {
//     if (a.name.last < b.name.last) {
//       return -1;
//     } else if (a.name.last > b.name.last) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// };
// console.log(sortedArray(contacts.results));

// const reverseArray = (array) => {
//   return array.reverse();
// };
// console.log(reverseArray(contacts.results));

// const last5Contacts = (array) => {
//   return sortedArray(array).slice(0,5);
// };
// console.log(last5Contacts(contacts.results));

const uniqueFirstName = (array) => {
  return array.reduce((acc, item) => {
    if (!acc.some((i) => i.name.first === item.name.first)) {
      acc.push(item);
    }
    return acc;
  }, []);
};
console.log(uniqueFirstName(contacts.results));

const getFullName2 = (array) => {
  return array.map((contact) => Object.values(contact.name).join(" "));
};
console.log(getFullName2(contacts.results));

const fullName = (array) => {
  return array.map(
    (i) => i.name.title + " " + i.name.first + " " + i.name.last
  );
};
console.log(fullName(contacts.results));

// for (let i = 0; i < contacts.results.length; i++) {
//   console.log(contacts.results[i].email);
// }

const uuidParam = (uuid, array) => {
  return array.filter((i) => i.login.uuid.value === String(uuid));
};
// console.log(idParam(856059254, contacts.results));

const countCountry = (array) => {
  return array.reduce((acc, contact) => {
    if (!acc[contact.location.country]) {
      acc[contact.location.country] = 0;
    }
    acc[contact.location.country]++;
    return acc;
  }, {});
};

console.log(countCountry(contacts.results));

// const ageArray = (array) => {
//   return array.filter((i) => i.dob.age > 25 && i.dob.age < 35);
// };

// console.log(ageArray(contacts.results));

// SECOND PART
