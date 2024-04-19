export default function HomePage() {
  const homeEl = document.createElement('div');
  homeEl.classList.add('home');
  // Correct the attribute to be a proper data attribute
  homeEl.setAttribute('data-page', 'home');
  homeEl.innerHTML = /*html*/ `<h1>Home</h1>`;
  return homeEl;
}
