import type { CreateUser, User } from '../types/User';
import { encryptStr } from '../utils/encryptStr';
import makeUUID from '../utils/makeUUID';
import parseDate from '../utils/parseDate';
import usersData from '../mocks/jsons/users.json';
// MOCK METHODS


let USERS: User[] = [];



export const initializeUsers = async () => {
  USERS = usersData;
  return USERS;
};

// create a user
export const createUser = async (user: CreateUser): Promise<{ id: string } | { error: string }> => {
  try {
    // check valid email
    if (!user.email.includes('@')) {
      throw new Error('Invalid email');
    }
    // check valid dob
    const validDate = parseDate(user.dob);
    if (!validDate) {
      throw new Error('Invalid dob');
    }
    const newUser = user as User;
    newUser.id = makeUUID();
    newUser.password = encryptStr(newUser.password);
    USERS.push(newUser);
    return { id: newUser.id };
  } catch (error) {
    return { error: (error as Error).message };
  }
};

// update a user
export const updateUser = async (id: string, user: CreateUser): Promise<boolean> => {
  const index = USERS.findIndex((u) => u.id === id);
  if (index === -1) {
    return false;
  }
  USERS[index] = { ...user, id };
  return true;
};

// get a user by email
export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  return USERS.find((user) => user.email === email);
};

// get a user by id
export const getUserById = async (id: string): Promise<User | undefined> => {
  return USERS.find((user) => user.id === id);
};

// get users paginated
export const getUsers = async (page: number, limit: number): Promise<User[]> => {
  return USERS.slice((page - 1) * limit, page * limit);
};

// delete a user by id
export const deleteUserById = async (id: string): Promise<boolean> => {
  const index = USERS.findIndex((user) => user.id === id);
  if (index === -1) {
    return false;
  }
  USERS.splice(index, 1);
  return true;
};
