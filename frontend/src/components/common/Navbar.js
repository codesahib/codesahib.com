import {React, useState} from 'react'
import {Link } from "react-router-dom"

import './Navbar.css'


{/*

    README

    1. Using '<Link>' instead of '<a>' because it automatically resolves links according to BrowserRouter or HashRouter

*/}

export default function Navbar(props) {
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

                        {<li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>}

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/projects">Tools</Link>
                        </li> */}
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs">Blogs</Link>
                        </li>


                        <li className="nav-item">
                            <Link className="nav-link" to="/blogs/udemy-free-courses">Free Courses</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/disclaimer">Disclaimer</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
