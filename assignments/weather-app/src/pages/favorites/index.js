export default function renderFavorites() {
  const favoritesEl = document.createElement('div');
  favorites.classList.add('favorites');
  favorites.innerHTML = /*html*/ `
    <h1>Favorites</h1>
    <p>Favorite cities will be displayed here</p>
  `;

  return favoritesEl;
}
