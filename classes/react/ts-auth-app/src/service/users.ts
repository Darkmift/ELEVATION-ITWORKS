const fetchUserService = async (username: string, password: string) => {
  if (username === 'bob' && password === '12345') {
    return { name: 'bob' };
  }
  throw new Error('Invalid username or password');
};

export { fetchUserService };
