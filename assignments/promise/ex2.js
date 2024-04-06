const myValue = "iLovePromise";

const stringManipulationPromise = new Promise((resolve, reject) => {
  const result =
    myValue.toUpperCase().split("").reverse().join("") + "finished";
  resolve(result);
});
stringManipulationPromise
  .then((res) => console.log(res))
  .catch((error) => console.error("Something wrong", error));
