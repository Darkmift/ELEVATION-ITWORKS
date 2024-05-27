import { AdminModel } from "../services";
import { generateToken } from '../utils/jwt.utils';
import { verifyPassword } from '../utils/bcrypt';

export const authService = {
  login: async (username: string, password: string) => {
    const admin = await AdminModel.findOne({ username });

    if (!admin) {
      return null;
    }

    const isPasswordValid = await verifyPassword(password, admin.password);

    if (!isPasswordValid) {
      return null;
    }

    const { username: adminUsername, role, _id } = admin;
    const token = generateToken({ id: _id.toString(), username: adminUsername, role });

    (admin as any).password = undefined;

    return {
      token, admin
    }
  }
}