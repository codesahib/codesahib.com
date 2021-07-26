import React from 'react'
import { withRouter } from 'react-router'

import Data from '../../data/courses.json'

import './CoursePage.css'

function CoursePage(props) {
    var index = props.match.params.index - 1
    var date = props.match.params.date

    var this_course = Data[date][index]

    if(this_course === undefined){
        return(
            <h2 id="textNoCourses">No Course Found</h2>
        )
    }
    else{
        return(
            <center>
                <div className='course'>
                    <h2>{this_course.title}</h2>
                    <a className="courseButton" target="_blank" href={this_course.link}>Enroll</a>
                </div>
            </center>
            
        )
    }
    
}

export default withRouter(CoursePage)
