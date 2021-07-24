import {React, useState} from 'react'
import { withRouter,Link } from 'react-router-dom'
import Data from '../../data/courses.json'

import './CoursesforDate.css'

function CoursesforDate(props) {
    var date = props.match.params.date;
    const [courseList, setCourseList] = useState(Data[date])
    // API call here using 'date'

    return (
        <>
        <center>
            <div id="intro">
                <p>Welcome to <a href="/home">codesahib.com</a></p>
                <p>Here you'll find premium certifaction courses for free. The courses come with a certification which can be added to resume/LinkedIn to get a boost in career.</p>
                <h3>You'll always find updated Udemy course list here. So bookmark <Link to="/blogs/udemy-free-courses">this</Link> page to get latest updates daily</h3>
            </div>
            <h1>Free course list for {date}</h1>
        </center>
        <div className="courseContainer">
            { courseList === undefined? <h2 id="textNoCourses">No Courses Found</h2> : courseList.map((course)=> {
                let index = courseList.indexOf(course) + 1
                return(
                    <div className='course'>
                        <div className='detailContainer'>
                            <span className='courseHeading'>{course.title}</span><br />
                            <Link className='courseButton' target="_blank" to={`/blogs/udemy-free-courses/${date}/course${index}`}>Get Course</Link>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default withRouter(CoursesforDate)