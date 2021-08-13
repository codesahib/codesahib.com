import {React, useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

import Data from '../../data/courses.json'

import './CoursePage.css'

function CoursePage(props) {
    var index = props.match.params.index - 1
    var date = props.match.params.date

    var this_course = Data[date][index]
    // API call here using 'date' and course 'index'
    // const [this_course, setCourse] = useState({});

    // const url="/api/v1/udemy_courses/"+date+"/course"+index

    // const getCourse = () =>{
    //     axios.get(`${url}`)
    //     .then(response=>{
    //         setCourse(response.data[0].courses[0])
    //     })
    //     .catch(e=>console.log("Error fetching course details"))
    // }
    
    // useEffect(() => {
    //     getCourse();
    // }, []);

    if(this_course === undefined){
        return(
            <h2 id="textNoCourses">No Course Found</h2>
        )
    }
    else{
        return(
            <center>
                <div className='course'>
                    <h2 className="courseHeading">{this_course.title}</h2>
                    <p className="courseHeadline">{this_course.headline}</p>
                    <h3 className="courseCreator">Creator: {this_course.creator}</h3>
                    <h3 className="courseRating">Rating: {this_course.rating}</h3>
                    <a className="courseButton" target="_blank" href={this_course.link}>Enroll</a>
                </div>
            </center>
            
        )
    }
    
}

export default withRouter(CoursePage)
