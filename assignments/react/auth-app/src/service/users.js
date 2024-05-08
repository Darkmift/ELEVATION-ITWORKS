const fetchUserService = (username, password) => {
  if (username === 'bob' && password === '12345') {
    return Promise.resolve({ name: 'bob' });
  }
  return Promise.reject('Invalid username or password');
};

export { fetchUserService };
