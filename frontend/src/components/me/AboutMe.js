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
            <div className="section" style={{backgroundColor: "#4d4855"}}>
                <h1 className="content-heading">PROJECTS</h1>     
                <div className="section-part-large" style={{backgroundColor: "#FCFCF5"}}>
                <p className="content-para text-dark"> I've tried doing projects in many seemingly intereseting fields. The range of areas that I've worked upon are <span className="text-highlight">Web Development, Machine Learning, App Development(very basic), and Scripting.</span> I plan to work more on the <span className="text-highlight">Cloud and Automation</span> tools that will eventually help stand in sync with the changing world</p>
                <p className="content-para text-dark"><a href='/projects'><span className="text-highlight" style={{backgroundColor: "#4d4855", borderRadius: "5px"}}>Click here!</span></a>  for a list of projects that I have done as part of academics or personal projects. I've been part of some useful industry projects whose details are available in my <a href='https://drive.google.com/file/d/1vBBbYYrLXmgqqclmI-YDkj9WbLYcxAN3/view?usp=share_link' target="_blank"><span className="text-highlight" style={{backgroundColor: "#4d4855", borderRadius: "5px"}}>resume</span></a> .</p>
                </div>
            </div>
        </div>
        </>
    )
}
