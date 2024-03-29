import {React, useState, useEffect} from 'react'
import { withRouter,Link } from 'react-router-dom'
import { getEndpoint } from '../utils/Helpers'

import Poster from '../../static/img/udemy_poster.png'

import './CoursesforDate.css'

const endpoint = getEndpoint() 
function CoursesforDate(props) {
    var date = props.match.params.date;
    const [courseList, setCourseList] = useState([])

    useEffect(() => {
        fetch(endpoint + '/api/v1/udemy_courses/'+date,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        }).then((responseJson) => {
            setCourseList(responseJson.result)
        }).catch((error) => {
            alert(error);
        })
    }, []);

    return (
        <>
        <center>
            <img id="udemy-poster" src={Poster}></img>
            <div id="intro">
                <p>Welcome to <Link to="/home">codesahib.com</Link></p>
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