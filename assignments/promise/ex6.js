const resolveImmediate = () => {
  return new Promise((res, rej) => {
    res(25);
  });
};

const resolveDelayed = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(17);
    }, 2000);
  });
};

function combine(prmX, prmY) {
  return Promise.all([prmX, prmY]).then((values) => {
    return values[0] + values[1];
  });
}

resolveImmediate().then((res) => console.log(res));

resolveDelayed().then((res) => console.log(res));

combine(resolveImmediate(), resolveDelayed()).then((sum) => {
  console.log(sum);
});
