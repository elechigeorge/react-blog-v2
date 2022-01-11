// initialize express router
import express from 'express';
const router = express.Router();

// import controller for user registration
import { register } from '../controller/user'


router.route("/").post(register);

export default router;