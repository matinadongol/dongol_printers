import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import "./style.css";
import "./responsive.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from './components/Testimonials/Testimonials';
import ScrollButton from './components/ScrollToTop/ScrollButton';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <ScrollButton/>
      <Home />
      <About />
      <Services/>
      <Testimonials />
      <Contact/>
      <Footer />
    </>
  )
};

export default App;