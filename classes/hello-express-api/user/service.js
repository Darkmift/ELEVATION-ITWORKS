import { v4 as uuidv4 } from 'uuid';

const users = [
  { id: uuidv4(), name: 'Alice' },
  { id: uuidv4(), name: 'Bob' },
  { id: uuidv4(), name: 'Charlie' },
  {
    id: uuidv4(),
    name: 'David',
  },
  {
    id: uuidv4(),
    name: 'Eve',
  },
];

const getAllUSers = () => users;

const getById = (id) => users.find((user) => user.id === id);

const createUser = (user) => {
  if (!user.name) {
    return null;
  }

  const newUser = {
    id: uuidv4(),
    name: user.name,
  };

  users.push(newUser);

  return newUser;
};

const updateUser = (id, user) => {
  const userToUpdate = users.find((u) => u.id === id);

  if (!userToUpdate) {
    return null;
  }
  userToUpdate.name = user.name || userToUpdate.name;

  return userToUpdate;
};

const removeUser = (id) => {
  const userIdx = users.findIndex((u) => u.id === id);
  if (userIdx === -1) {
    console.log('User not found');
    return;
  }

  return users.splice(userIdx, 1)[0];
};

export default { getAllUSers, getById, createUser, updateUser, removeUser };
