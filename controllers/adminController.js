const Question = require("../models/Question");
const Result = require("../models/Result");

// ADD QUESTION
exports.addQuestion = async (req, res) => {
    try {
        const question = await Question.create(req.body);
        res.json(question);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL QUESTIONS
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE QUESTION
exports.deleteQuestion = async (req, res) => {
    try {
        await Question.findByIdAndDelete(req.params.id);
        res.json({ message: "Deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// VIEW RESULTS
exports.getAllResults = async (req, res) => {
    try {
        const results = await Result.find().populate("user");
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};