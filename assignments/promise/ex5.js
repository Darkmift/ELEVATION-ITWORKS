const jsonFile = '{"name": "John", "age": 30}';

const parsPromise = new Promise((resolve, reject) => {
  const myData = JSON.parse(jsonFile);
  resolve(myData);
});

// parsPromise
//   .then((res) => console.log("parsPromise=>", res))
//   .catch((error) => console.error("Invalid JSON", error));

const Bonus = async (promis) => {
  try {
    const response = await promis;
    console.log("response=>", response);
  } catch (error) {
    console.error(error);
  }
};

Bonus(parsPromise);
