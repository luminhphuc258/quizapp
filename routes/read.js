import express from 'express';
import { fetchQuestions } from "../handlers/quiz.js";
import { quizAttempts } from "../handlers/userscore.js";
const router = express.Router();

// get quiz page 
router.get('/quiz', (req, res) => {
  if (req.session.isLoggined) {
    res.render('quiz', { username: req.session.username, isLoggined: true, userRole: req.session.role });
  } else {
    res.render('login', { username: '', isLoggined: false, userRole: '' });
  }
});

// get quiz data  
router.post("/fecthquizdata", fetchQuestions);

// get user attemp
router.get('/quizAttempts', (req, res) => {
  if (req.session.isLoggined) {
    quizAttempts(req, res);
  } else {
    res.render('login', { username: '', isLoggined: false, userRole: '' });
  }
});
export default router;
