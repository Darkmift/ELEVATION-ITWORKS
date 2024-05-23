import { hashPassword, verifyPassword } from '../utils/bcrypt'
import type { IAdmin, IAdminRegister } from '../../types/admin'
import { PassThrough } from 'stream'

// Register user
export async function register(admin: IAdminRegister, plainPassword: string) {
  const hashedPassword = await hashPassword(plainPassword)
  const adminWithHashedPassword = { admin, password: hashPassword }

  // Save adminWithHashedPassword to the database
}

// Authenticate user
export async function login(username: string, password: string) {
  const admin: IAdmin | null = null // getAdminWithHashedPasswordFromDB()
  const hashedPassword = admin!.password

  const isMatch = await verifyPassword(password, hashedPassword)
  if (isMatch) {
    // return token and admin:IAdminRegister
  } else {
    // Authentication failed
    // ...
  }
}
