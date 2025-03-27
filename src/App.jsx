import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Intro from './components/Intro'
import Events from './components/Events'
import Growth from './components/Growth'
import Festivals from './components/Festivals'
import Future from './components/Future'
import Personal from './components/Personal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
const App = () => {
  return (
    <Router>
      {/* App wrapper with min height 100vh and vertical flex layout */}
      <div className="d-flex flex-column min-vh-100">

        {/* Fixed navbar */}
        <Navbar />

        {/* Main content area with top padding to avoid overlap */}
        <main className="flex-grow-1 mt-5">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/intro" element={<Intro />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/growth" element={<Growth />} />
            <Route exact path="/festivals" element={<Festivals />} />
            <Route exact path="/future" element={<Future />} />
            <Route exact path="/personal" element={<Personal />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
