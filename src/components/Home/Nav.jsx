import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.svg";

export default function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // Close the menu after scrolling
        }
    };
    const logout = () => {

        localStorage.removeItem('userId');
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        // Reload the page to clear state and reset application
        window.location.reload();
    };

    return (
        <header className="shadow-lg  w-full" style={{ zIndex: 1000 }}>
            <div className="container mx-auto flex items-center h-24 px-4 md:px-0">
                <a href="/" className="flex items-center justify-center">
                    <img className="h-16" src={logo} alt="Ashura Blogs Logo" />
                    <span className="ml-4 logo-Text uppercase font-black">Full<br />Belly</span>
                </a>
                <div className="flex items-center ml-auto md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
                        </svg>
                    </button>
                </div>
                <nav className={`fixed top-0 right-0  h-full w-4/5 p-4 flex flex-col items-center justify-center transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform md:contents font-semibold text-base lg:text-lg md:static md:flex-row md:bg-transparent md:transform-none`}>
                    <button onClick={closeMenu} className="absolute top-4 right-4  focus:outline-none md:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <ul className="flex flex-col items-center md:flex-row md:ms-auto">
                        <li className={`p-5 xl:p-8`}>
                            <NavLink to="/" onClick={closeMenu}>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className={`p-5 xl:p-8`}>
                            <a href="#about">
                                <span>About</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-8`}>
                            <a href="#services">
                                <span>Services</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-8`}>
                            <a href="#diet">
                                <span>Diet</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-8`}>
                            <a href="#review">
                                <span>Review</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-8`}>
                            <a href="#newsletter">
                                <span>Newsletter</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-8`}>
                            <a href="#footer">
                                <span>Footer</span>
                            </a>
                        </li>
                        <li className={`p-5 xl:p-8`}>
                            <button onClick={logout} className="focus:outline-none">
                                <span>Logout</span>
                            </button>
                        </li>

                    </ul>

                </nav>
            </div>
        </header>
    );
}