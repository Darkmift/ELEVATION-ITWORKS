// a user type with firstname,last name, email and password and dob
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
};

// a create user type with firstname,last name, email and password and dob
export type CreateUser = Omit<User, 'id'>;

// a Pick with usernmae and password
export type UserLogin = Pick<User, 'email' | 'password'>;
