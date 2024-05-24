import express from "express";
import { registration, login, logout, getAdmins } from "./auth.controller";
import checkAuth from "../../middleware/checkAuth";
import checkRole from '../../middleware/checkRole'

const authRouter = express.Router();

authRouter
    .post('/registration', registration)
    .post('/login', login)
    .post('logout', checkAuth, logout)
    .get('/admins', checkAuth, checkRole(1), getAdmins)

export default authRouter;
