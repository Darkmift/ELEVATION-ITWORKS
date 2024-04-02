function getInfo() {
  return fetch('https://yesno.wtf/api')
    .then((response) => {
      console.log('🚀 ~ .then ~ response:', response);

      // const output = response.json();
      // console.log('🚀 ~ .then ~ response pending:', output);

      // return output;
      throw new Error('OOPSIES went bad');
    })
    .then((data) => console.log('1'))
    .catch((error) => console.error('ERROR OOPSIES', error))
    .then((data) => console.log('2'))
    .then((data) => console.log('3'))
    .catch((error) => console.error('ERROR OOPSIES#2', error))
    .then((data) => console.log('data?', data))
    .catch((error) => console.error('ERROR OOPSIES #3', error));
}

// getInfo();

function pChain() {
  const p = new Promise((resolve, reject) => {
    reject('2');
    resolve('1');
  });
  // .then((data) => {
  //   console.log('🚀 ~ pChain ~ data:', data);
  //   return '2';
  // })
  // .then((data) => {
  //   console.log('🚀 ~ pChain ~ data:', data);
  //   return '3';
  // });

  return p;
}

// pChain()
//   .then((data) => console.log('🚀 ~ pChain ~ data:', data))
//   .catch((error) => console.error('🚀 ~ pChain ~ OOPS:', error));

function resolveAsPromise(val) {
  return Promise.reject(val);
}

resolveAsPromise(6444)
  .then((data) => console.log('🚀 ~ resolveAsPromise ~ data:', data))
  .catch((error) => console.error('🚀 ~ resolveAsPromise ~ OOPS:', error));
