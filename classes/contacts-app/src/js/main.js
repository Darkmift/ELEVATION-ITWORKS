console.log('first');
function main() {
  getContacts()
    .then((contacts) => {
      renderContacts(contacts);
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getContacts() {
  // fetch from ./src/data/contacts.json
  const response = await fetch('./src/data/contacts.json');
  const { results: contacts } = await response.json();
  return contacts;
}

// take in contacts and render to data-contacts-tbody
function renderContacts(contacts) {
  console.log('🚀 ~ renderContacts ~ contacts:', contacts);
  const tbody = document.querySelector('[data-contacts-tbody]');
  tbody.innerHTML = ''; // clear tbody
  // loop through contacts

  // create a tr element
  // create a td element for each key in the contact
  // append td to tr
  // append tr to tbody
  // contacts are from random.user.me
  contacts.forEach((contact) => {
    const tr = document.createElement('tr');
    const name = Object.values(contact.name).join(' ');
    const email = contact.email;
    const phone = contact.phone;
    const avatar = contact.picture.thumbnail;

    // avatar
    const tdAvatar = document.createElement('td');
    const img = document.createElement('img');
    img.src = avatar;
    img.alt = name;
    tdAvatar.appendChild(img);
    tr.appendChild(tdAvatar);
    // name
    const tdName = document.createElement('td');
    tdName.textContent = name;
    tr.appendChild(tdName);
    // phone
    const tdPhone = document.createElement('td');
    tdPhone.textContent = phone;
    tr.appendChild(tdPhone);
    // email
    const tdEmail = document.createElement('td');
    tdEmail.textContent = email;
    tr.appendChild(tdEmail);

    tbody.appendChild(tr);
  });
}

main();
