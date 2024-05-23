export enum Role {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

export interface IAdminRegister {
  username: string
  firstName: string
  lastName: string
  role: Role
}

export interface IAdmin extends IAdminRegister {
  password: string;
}
