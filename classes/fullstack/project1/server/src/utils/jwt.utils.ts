import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { JwtPayload } from 'jsonwebtoken';
dotenv.config({ path: '.env.development.local' });

const secret = process.env.JWT_SECRET;

const generateToken = (id: string, username: string, role: number): string => {
    const payload = {id, username, role};
    const token = jwt.sign(payload, secret!, {expiresIn: '24h'});
    return token;
};

const verifyToken = (token: string): JwtPayload => {
    const decodedToken = jwt.verify(token, secret!) as JwtPayload;
    return decodedToken;
}

export {generateToken, verifyToken};
