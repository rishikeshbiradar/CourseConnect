const ConnectToDatabase = require("./db/connect")
const Course = require("./models/course")
const CourseJson = require("./courses.json")
require("dotenv").config();

const start = async () => {
    try {
        await ConnectToDatabase(process.env.MONGODB_URL);
        await Course.deleteMany();
        await Course.create(CourseJson);
    } catch (error) {
        console.log(error)
    }
}

start();
