import { React, useEffect } from 'react'
import Timeline from './Timeline'

// import '../../static/css/style.css'

import './AboutMe.css'

export default function Home(props) {
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_home_link(false)
    })
    
    document.title = "About | Gursahib Singh"
    
    return (
        <>
        <div className="homeComponent">
            <div className="section" style={{backgroundColor: "#4d4855"}}>
                <h1 className="content-heading">ABOUT</h1>     
                <div className="section-part-large" style={{backgroundColor: "#FCFCF5"}}>
                    <p className="content-para text-dark"> I belong to that category of people who love to question things that we come across on daily basis. I just love exercising my body & mind (this has a much deeper meaning). I don't complicate things and stay away from formalities. More importantly, I'm the same version of me everywhere! I come from Ludhiana(India), a city that has been my home from infancy till adolescence. Then I moved to Patiala(India) for my undergraduate degree from Thapar Institute of Engineering and Technology.</p>
                    <p className="content-para text-dark"> After that, I worked as Senior Member Technical Staff at Siemens EDA for more than 2 years. Feeling a need to upgrade my skills, I pursued my Master of Engineering from University of Waterloo. Along with my Masters, I earned a diploma in Business and Entrepreneurship. During my Masters, I did 2 Full Stack Developer internships.</p>
                </div>
            </div>

            <div className="section">
                <h1 className="content-heading">Academic/Work History</h1>
                <Timeline/>
            </div>
        </div>
        </>
    )
}
