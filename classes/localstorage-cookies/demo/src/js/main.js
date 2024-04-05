console.log('🍪');

// a function that creates a cookie that takes in a cookie name,value and time
function createCookie(name, value, time) {
  let date = new Date();
  date.setTime(date.getTime() + time);
  let expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

// a fn that makes a session cookie that takes in a cookie name and value
function createSessionCookie(name, value) {
  document.cookie = name + '=' + value + ';path=/';
}

// a fn that makes a httpOnly cookie
function createHttpOnlyCookie(name, value, time) {
  let date = new Date();
  date.setTime(date.getTime() + time);
  let expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/;HttpOnly';
}

// a fn that reads all cookies
function readCookies() {
  let cookies = document.cookie.split(';');
  let cookieObj = {};
  cookies.forEach((cookie) => {
    let [name, value] = cookie.split('=');
    cookieObj[name.trim()] = value;
  });
  return cookieObj;
}

// a fn that stores to localstorage that takes in a key and value
function storeToLocalStorage(key, value = '') {
  localStorage.setItem(key, value);
}

// a fn that reads from localstorage that takes in a key
function readFromLocalStorage(key) {
  return localStorage.getItem(key);
}

// a fn that returns an object of localstorage
function readAllKeysFromLocalStorage() {
  let keys = Object.keys(localStorage);
  let obj = {};
  keys.forEach((key) => {
    obj[key] = localStorage.getItem(key);
  });
  return obj;
}

// a fn that deletes a key from localstorage
function deleteFromLocalStorage(key) {
  localStorage.removeItem(key);
}

// a fn that deletes all keys from localstorage
function deleteAllFromLocalStorage() {
  localStorage.clear();
}

createCookie('name', 'value', 1000);
createSessionCookie('name2', 'value2');
createHttpOnlyCookie('name3', 'value3', 1000);
storeToLocalStorage('key1', 1);
storeToLocalStorage('key2', true);
storeToLocalStorage('key2', null);
storeToLocalStorage('key3', { foo: 'bar' });

console.log(readAllKeysFromLocalStorage());
console.log(readFromLocalStorage('key1'));
deleteFromLocalStorage('key2');
deleteAllFromLocalStorage();

console.log(readAllKeysFromLocalStorage());
