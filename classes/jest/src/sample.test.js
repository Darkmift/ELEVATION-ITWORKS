document.body.innerHTML = `
  <div>
    <span id="username">John Doe</span>
    <button id="change-name">Change Name</button>
  </div>
`;

const button = document.querySelector('#change-name');
const username = document.querySelector('#username');

button.addEventListener('click', () => {
  username.textContent = 'Jane Doe';
});

test('username changes to Jane Doe when button is clicked', () => {
  button.click();
  expect(username.textContent).toBe('Jane Doe');
});
