import { React, useEffect } from 'react'
import { Card } from 'react-bootstrap' 
import {Link} from 'react-router-dom'

import Data from '../../data/courses.json'
// import './LandingPage.css'

export default function LandingPage(props) {
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_home_link(true)
    })

    document.title = "Udemy Free Courses | codesahib"
    
    var datesList = Object.keys(Data);

    return (
        <div id="blogsComponent">
            <div id="blogCardsContainer">
            { datesList === undefined? <h2 id="textNoCourses">No Courses Found</h2> : datesList.map((date)=> {
                return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Card.Title>{date}</Card.Title>
                            <Card.Text>
                            100% Free Udemy Courses with certification for {date}
                            </Card.Text>
                            <Link className="blog-button" to={`/blogs/udemy-free-courses/${date}`}>Read</Link>
                        </Card.Body>
                    </Card>
                )
            })}
                
            </div>
        </div>
    )
}
