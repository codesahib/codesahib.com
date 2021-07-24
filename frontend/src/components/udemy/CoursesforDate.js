import React from 'react'
import { withRouter,Link } from 'react-router-dom'

import './CoursesforDate.css'

function CoursesforDate(props) {
    var date = props.match.params.date;
    // API call here using 'date'
    var courseList = [
            {"title":"Flutter Music Player App with State Management from Scratch",
            "link":"https://www.udemy.com/course/flutter-music-player-app-with-state-management-from-scratch/?couponCode=FREE-FOR-3-DAYS"},
            {"title":"Python for beginners - Learn all the basics of python",
            "link":"https://www.udemy.com/course/python-for-beginners-learn/?couponCode=5BF87C5DE9558ED5C3C8"}
        ]

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
        <div class="courseContainer">
            { courseList.length === 0? <h2 id="textNoCourses">No Courses Found</h2> : courseList.map((course)=> {
                return(
                    <div class='course'>
                        <div class='detailContainer'>
                            <span class='courseHeading'>{course.title}</span><br />
                            <a class='courseButton' href="{course.link}" target="_blank">Get Course</a>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default withRouter(CoursesforDate)