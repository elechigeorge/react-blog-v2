// initialize express router
import express from 'express';
const router = express.Router();

// import controller for user registration
import { login } from '../controller/user';


router.route("/").post(login);


export default router;