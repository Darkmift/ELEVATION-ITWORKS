export default function loadHTML() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.innerHTML = '';
  document.body.appendChild(container);
  return document.body;
}
