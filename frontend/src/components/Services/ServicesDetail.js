import React, { useState } from 'react';

const ServicesDetail = ({ servicesDetailData, status, setStatus }) => {
    //console.log(servicesDetailData);
    return (
        <>
            {
                status ?
                    <>
                        {servicesDetailData.map((curElem) => {
                            const { id, icon, heading, subheading, description } = curElem;
                            return (
                                <React.Fragment key={id}>
                                    <div className="serviceDetail" data-aos="fade-left" data-aos-duration="2000">
                                        <i className={icon}></i>
                                        <h1>{heading}</h1>
                                        <h2>{subheading}</h2>
                                        <hr />
                                        <p>{description}</p>
                                        <button type="button" className="ServiceQuote" onClick={() => setStatus(false)}>
                                            Get Quote &nbsp;
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </> :
                    <>
                        <div className="servicesDetailForm" data-aos="fade-right" data-aos-duration="1000">
                            <div className="servicesFormHeading">
                                <h1>Need a Quote?</h1>
                                <p>The more detail you can share with us, the faster we will be able to get back to you with a
                                    price. You
                                    can also call us at <span>01-4281682</span> or email us at <span>dongolprinters@gmail.com</span></p>
                            </div>
                            <form className="servicesForm">
                                <div className="row g-2">
                                    <div className="col-6 customInputWidth">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="Matina Dongol" />
                                            <label for="floatingInputGrid">Full Name</label>
                                        </div>
                                    </div>
                                    <div className="col-6 customInputWidth">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" placeholder="name@example.com" />
                                            <label for="floatingInputGrid">Email address</label>
                                        </div>
                                    </div>
                                    <div className="col-6 customInputWidth">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="9861522889" />
                                            <label for="floatingInputGrid">Phone Number</label>
                                        </div>
                                    </div>
                                    <div className="col-6 customInputWidth">
                                        <div className="form-floating">
                                            <select className="form-select" id="floatingSelectGrid">
                                                <option selected>Please select you order</option>
                                                <option value="1">Book</option>
                                                <option value="2">Brochure</option>
                                                <option value="3">Business Card</option>
                                                <option value="3">Letterhead</option>
                                                <option value="3">Envelopes</option>
                                                <option value="3">Flyers</option>
                                                <option value="3">Paper Bags</option>
                                                <option value="3">Posters</option>
                                                <option value="3">Calendars</option>
                                                <option value="3">Invitation Cards</option>
                                                <option value="3">Labels</option>
                                                <option value="3">Certificates</option>
                                                <option value="3">Others (Kindly mention in the additional information)</option>
                                            </select>
                                            <label for="floatingSelectGrid">What do you want to order?</label>
                                        </div>
                                    </div>
                                    <div className="col-4 customInputWidth">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="Matina Dongol" />
                                            <label for="floatingInputGrid">Quantity</label>
                                        </div>
                                    </div>
                                    <div className="col-4 customInputWidth">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="Matina Dongol" />
                                            <label for="floatingInputGrid">Size-In CM</label>
                                        </div>
                                    </div>
                                    <div className="col-4 customInputWidth">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="Matina Dongol" />
                                            <label for="floatingInputGrid">Number of pages</label>
                                        </div>
                                    </div>
                                    <div className="col-6 customInputWidth">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="Matina Dongol" />
                                            <label for="floatingInputGrid">Paper Type</label>
                                        </div>
                                    </div>
                                    <div className="col-6 customInputWidth">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" placeholder="Matina Dongol" />
                                            <label for="floatingInputGrid">Binding Style</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 custom-6 customInputWidth">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Matina Dongol"></textarea>
                                            <label for="floatingInputGrid">Describe your project</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 custom-6 customInputWidth">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Matina Dongol"></textarea>
                                            <label for="floatingInputGrid">Anything else you want to tell us?</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="servicesDetailFormSubmit">Submit</button>
                                <button className="servicesDetailFormGoBack" onClick={() => setStatus(true)}>
                                    Go Back &nbsp;<i className="fa-solid fa-arrow-left-long"></i>
                                </button>
                            </form>
                        </div>
                    </>
            }
        </>
    )
}

export default ServicesDetail