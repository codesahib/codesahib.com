import { React, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import { getEndpoint } from '../utils/Helpers'
// import Data from '../../data/courses.json'
import Poster from '../../static/img/udemy_poster.png'

import './LandingPage.css'
const endpoint = getEndpoint() 

export default function LandingPage(props) {
    const [Data, changeData] = useState({})
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_home_link(true)

        fetch(endpoint + '/api/v1/udemy_courses',{
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
            changeData(responseJson.result)
        }).catch((error) => {
            alert(error);
        })
    },[])


    
    document.title = "Udemy Free Courses | codesahib"
    var datesList = Object.keys(Data);

    return (
        <div id="blogsComponent">
            <div id="blogCardsContainer">
            { datesList === undefined? <h2 id="textNoCourses">No Courses Found</h2> : datesList.map((date)=> {
                return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Poster} />
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
