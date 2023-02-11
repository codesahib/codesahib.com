import React, { useState } from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Banner from './components/home/Banner'

import './App.css';

function App() {

  return (
    <>
      <header>CODESAHIB</header>
      <Navbar/> {/*Content is being loaded from the Navbar*/}
      <Footer/>
    </>
  );
}

export default App;
