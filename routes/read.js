import express from 'express';
import { fetchQuestions } from "../handlers/quiz.js";
const router = express.Router();

// get quiz page 
router.get('/quiz', (req, res) => {
  res.render('quiz');
});

// get quiz data  
router.post("/fecthquizdata", fetchQuestions);


export default router;
