import React, { useState } from 'react';
import TestimonialsHeading from './TestimonialsHeading';
import TestimonialsItem from './TestimonialsItem';
import TestimonialsAPIData from './TestimonialsAPI';

const Testimonials = () => {

    const [testimonialsItemData, setTestimonialsItemData] = useState(TestimonialsAPIData);
    return (
        <>
            <section className="testimonials" id="testimonials">
                <TestimonialsHeading />
                <TestimonialsItem testimonialsItemData={testimonialsItemData}/>
            </section>
        </>
    )
}

export default Testimonials;