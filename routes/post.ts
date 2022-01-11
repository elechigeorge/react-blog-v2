// initialize express router
import express from 'express';
const router = express.Router();

// import controller for user registration
import { create_article, get_articles, get_single_article } from '../controller/post';
import { protect } from '../middleware/authorization';


router.route("/").post(protect, create_article);
router.route("/").get(get_articles);
router.route("/:id").get(get_single_article);


export default router;