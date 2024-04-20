export default function FavoritesPage() {
  const favoritesEl = document.createElement('div');
  favoritesEl.classList.add('favorites');
  favoritesEl.setAttribute('data-page', 'favorites');
  favoritesEl.innerHTML = /*html*/ `<h1>Favorites</h1>`;
  return favoritesEl;
}
