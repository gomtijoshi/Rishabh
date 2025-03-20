import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Footer from './Footer.js'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
 
        </Routes>
          <Contact/>
        <Footer /> 
      </BrowserRouter>

    </div>
  )
}

export default App
