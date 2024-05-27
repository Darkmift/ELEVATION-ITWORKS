import { IAdmin, Role } from "@/types"
import { initMongodb } from "../providers"
import { authService } from "./auth.service"
import { AdminModel } from "@/services"
import { hashPassword } from "@/utils/bcrypt"

async function makeMockAdmin(admin: IAdmin) {
  const adminClone = structuredClone(admin)
  adminClone.password = await hashPassword(adminClone.password)
  console.log("🚀 ~ makeMockAdmin ~ password:", adminClone.password)
  return await AdminModel.create(adminClone)
}

describe('authService', () => {
  let admin: IAdmin;
  beforeAll(async () => {
    await initMongodb()
    admin = {
      username: 'bob',
      password: '12345',
      firstName: 'firstName',
      lastName: 'lastName',
      role: Role.ONE
    }
    await makeMockAdmin(admin)
  })
  describe('login', () => {
    it('should return null', async () => {
      const result = await authService.login('username', 'password')
      expect(result).toBeNull()
    })

    it('Happy flow - should return token', async () => {
      const result = await authService.login(admin.username, admin.password)
      expect(result).toBeDefined()
    })
  })
})