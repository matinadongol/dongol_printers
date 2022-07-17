import React, { useState, useEffect, useRef } from 'react';
import logo from '../../images/navbarLogo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
                navRef.current.classList.add("scrolls");
                setScrolled(true);
            }
            else {
                navRef.current.classList.remove("scrolls");
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <section className='NavBar'>
                <nav className='navbar navbar-expand-lg navbar-light fixed-top shadow-5-strong' id='navbar' ref={navRef}>
                    <div className='container-fluid navbarPadding'>
                        <a className='navbar-brand' href='./index.html'>
                            <img src={logo} alt='' />.
                        </a>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                            data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
                            aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav mb-2 mb-lg-0 nav-pills'>
                                <li className='nav-item'>
                                    <a className='nav-link' aria-current='page' href='#home'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' aria-current='page' href='#about'>About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' aria-current='page' href='#services'>Services</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar