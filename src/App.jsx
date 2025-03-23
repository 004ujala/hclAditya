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
// import './App.css' // For custom styles

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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/events" element={<Events />} />
            <Route path="/growth" element={<Growth />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/future" element={<Future />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  )
}

export default App


























// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import About from './components/About'
// import Intro from './components/Intro'
// import Events from './components/Events'
// import Growth from './components/Growth'
// import Festivals from './components/Festivals'
// import Future from './components/Future'
// import Personal from './components/Personal'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// // import './App.css'

// const App = () => {
//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100 justify-content-between">
//         <Navbar />
//         <main className=""> {/* pt-5 = padding-top to avoid overlap */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/intro" element={<Intro />} />
//             <Route path="/events" element={<Events />} />
//             <Route path="/growth" element={<Growth />} />
//             <Route path="/festivals" element={<Festivals />} />
//             <Route path="/future" element={<Future />} />
//             <Route path="/personal" element={<Personal />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   )
// }

// export default App
