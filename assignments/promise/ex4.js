const myPromiseFirst = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello");
    resolve();
  }, 2000);
});

const myPromiseSecond = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("World");
      resolve();
    }, 1000);
  });
};

myPromiseFirst
  .then(() => myPromiseSecond())
  .catch((error) => {
    console.error("Something went wrong:", error);
  });
