var globalPageNum = 1;
const backBtn = document.querySelector("[data-back]");
const nextBtn = document.querySelector("[data-next]");

function init() {
  toggleButtons();
  getContacts()
    .then((contacts) => {
      renderContacts(contacts);
    })
    .catch((error) => {
      console.error(error);
    });
}

async function getContacts(page = 1, limit = 10) {
  // fetch from ./src/data/contacts.json
  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=${limit}&seed=abc`
  );
  const { results: contacts, info: pageResponse } = await response.json();
  console.log(pageResponse);
  globalPageNum = pageResponse.page;

  return contacts;
}

// take in contacts and render to data-contacts-tbody
function renderContacts(contacts) {
  console.log("🚀 ~ renderContacts ~ contacts:", contacts);
  const tbody = document.querySelector("[data-contacts-tbody]");
  tbody.innerHTML = ""; // clear tbody
  // loop through contacts

  // create a tr element
  // create a td element for each key in the contact
  // append td to tr
  // append tr to tbody
  // contacts are from random.user.me
  contacts.forEach((contact) => {
    const tr = document.createElement("tr");
    const name = Object.values(contact.name).join(" ");
    const email = contact.email;
    const phone = contact.phone;
    const avatar = contact.picture.thumbnail;

    // avatar
    const tdAvatar = document.createElement("td");
    const img = document.createElement("img");
    img.src = avatar;
    img.alt = name;
    tdAvatar.appendChild(img);
    tr.appendChild(tdAvatar);
    // name
    const tdName = document.createElement("td");
    tdName.textContent = name;
    tr.appendChild(tdName);
    // phone
    const tdPhone = document.createElement("td");
    tdPhone.textContent = phone;
    tr.appendChild(tdPhone);
    // email
    const tdEmail = document.createElement("td");
    tdEmail.textContent = email;
    tr.appendChild(tdEmail);

    tbody.appendChild(tr);
  });
}

init();

async function triggerReRender() {
  try {
    const contacts = await getContacts(globalPageNum, 10);
    renderContacts(contacts);
  } catch (error) {
    console.log("🚀 ~ triggerReRender ~ error:", error);
    // globalPageNum = rollback;
  } finally {
    toggleButtons();
  }
}

backBtn.addEventListener("click", () => {
  backBtn.setAttribute("disaled");
  globalPageNum--;
  console.log("🚀 ~ globalPageNum:", globalPageNum);
  triggerReRender(globalPageNum + 1);
});

nextBtn.addEventListener("click", () => {
  globalPageNum++;
  console.log("🚀 ~ globalPageNum:", globalPageNum);
  triggerReRender(globalPageNum - 1);
});

function toggleButtons() {
  globalPageNum <= 1
    ? backBtn.setAttribute("disabled", true)
    : backBtn.removeAttribute("disabled");
  globalPageNum >= 100
    ? nextBtn.setAttribute("disabled", true)
    : nextBtn.removeAttribute("disabled");
}
