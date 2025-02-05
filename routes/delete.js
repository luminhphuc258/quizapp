import express from 'express';
import { deleteBlogPost } from "../handlers/blogpost.js";
const router = express.Router();

router.post("/deleteBlogPost", deleteBlogPost);

export default router;
