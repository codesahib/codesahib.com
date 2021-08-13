import { React, useEffect } from 'react'

import '../../static/css/style.css'

import './Home.css'

export default function Home(props) {
    // To resolve cannot update a component while rendering a different component warning
    useEffect(()=>{
        props.show_home_link(false)
    })
    
    document.title = "Home | codesahib"
    
    return (
        <>
        <div className="homeComponent">
            <div className="section" style={{backgroundColor: "#4d4855"}}>
                <h1 className="content-heading">ABOUT</h1>     
                <div className="section-part-large" style={{backgroundColor: "#FCFCF5"}}>
                    <p className="content-para text-dark"> In this age, internet is the king and we all can learn so much from the people around the world with a just click of button. I have learnt so much from the internet and the tech community. This website started as a project to learn Web Development but is now headed to provide quality content to the self learners. 'codesahib' aims to give it back to community.</p>
                    <p className="content-para text-dark">Here you'll find tech blogs that will focus on specific fixes, tips and tricks related to the technologies that I've worked with. In addition to that, there will be a daily post for 100% free Udemy courses! The courses that also come with a certification.</p>
                </div>
            </div>

            <div className="section">
                <h1 className="content-heading">Blogs</h1>
                <div className="section-part-large">
                    <p className="content-para text-dark"> I'm not a professional blog writer but I do like to express my experiences. Head over the blogs section to read about my exeriences of life.</p>
                </div>
            </div>
        </div>
        </>
    )
}
