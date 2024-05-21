import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import {
  createUser as createUserService,
  updateUser as updateUserService,
  getUserById as getUserByIdService,
  getUsers as getUsersService,
  deleteUserById as deleteUserByIdService,
  initializeUsers,
} from '../service/users';
import type { User, CreateUser } from '../types/User';

interface UserContextType {
  users: User[];
  createUser: (user: CreateUser) => Promise<{ id: string } | { error: string }>;
  updateUser: (id: string, user: CreateUser) => Promise<boolean>;
  getUserById: (id: string) => Promise<User | undefined>;
  getUsers: (page: number, limit: number) => Promise<User[]>;
  deleteUserById: (id: string) => Promise<boolean>;
}

const UserContext = createContext<UserContextType>({
  users: [],
  createUser: async () => ({ error: 'Not implemented' }),
  updateUser: async () => false,
  getUserById: async () => undefined,
  getUsers: async () => [],
  deleteUserById: async () => false,
});

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const seed = async () => setUsers(await initializeUsers());
    seed();
  }, []);

  const createUser = async (user: CreateUser) => {
    const result = await createUserService(user);
    if ('id' in result) {
      setUsers((prevUsers) => [...prevUsers, { ...user, id: result.id }]);
    }
    return result;
  };

  const updateUser = async (id: string, user: CreateUser) => {
    const success = await updateUserService(id, user);
    if (success) {
      setUsers((prevUsers) => prevUsers.map((u) => (u.id === id ? { ...u, ...user } : u)));
    }
    return success;
  };

  const getUserById = (id: string) => {
    return getUserByIdService(id);
  };

  const getUsers = (page: number, limit: number) => {
    return getUsersService(page, limit);
  };

  const deleteUserById = async (id: string) => {
    const success = await deleteUserByIdService(id);
    if (success) {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    }
    return success;
  };

  return (
    <UserContext.Provider value={{ users, createUser, updateUser, getUserById, getUsers, deleteUserById }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
