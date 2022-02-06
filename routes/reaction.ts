// initialize express router
import express, {RequestParamHandler} from 'express';
import {protect} from "../middleware/authorization";
const router = express.Router();


// import controller for user registration
import { like_post, get_likes } from '../controller/reactions';


router.route("/like/:postId").post(protect, like_post);
router.route("/like/:postId").get(protect, get_likes);


// router.route("/:postId").get(protect, get_comments);

export default router;