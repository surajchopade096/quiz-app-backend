const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express(); // ✅ FIRST create app

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Quiz API Running...");
});

// Server start
const PORT = process.env.PORT || 5000;

const quizRoutes = require("./routes/quizRoutes");

app.use("/api/quiz", quizRoutes);

const leaderboardRoutes = require("./routes/leaderboardRoutes");

app.use("/api/leaderboard", leaderboardRoutes);

const adminRoutes = require("./routes/adminRoutes");

app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});