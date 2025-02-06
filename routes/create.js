import express from 'express';
const router = express.Router();
import adduser from "../handlers/register.js";

router.post("/register", adduser);

export default router;
