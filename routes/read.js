import express from 'express';
import { fetchBlogPosts } from "../handlers/blogpost.js";
const router = express.Router();

router.get("/readBlogPost", fetchBlogPosts);

export default router;
