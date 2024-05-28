import { Admin, AdminRegister, Role } from '../types/admin';

const admins: Admin[] = [
  {
    username:'admin',
    firstName: 'admin',
    lastName: 'admin',
    password: 'admin',
    role: Role.ONE,
  },
];

// log admin in return admin w/o password
export const login = async (username: string, password: string): Promise<AdminRegister | null> => {
  const admin = admins.find((a) => a.username === username && a.password === password);
  if (!admin) {
    return null;
  }
  // return admin w/o password
  return {
    username: admin.username,
    firstName: admin.firstName,
    lastName: admin.lastName,
    role: admin.role
  };
};