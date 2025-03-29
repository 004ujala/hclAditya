import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import '../css/Navbar.css';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') !== 'false';
    });

    useEffect(() => {
        localStorage.setItem('darkMode', isDarkMode);
        if (isDarkMode) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
            document.querySelectorAll(".cards").forEach(card => {
                card.style.color = "white";
            });
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            document.querySelectorAll(".cards").forEach(card => {
                card.style.color = "black";
            });
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand">HCLTech</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="d-flex flex-sm-column flex-lg-row align-items-start navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/intro">Intro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/growth">Growth</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/events">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/festivals">Festivals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/future">Future</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/personal">Personal</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex flex-row justify-content-start">
                        <button
                            className={`btn btn-outline-light ${isDarkMode ? '' : 'd-none'}`}
                            onClick={toggleTheme}
                        >
                            <FontAwesomeIcon icon={faSun} size="lg" />
                        </button>
                        <button
                            className={`btn btn-outline-light ${isDarkMode ? 'd-none' : ''}`}
                            onClick={toggleTheme}
                        >
                            <FontAwesomeIcon icon={faMoon} size="lg" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
























// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
// import '../css/Navbar.css';
// // import './App.css';

// const Navbar = () => {
//     const [isDarkMode, setIsDarkMode] = useState(() => {
//         return localStorage.getItem('darkMode') == 'false';
//     });

//     useEffect(() => {
//         localStorage.setItem('darkMode', isDarkMode);
//         if (isDarkMode) {
//             document.body.style.backgroundColor = 'black';
//             document.body.style.color = 'white';
//             document.documentElement.style.setProperty('--contact-color', 'black');
//         } else {
//             document.body.style.backgroundColor = '';
//             document.body.style.color = '';
//             document.documentElement.style.setProperty('--contact-color', 'black');
//         }
//     }, [isDarkMode]);

//     const toggleTheme = () => {
//         setIsDarkMode(prevMode => !prevMode);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top">
//             <div className="container-fluid">
//                 <Link className="navbar-brand">HCLTech</Link>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon" />
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="d-flex flex-sm-column flex-lg-row align-items-start navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about">About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/intro">Intro</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/growth">Growth</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/events">Events</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/festivals">Festivals</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/future">Future</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/personal">Personal</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                     <div className="d-flex flex-row justify-content-start">
//                         <button
//                             className={`btn btn-outline-light ${isDarkMode ? '' : 'd-none'}`}
//                             onClick={toggleTheme}
//                         >
//                             <FontAwesomeIcon icon={faSun} size="lg" />
//                         </button>
//                         <button
//                             className={`btn btn-outline-light ${isDarkMode ? 'd-none' : ''}`}
//                             onClick={toggleTheme}
//                         >
//                             <FontAwesomeIcon icon={faMoon} size="lg" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;





















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
// import '../css/Navbar.css';

// const Navbar = () => {
//     const [isDarkMode, setIsDarkMode] = useState(() => {
//         return localStorage.getItem('darkMode') === 'true';
//     });

//     useEffect(() => {
//         localStorage.setItem('darkMode', isDarkMode);
//     }, [isDarkMode]);

//     const toggleTheme = () => {
//         setIsDarkMode(prevMode => !prevMode);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top">
//             <div className="container-fluid">
//                 <Link className="navbar-brand">HCLTech</Link>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon" />
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="d-flex flex-sm-column flex-lg-row align-items-start navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/about">About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/intro">Intro</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/growth">Growth</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/events">Events</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/festivals">Festivals</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/future">Future</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/personal">Personal</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                     <div className="d-flex flex-row justify-content-start">
//                         <button
//                             className={`btn btn-outline-light ${isDarkMode ? 'd-none' : ''}`}
//                             onClick={toggleTheme}
//                         >
//                             <FontAwesomeIcon icon={faSun} size="lg" />
//                         </button>
//                         <button
//                             className={`btn btn-outline-light ${isDarkMode ? '' : 'd-none'}`}
//                             onClick={toggleTheme}
//                         >
//                             <FontAwesomeIcon icon={faMoon} size="lg" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;














// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
// import '../css/Navbar.css';

// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 fixed-top">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" >HCLTech</Link>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent"
//                         aria-controls="navbarSupportedContent"
//                         aria-expanded="false"
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon" />
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="d-flex flex-sm-column flex-lg-row align-items-start navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item ">
//                                 <Link className="nav-link" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/intro">Intro</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/growth">Growth</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/events">Events</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/festivals">Festivals</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/future">Future</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/personal">Personal</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">Contact</Link>
//                             </li>
//                         </ul>
//                         <div className="d-flex flex-row justify-content-start">
//                             <button className="sun btn btn-outline-light " ><FontAwesomeIcon icon={faSun} size="lg" /></button>
//                             <button className='moon btn btn-outline-light d-none'><FontAwesomeIcon icon={faMoon} size="lg" /></button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;
