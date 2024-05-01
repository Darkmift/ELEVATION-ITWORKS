import './style.css';

const hello = 'Hello, TypeScript!';

console.log(hello);

function carFactory(make: string, model: string) {
  return {
    make,
    model,
  };
}

const myCar = carFactory('Toyota', '55');

document.body.innerHTML = JSON.stringify(myCar);
