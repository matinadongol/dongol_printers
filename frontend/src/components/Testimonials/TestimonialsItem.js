import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const TestimonialsItem = ({ testimonialsItemData }) => {
    //console.log(testimonialsItemData);
    return (
        <>
            <OwlCarousel className='owl-theme' items="1" autoplay dots loop>
                {testimonialsItemData.map((curElem) => {
                    const { id, author, designation, comment } = curElem;
                    return (
                        <React.Fragment key={id}>
                            <div className="item testimonialsItem" data-aos="flip-up" data-aos-duration="2000" key={id}>
                                <div className="testimonialsItemBg"></div>
                                <i className="fa-solid fa-quote-left leftQuote"></i>
                                <p className="testimonialsComment">{comment}</p>
                                <i className="fa-solid fa-quote-right rightQuote"></i>
                                <hr className="testimoialsHr" />
                                <p className="testimoialsAuthorDessignation">{designation}</p>
                                <p className="testimoialsAuthor">{author}</p>
                            </div>
                        </React.Fragment>
                    )
                })}

            </OwlCarousel>
        </>
    )
}

export default TestimonialsItem;