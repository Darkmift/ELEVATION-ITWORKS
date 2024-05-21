import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique } from "typeorm";

// Define the IUser interface
export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  age: number;
  username: string;
  password: string;
}

// Define the User entity that extends both BaseEntity and IUser
@Entity({ name: 'users'})
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column('int')
  age: number;

  @Column({unique: true, type: 'varchar'})
  username: string;

  @Column('varchar')
  password: string;
}
