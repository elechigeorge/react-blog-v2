// initialize express router
import express, {RequestParamHandler} from 'express';
import {protect} from "../middleware/authorization";
const router = express.Router();


// import controller for user registration
import { get_comments, create_comment } from '../controller/comments';


router.route("/:postId").post(protect, create_comment);
router.route("/:postId").get(protect, get_comments);

export default router;