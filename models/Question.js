const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [
        {
            type: String,
            required: true
        }
    ],
    correctAnswer: {
        type: Number, // index (0,1,2,3)
        required: true
    },
    language: {
        type: String, // Java, C, Python
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Question", questionSchema);