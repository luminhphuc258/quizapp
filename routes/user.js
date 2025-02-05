import express from 'express';
import { handleLogin } from "../handlers/login.js";
import { checkUserRoleBeforeLogin } from '../middlewares/checkUserRoleBeforeLogin.js';
const router = express.Router();

//One to render the form where users can input their details
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/login', checkUserRoleBeforeLogin, handleLogin);

export default router;
