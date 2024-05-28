import { login, checkLoginInput } from './auth.controller';
import { Router } from 'express';

const authRouter: Router = Router();

authRouter.post('/login', checkLoginInput, login);

export default authRouter;