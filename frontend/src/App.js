import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Banner from './components/home/Banner'

import Home from './components/home/Home'
import Blogs from './components/blogs/Blogs'
import BlogPage from './components/blogs/BlogPage'
import PageNotFound from './components/common/PageNotFound'
import UdemyLandingPage from './components/udemy/LandingPage'
import CoursesforDate from './components/udemy/CoursesforDate'
import CoursePage from './components/udemy/CoursePage'
import Disclaimer from './components/utils/Disclaimer'
import Contact from './components/utils/Contact'
import AboutMe from './components/me/AboutMe'
import Projects from './components/me/Projects'

import './App.css';

function App() {
  const [homeLink, setHomeLink] = useState(true);
  return (
    <>
      <header id="app_header">CODESAHIB</header>
      <Navbar/>
      <Switch> {/*Content is being loaded from here*/}
            {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/"><Home show_home_link={setHomeLink} /></Route>
            <Route exact path="/home"><Redirect to="/"/></Route>
            <Route exact path="/contact"><Contact show_home_link={setHomeLink}/></Route>
            <Route exact path="/about-me"><AboutMe show_home_link={setHomeLink}/></Route>
            <Route exact path="/projects"><Projects show_home_link={setHomeLink}/></Route>
            <Route exact path="/disclaimer"><Disclaimer show_home_link={setHomeLink}/></Route>
            <Route exact path="/blogs"><Blogs show_home_link={setHomeLink} /></Route>
            <Route exact path="/blogs/udemy-free-courses"><UdemyLandingPage show_home_link={setHomeLink} /></Route>
            <Route exact path="/blogs/:blog_name"><BlogPage show_home_link={setHomeLink} /></Route>
            <Route exact path="/blogs/udemy-free-courses/:date"><CoursesforDate show_home_link={setHomeLink} /></Route>
            <Route exact path="/blogs/udemy-free-courses/:date/course:index"><CoursePage show_home_link={setHomeLink} /></Route>
            <Route><PageNotFound show_home_link={setHomeLink} /></Route>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
