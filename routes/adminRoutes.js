const express = require("express");
const router = express.Router();

const {
    addQuestion,
    getAllQuestions,
    deleteQuestion,
    getAllResults
} = require("../controllers/adminController");

router.post("/question", addQuestion);
router.get("/questions", getAllQuestions);
router.delete("/question/:id", deleteQuestion);
router.get("/results", getAllResults);

module.exports = router;