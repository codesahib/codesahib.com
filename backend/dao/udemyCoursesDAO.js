/* All the Data Fetching from DB takes place here */
import model from "./udemyCoursesModel.js"
let coursesModel = model

export default class udemyCoursesDAO{
    
    // Initialize the DB connection by defining Schema and creating Model 
    static async injectDB(conn){
        if(coursesModel){
            console.log("[udemyCoursesDAO][injectDB] Returning model")
            return
        }
    }

    static async getCourses(given_date){
        const date = given_date
        
        const query_args = {}
        if(date){
            console.log(`[udemyCoursesDAO][getCourses] Fetching list for date: ${date}`)
            query_args.date = date
        }
        else{
            console.log("[udemyCoursesDAO][getCourses] No date specified. Fetching all courses")
        }
        
        try{
            const courses_list = await coursesModel.find(query_args)
            return courses_list
        }
        catch(err){
            console.log(`[udemyCoursesDAO][getCourses] Cannot fetch list of courses. Error: ${err}`)
        }
    }

    static async getCourseDetails(given_date,given_index){
        const date = given_date
        const index = parseInt(given_index)
        
        const query_args = {}
        query_args.date = date

        try{
            const course_details = await coursesModel.find(query_args).slice('courses', index, 1)
            return course_details
        }
        catch(err){
            console.log(`[udemyCoursesDAO][getCourseDetails] Cannot fetch course details. Error: ${err}`)
        }
        
    }

    static async addCourses(date,courses) {
        const date_today = date
        const this_courses = courses
        try {
            var courses_for_this_date = {}
            
            courses_for_this_date["date"] = date_today
            courses_for_this_date["courses"] = this_courses

            await coursesModel.create(courses_for_this_date) // .create method declares new Model object and calls .save()
        }
        catch(err){
            console.log(`[udemyCoursesDAO][addCourses] Cannot add new courses. Error: ${err}`)
        }
    }
}



