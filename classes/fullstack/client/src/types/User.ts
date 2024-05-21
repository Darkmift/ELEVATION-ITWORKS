// a user type with firstname,last name, email and password and dob
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob?: string;
}

export interface CreateUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
}

// a Pick with usernmae and password
export type UserLogin = Pick<User, 'email' | 'password'>;
