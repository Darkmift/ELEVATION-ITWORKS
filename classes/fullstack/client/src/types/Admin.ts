// type Admin with username,password

// type admin try to login
export type Admin = {
  username: string;
  password: string;
  id: string;
};

export type AdminLogin = Omit<Admin, 'id'>;
export type LoggedAdmin = Omit<Admin, 'password'>;
