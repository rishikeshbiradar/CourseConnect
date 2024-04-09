const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
    ID: {
        type: Number,
        default:"Web Development"
    },
    title: {
        type: String,
        default:"Web Development"
    },
    description: {
        type: String,
        default:"Web Development"
    },
    duration : {
        type: String,
        default:"Udemy"
    },
    level: {
        type: String,
        default:"Web Development"
    },
    platform: {
        type: String,
        default:4.2
    },
    images: {
        type: String,
        default:"Not Known"
    },
    urls: {
        type: String,
        default:0
    },
    reviews_count: {
        type: String,
        default:0
    },
    ratings: {
        type: String,
        default:"No"
    },
    paid: {
        type: String,
        default:"Hindi"
    },
    students_count: {
        type: String,
        default:"No"
    },
    type: {
        type: String,
        default:"Unknown"
    },
    skills: {
        type: String,
        default:"No Link"
    },
    Prerequisites: {
        type: String,
        default:"Image Not Found"
    },
    domain: {
        type: String,
        default:"Image Not Found"
    },
    organization: {
        type: String,
        default:"Image Not Found"
    },
    course_certification_type: {
        type: String,
        default:"Image Not Found"
    },
    summary: {
        type: String,
        default:"Image Not Found"
    },
    instructor: {
        type: String,
        default:"Image Not Found"
    },
    lectures_count: {
        type: String,
        default:"Image Not Found"
    },
});

module.exports=mongoose.model('Course',courseSchema)