import express from 'express';
import { storeBlogPost } from "../handlers/blogpost.js";
const router = express.Router();

router.post("/storeBlogPost", storeBlogPost);

export default router;
