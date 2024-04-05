// Exercise 1: Basic Arithmetic Operations
// Create a chain of promises to perform and log the result of three arithmetic operations in sequence. Start with a number, then add 5, multiply by 3, and finally subtract 2.

Promise.resolve(33)
  .then((data) => data + 5)
  .then((data) => data * 3)
  .then((data) => data / 2)
  .then((data) =>
    console.log("The result of arithmetic operations is: ", data)
  );

// Exercise 2: String Manipulation
// Write a promise chain that takes a string, converts it to uppercase, then reverses it, and finally appends the string "-finished" at the end. Log the final result.
// Use `then` for every phase
Promise.resolve("Hello World!")
  .then((data) => data.toUpperCase())
  .then((data) => data.split("").reverse().join(""))
  .then((data) => data + "-finished")
  .then((data) => console.log(data));

// Exercise 3: Array Filtering and Mapping
// Write a function compareToNum that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10 (reject otherwise)
function compareToNum(comp) {
  return new Promise((resolve, reject) => {
    if (comp.isAboveNum >= comp.num)
      resolve(`${comp.isAboveNum} is greater then ${comp.num}`);
    else reject(`${comp.isAboveNum} is less then ${comp.num}`);
  });
}

compareToNum({ num: 10, isAboveNum: 5 }) //will reject
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
compareToNum({ num: 10, isAboveNum: 12 }) //will resolve
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Exercise 4: Delayed Greetings
// Simulate a delayed greeting with promises. First, wait 2 seconds, then log "Hello", wait another second, and log "World!". Each step should be done in a separate .then().
const delayedGreetings = new Promise((resolve) => setTimeout(resolve, 2000))
  .then(() => {
    console.log("Hello ");
    return new Promise((resolve) => setTimeout(resolve, 1000));
  })
  .then(() => console.log("World!"));

// Exercise 5: Error Handling
// Create a promise chain that attempts to parse JSON data. Use a try/catch block within a .then() method to handle JSON parsing errors. If successful, log the parsed object; if an error occurs, log "Invalid JSON".
function parseJSON(str) {
  Promise.resolve(str).then((data) => {
    try {
      const res = JSON.parse(data);
      console.log("Promise: ", res);
    } catch {
      console.log("Promise: Invalid JSON");
    }
  });
}
parseJSON('{"name": "Alice", "age": 30}'); // valid JSON
parseJSON("Hello Wolrd"); // invalid JSON

// Bonus
// Make an async await version
async function parseJSON2(str) {
  try {
    const res = await JSON.parse(str);
    console.log("Async: ", res);
  } catch (error) {
    console.log("Async: Invalid JSON " + error.value);
  }
}
parseJSON2('{"name": "Alice", "age": 30}'); // valid JSON
parseJSON2("Hello Wolrd"); // invalid JSON

// Exercise 6: Promise all
// Create "resolveImmediate" that resolves immediately to a number
// Create "resolveDelayed" that resolves to a number after 2 seconds

const resolveImmediate = function () {
  return Promise.resolve(25);
};

const resolveDelayed = function () {
  return new Promise((resolve) => setTimeout(resolve(17), 2000));
};

function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
    return values[0] + values[1];
  });
}
// `fetchX()` should return a promise that is resolved to 25 immediately
// and `fetchY()` should return a promise that is resolved after 2 seconds to 17
combine(resolveImmediate(), resolveDelayed()).then((sum) => {
  console.log(sum);
});
