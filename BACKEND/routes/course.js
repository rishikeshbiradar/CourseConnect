const express = require("express");
const getAllCourses = require("../controllers/course");
const router = express.Router()

router.route("/").get(getAllCourses)

module.exports = router;