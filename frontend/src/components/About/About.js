import React from 'react';
import AboutLogo from '../../images/DongolPrintersLogoBlur.png';

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="about_content">
                    <div className="about_side_content">
                        <h1>About Us</h1>
                    </div>
                    <img src={AboutLogo} alt="logo" className="about_content_Img" />
                    <h1 className="aboutHeading" data-aos="zoom-in">Who are we?</h1>
                    <p data-aos="zoom-in" data-aos-duration="1000">Through our considerable experience in printing, we work closely with publishers,
                        self-publishers and
                        authors. We have invested in the very latest digital printing technology, to integrate with a fully
                        equipped craftsman bindery. We believe in making our customers feel comfortable with the whole
                        manufacturing process. We do this by ensuring that their production runs smoothly and painlessly.
                        Our helpful team of print experts are ready to guide you through the process.
                    </p>
                    <a data-aos="zoom-in"  data-aos-duration="1500" href="#footer">Visit Us</a>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svgAbout'><path fill="#0b5394" fillOpacity="1" d="M0,32L720,288L1440,32L1440,320L720,320L0,320Z"></path></svg>
            </section>
        </>
    )
}

export default About;