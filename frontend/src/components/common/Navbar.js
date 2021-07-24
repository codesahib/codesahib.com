import {React, useState} from 'react'
import { Switch, Route, Link, Redirect } from "react-router-dom"

import Home from '../home/Home'
import Blogs from '../blogs/Blogs'
import BlogPage from '../blogs/BlogPage'
import PageNotFound from '../common/PageNotFound'
import UdemyLandingPage from '../udemy/LandingPage'

import './Navbar.css'
import CoursesforDate from '../udemy/CoursesforDate'

{/*

    README

    1. Using '<Link>' instead of '<a>' because it automatically resolves links according to BrowserRouter or HashRouter

*/}

export default function Navbar(props) {
    const [homeLink, setHomeLink] = useState(true);

    return (
        <>
        <nav className="navbar py-0 navbar-expand nav-full">
            {/* <a className="navbar-brand py-0" href="/home"><img src="" alt="Logo"></img></a> 
            <button className="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="container">
                <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto text-md-center text-left">

                        {homeLink && <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>}

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/projects">Tools</Link>
                        </li> */}
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/free-courses">Free Courses</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
        {/* Not using BrowserRouter as this is causing problems with gh-pages deployment */}
        {/* <Router> */}
            <Switch>
                {/* <Route exact path="/" component={Home}/> */}
                <Route exact path="/"><Home show_home_link={setHomeLink} /></Route>
                <Route exact path="/home"><Redirect to="/"/></Route>
                <Route exact path="/blogs"><Blogs show_home_link={setHomeLink} /></Route>
                <Route exact path="/blogs/udemy-free-courses"><UdemyLandingPage show_home_link={setHomeLink} /></Route>
                <Route exact path="/blogs/:blog_name"><BlogPage show_home_link={setHomeLink} /></Route>
                <Route exact path="/blogs/udemy-free-courses/:date"><CoursesforDate show_home_link={setHomeLink} /></Route>
                <Route><PageNotFound show_home_link={setHomeLink} /></Route>
            </Switch>
        {/* </Router> */}
        </>
    )
}
