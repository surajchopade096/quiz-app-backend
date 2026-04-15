const Question = require("../models/Question");
const Result = require("../models/Result");

// GET 50 RANDOM QUESTIONS
exports.getQuestions = async (req, res) => {
    try {
        const { language } = req.query;

        const questions = await Question.aggregate([
            { $match: { language } },
            { $sample: { size: 50 } },
            {
                $project: {
                    question: 1,
                    options: 1
                }
            }
        ]);

        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// SUBMIT QUIZ
exports.submitQuiz = async (req, res) => {
    try {
        const { answers, timeTaken, language } = req.body;

        let score = 0;

        for (let ans of answers) {
            const question = await Question.findById(ans.questionId);

            if (question.correctAnswer === ans.selected) {
                score++;
            }
        }

        // Save result
        const result = await Result.create({
            user: req.user,
            score,
            totalQuestions: answers.length,
            timeTaken,
            language
        });

        res.json({
            message: "Quiz submitted",
            score,
            result
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};