import React from 'react';
import firstImg from '../../images/homeFirst.webp';
import secondImg from '../../images/homeSecond.webp';

const Home = () => {
    return (
        <>
            <section className="home" id="home">
                <div className="mobileHomeImg">
                    <img src={firstImg} alt="" />
                </div>
                <div className="home_content">
                    <h1 data-aos="zoom-in" data-aos-duration="1000">Your one-stop printing solution</h1>
                    <p data-aos="zoom-in"  data-aos-duration="1500">
                        Nepal based family-run printing press,<br/> proudly serving since 1990.<br />
                        Get 10% off on your first print,<br/> also includes free shipping!<br />
                        {/* Your documents are in safe hands. */}
                    </p>
                </div>
                <a href="#services" className='QuoteBtn' data-aos="zoom-in"  data-aos-duration="2000">Get Instant Quote</a>
                <div className="mobileHomeImg">
                    <img src={secondImg} alt="" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svgHome'><path fill="#0b5394" fillOpacity="1" d="M0,32L720,288L1440,32L1440,320L720,320L0,320Z"></path></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" className='svgHome' viewBox="0 0 1440 320"><path fill="#0b5394"  fillOpacity="1" d="M0,32L120,69.3C240,107,480,181,720,224C960,267,1200,277,1320,282.7L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
                 */}
            </section>
        </>
    )
}

export default Home