const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Question = require("./models/Question");
const questions = require("./data/questions");

dotenv.config();

async function seedData() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");

        await Question.deleteMany(); // clears old data

        await Question.insertMany(questions);

        console.log("All Questions Inserted Successfully");
        process.exit();

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seedData();