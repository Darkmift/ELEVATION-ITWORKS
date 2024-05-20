import { Admin, LoggedAdmin } from '../types/Admin';

const admins: Admin[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin',
  },
];

// log admin in return admin w/o password
export const login = async (username: string, password: string): Promise<LoggedAdmin | null> => {
  const admin = admins.find((a) => a.username === username && a.password === password);
  if (!admin) {
    return null;
  }
  // return admin w/o password
  return { id: admin.id, username: admin.username };
};