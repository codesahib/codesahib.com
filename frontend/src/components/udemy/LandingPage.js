import { React, useEffect } from 'react'
import { Card } from 'react-bootstrap' 
import {Link} from 'react-router-dom'

// import './LandingPage.css'

export default function LandingPage(props) {
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_home_link(true)
    })

    document.title = "Udemy Free Courses | codesahib"
    
    return (
        <div id="blogsComponent">
            <div className="section" style={{backgroundColor: "#4d4855"}}>
                <h1 className="content-heading">BLOGS</h1>     
                <div className="section-part-large" style={{backgroundColor: "#FCFCF5"}}>
                <p className="content-para text-dark">There are lot of appreciable things that happen around us and with us that we fail to notice. We need to sit back, relax and reflect upon those wonderful moments and writing down is the best way to do so. This section would contain information based and experience based blogs. No-nonsense!</p>
                </div>
            </div>
            <div id="blogCardsContainer">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Udemy Free Cousre List</Card.Title>
                        <Card.Text>
                        100% Free Courses for 24 July, 2021
                        </Card.Text>
                        <Link className="blog-button" to="/blogs/free-courses/2021-07-24">Read</Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
