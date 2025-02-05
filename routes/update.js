import express from 'express';
import { updateBlogPost } from "../handlers/blogpost.js";
const router = express.Router();

router.post("/updateBlogPost", updateBlogPost);

export default router;
