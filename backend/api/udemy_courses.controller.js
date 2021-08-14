import UCoursesDAO from "../dao/udemyCoursesDAO.js"
import fs from "fs"
import path from "path"

var __dirname = path.resolve();

/* All the Data Manipulation takes place here */
export default class ProjectsController {
    static async apiGetUCourses(req, res) {
        const date = req.params.date
        try{
            const coursesList = await UCoursesDAO.getCourses(date)
            if(coursesList.length === 0){
                console.log("[udemy_courses.controller][apiGetUCourses] Status: 400")
                res.status(400).json({"message":"Course list not available", "result":[]})
            }
            else{
                console.log("[udemy_courses.controller][apiGetUCourses] Status: 200")
                res.status(200).json({"message":"Success","result": coursesList})
            }
        }
        catch(err){
            console.log(`[udemy_courses.controller][apiGetUCourses] Error: ${err}`)
        }
    }

    static async apiCourseDetails(req, res) {
        const request_date = req.params.date
        const course_index = req.params.index
        try{
            const coursesList = await UCoursesDAO.getCourseDetails(request_date,course_index)
            res.json(coursesList)
        }
        catch(err){
            console.log(`[udemy_courses.controller][apiCourseDetails] Error: ${err}`)
        }
    }

    static async apiAddUCourses(req, res) {
        const courses_for_date = req.params.date
        // console.log("[udemy_courses.controller][apiAddUCourses] Request: \n" + JSON.stringify(courses_to_be_added,null,2))

        var latestCourseList = JSON.parse(fs.readFileSync(path.resolve(__dirname, "udemy_courses/courses.json"),"utf-8"))

        try{
            await UCoursesDAO.addCourses(courses_for_date,latestCourseList)
            res.json({"Response":"Courses added successfully"})
        }
        catch(err){
            console.log(`[udemy_courses.controller][apiAddUCourses] Error: ${err}`)
        }
    }
}