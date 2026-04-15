const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    score: Number,
    totalQuestions: Number,
    timeTaken: Number, // in seconds
    language: String
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);