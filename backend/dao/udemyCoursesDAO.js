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

    static async getCourses(req){
        const this_date = req
        const query_args = {}
        if(this_date){
            console.log(`[udemyCoursesDAO][getCourses] Fetching list for date: ${this_date}`)
            query_args.date = this_date
        }
        var courses_list = []
        courses_list = await coursesModel.find(query_args,function(err,res){
            if(err) console.log("[udemyCoursesDAO][getCourses] Cannot fetch list of courses")

            else console.log("[udemyCoursesDAO][getCourses] Fetched list of courses")
        })
        return courses_list
    }

    static async getCourseDetails(req,req1){
        const this_date = req
        const this_index = parseInt(req1)
        
        const query_args = {}
        query_args.date = this_date

        var courses_list = []
        courses_list = await coursesModel.find(query_args,function(err,res){
            if(err) console.log("[udemyCoursesDAO][getCourses] Cannot fetch course details")

            else console.log("[udemyCoursesDAO][getCourses] Fetched course details") 
        }).slice('courses', this_index, 1)
        return courses_list
    }

    static async addCourses(req,res) {
        const this_courses=req
        
        try {
            var date_today = "2021-08-03"
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



