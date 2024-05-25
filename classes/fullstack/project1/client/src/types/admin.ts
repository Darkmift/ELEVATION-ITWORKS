export enum Role {
  ONE = "1",
  TWO = "2",
  THREE = "3",
}

export type AdminRegister = {
  username:string
  firstName:string
  lastName:string
  role:Role
}

export type Admin = AdminRegister & {password:string}
