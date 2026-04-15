const express = require("express");
const router = express.Router();

const { getQuestions, submitQuiz } = require("../controllers/quizController");
const protect = require("../middleware/authMiddleware");

router.get("/questions", protect, getQuestions);
router.post("/submit", protect, submitQuiz);

module.exports = router;