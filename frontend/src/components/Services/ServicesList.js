import React from 'react';

const ServicesList = ({ filterItem, servicesDetailList, setStatus }) => {
    window.onload = function () {
        document.getElementsByClassName('autoClick')[0].click();
    };
    return (
        <>
            <div className="servicesList col-lg-3 custom-5 col-md-5 col-sm-12" data-aos="fade-right" data-aos-duration="1500">
                <div className="servicesHeading servicesMobile p-0">
                    <h2 className="m-0">We print books, journals, catalogues...</h2>
                    <p >Quality is integral to everything we do. We support our clients brands in a
                        fiercely
                        competitive market
                        to ensure excellent levels of customer satisfaction and perception.</p>
                </div>
                <div className="servicesListButtonGroup">
                    {servicesDetailList.map((curElem, index) => {
                        return (
                            <>
                                <button className={'servicesListButton' + ' ' + (index === 0 ? "autoClick" : "")} key={curElem.id} onClick={() => {
                                    filterItem(curElem);
                                    setStatus(true);
                                }}>
                                    {curElem}
                                </button>
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default ServicesList;