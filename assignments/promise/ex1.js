const myValue = 129;

const addPromise = new Promise((resolve, reject) => {
  const result = myValue + 5;
  resolve(result);
});

const multyPromise = (myValue) => {
  return new Promise((resolve, reject) => {
    const result = myValue * 3;
    resolve(result);
  });
};

const subtractPromise = (myValue) => {
  return new Promise((resolve, reject) => {
    const result = myValue - 2;
    resolve(result);
  });
};

addPromise
  .then((res) => {
    console.log("addPromise=>", res);
    return multyPromise(res);
  })
  .then((res) => {
    console.log("multyPromise(res)=>", res);
    return subtractPromise(res);
  })
  .then((res) => console.log("subtractPromise(res)=>", res))
  .catch((error) => {
    console.error("Somthing wrong", error);
  });
