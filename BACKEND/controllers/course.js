const Course = require("../models/course")

const getAllCourses = async (req, res) => {
    const { title, description, duration, level, platform, images, urls, reviews_count, ratings, paid, students_count, type, skills, prerequisites, domain, organization, course_certification_type, summary, instructor, lecture_count, sort, select } = req.query;
    const queryObject = {};

    if (title) {
        queryObject.title = title
    }
    if (description) {
        queryObject.description = description
    }
    if (duration) {
        queryObject.duration = duration
    }
    if (level) {
        queryObject.level = level
    }
    if (platform) {
        queryObject.platform = platform
    }
    if (images) {
        queryObject.images = images
    }
    if (urls) {
        queryObject.urls = urls
    }
    if (reviews_count) {
        queryObject.reviews_count = reviews_count
    }
    if (ratings) {
        queryObject.ratings = ratings
    }
    if (paid) {
        queryObject.paid = paid
    }
    if (students_count) {
        queryObject.students_count = students_count
    }
    if (type) {
        queryObject.type = type
    }
    if (skills) {
        queryObject.skills = skills
    }
    if (prerequisites) {
        queryObject.prerequisites = prerequisites
    }
    if (domain) {
        queryObject.domain = domain
    }
    if (organization) {
        queryObject.organization = organization
    }
    if (course_certification_type) {
        queryObject.course_certification_type = course_certification_type
    }
    if (summary) {
        queryObject.summary = summary
    }
    if (instructor) {
        queryObject.instructor = instructor
    }
    if (lecture_count) {
        queryObject.lecture_count = lecture_count
    }
    let apiData = Course.find(queryObject)

    if (sort) {
        let sortfix = sort.replace(",", " ");
        apiData = apiData.sort(sortfix)
    }
    if (select) {
        let selectfix = select.split(",").join(" ");
        apiData = apiData.select(selectfix)
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 20
    let skip = (page - 1) * limit
    apiData = apiData.skip(skip).limit(limit)

    const Courses = await apiData
    res.status(200).json({ Courses })
}

module.exports = getAllCourses;