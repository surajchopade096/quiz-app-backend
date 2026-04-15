const Result = require("../models/Result");

exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await Result.find()
            .populate("user", "name surname")
            .sort({ score: -1, timeTaken: 1 })
            .limit(10);

        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};