import express from "express"
import UCoursesCtrl from "./udemy_courses.controller.js"

const router = express.Router()

router.route("/").get(UCoursesCtrl.apiGetUCourses)
router.route("/add-courses").post(UCoursesCtrl.apiAddUCourses)

router.route("/:date").get(UCoursesCtrl.apiGetUCourses)



export default router