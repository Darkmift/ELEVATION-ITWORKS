const compareToNum = ({ num, isAboveNum }) => {
  return new Promise((resolve, reject) => {
    if (isAboveNum < num) {
      reject("value is less ");
    }
    resolve("greater than the value");
  });
};
compareToNum({ num: 10, isAboveNum: 5 }) //will reject
  .then((result) => console.log(result))
  .catch((error) => console.log("reject=>", error));

compareToNum({ num: 10, isAboveNum: 12 }) //will resolve
  .then((result) => console.log("resolve=>", result))
  .catch((error) => console.log(error));
