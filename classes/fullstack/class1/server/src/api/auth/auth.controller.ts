import Admin from './auth.model';
import bcrypt from 'bcryptjs';
import { generateToken } from '../../utils/jwt.utils';
import dotenv from 'dotenv';
import { Request, Response } from 'express';

dotenv.config({ path: '.env.development.local' });

const secureMode: string = process.env.NODE_ENV || '';

const registration = async (req: Request, res: Response) => {
  try {
    const { username, password, role=1, firstName, lastName } = req.body;
    const candidate = await Admin.findOne({ username });
    if (candidate) {
      return res.status(400).json({ message: 'Such username already used' });
    }
    const salt = await bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const admin = new Admin({
      username,
      password: hash,
      role,
      firstName,
      lastName,
    });
    await admin.save();
    console.log('🚀 ~ registration ~ admin:', admin);
    return res.status(200).json({
      message: `Admin with username ${username} registered successfully`,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Registration not succeeded ' });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) {
      console.error(`Admin with username ${username} not found`);
      return res
        .status(404)
        .json({ message: `Admin with username ${username} not found` });
    } else {
      const hash = admin.password;
      const isEqual: boolean = await bcrypt.compareSync(password, hash);
      if (!isEqual) {
        console.error(`Password is wrong`);
        return res
          .status(400)
          .json({ message: `Bad request. Password is wrong` });
      }
      const token = generateToken(
        admin.id as string,
        admin.username as string,
        admin.role as number,
      );
      return res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: secureMode === 'production',
          sameSite: 'strict',
        })
        .status(200)
        .json({ message: 'Logged in successfully 😀' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Login not succeeded 😞' });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: secureMode === 'production',
      sameSite: 'strict'
    });
    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Logout not succeeded' });
  }
};

const getAdmins = async (req: Request, res: Response) => {
  try {
    const admins = await Admin.find();
    return res.json(admins);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Get all Admins not succeeded ' });
  }
};

export { registration, login, logout, getAdmins };
