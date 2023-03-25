import {React, useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Projects.css'

export default function Projects(props) {
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_home_link(true)
    })

    document.title = "Projects | Gursahib Singh"
    
    return (
        <div id="projectComponent">
            
            <div id="projectsContainer">
                <div className="project">
                    <h2 className="project-title">Optimal Cryptocurrency Portfolio Selection Using Genetic Algorithm</h2>
                    <h6 className="project-subtitle">(Machine Learning Research Project)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>With so many Cryptocurrencies in the market, what to choose?</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To find the optimal crypto portfolio given various assets using Genetic Algorithm techniques such as Natural Selection, Crossover and Mutation.</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/Optimal-crypto-portfolio.git" target="_blank">GitHub</a>
                        <a className="button" href="https://youtu.be/hmrj1J-Pwkk" target="_blank">Demo</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">ShareMyGaddi - Carpool web application</h2>
                    <h6 className="project-subtitle">(Full Stack Web App)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>Web Stack Development is tough? Why not try it :)</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To develop a full-stack carpooling web application using React.js, Node.js, MongoDB and including end-to-end testing using Jest and Cypress.io.</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/karancode-singh/ShareMyGaddi-carpooling" target="_blank">GitHub</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Portfolio Website</h2>
                    <h6 className="project-subtitle">(A Dynamic Resume)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>Paper based or even digital single page Resumes are boring</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To create a dynamic and reactive web-based portfolio</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/mysite" target="_blank">GitHub</a>
                        <Link className="button" to="/home" target="_blank">Link</Link>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Project-ToDo</h2>
                    <h6 className="project-subtitle">(React.js Single Page App)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>There are todo list app available for a single tasks. But this web app will be a todo list to track projects. Each project can then have it's own set of tasks.</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To learn React.js library with a hands-on project</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/Project-ToDo/tree/master/frontend" target="_blank">GitHub</a>
                        <a className="button" href="https://codesahib.github.io/Project-ToDo/" target="_blank">Link</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Mood Mapper</h2>
                    <h6 className="project-subtitle">(Android Application)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>We feel different emotions but don't track them to form opinions</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To track different moods of a user on daily/weekly/monthly/yearly basis. The user will just click on the mood at any time of the day and it will be stored in the database.</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/Mood-Mapper" target="_blank">GitHub</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Udemy Paid Course Grabber</h2>
                    <h6 className="project-subtitle">(Python Web Scrapper)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>Udemy content creaters offers 100% discount coupons on their courses. Why not get them?</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To web scrap free courses listed by multiple sites and have them in one place and also generate html page based on those course for blog post</p>
                    </div>
                    <div className="button-container">
                        <a className="button" href="https://github.com/codesahib/WebScrapper-Udemy-Paid-Courses" target="_blank">GitHub</a>
                        <a className="button" href="https://udemyfreecoursehere.blogspot.com" target="_blank">Link</a>
                    </div>  
                </div>
                <div className="project">
                    <h2 className="project-title">Mapped Directory for Test Case Repository
</h2>
                    <h6 className="project-subtitle">(Organisational Project)</h6>
                    <div className="horizontal-line"></div>
                    <div className="project-detail">
                        <p className="content-para text-dark"><span className="text-highlight">Motivation: </span>The testcases are speard out wildly in a disk space. Why not map each testcase with it's parent and children?</p>
                        <p className="content-para text-dark"><span className="text-highlight">Objective: </span>To develop a ‘phone directory’ type structure for the test case repository to help find which test case belongs to which group.</p>
                    </div>
                    <div className="button-container" style={{ "display": "none" }}>
                        <a className="button" href="https://github.com/codesahib/WebScrapper-Udemy-Paid-Courses" target="_blank">GitHub</a>
                        <a className="button" href="https://github.com/codesahib/WebScrapper-Udemy-Paid-Courses" target="_blank">Link</a>
                    </div>  
                </div>
            </div>
        </div>
    )
}
