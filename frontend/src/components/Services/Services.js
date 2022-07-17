import React, { useState } from 'react';
import ServicesDetail from './ServicesDetail';
import ServicesHeading from './ServicesHeading';
import ServicesList from './ServicesList';
import ServicesDetailAPIData from './ServicesDetailAPI';

const uniqueList = [...new Set(ServicesDetailAPIData.map((curElem) => {
  return (
    curElem.category
    );
}))];

const Services = () => {
  const [status, setStatus] = useState(true);
  const filterItem = (category) => {
    const updatedList = ServicesDetailAPIData.filter((curElem) => {
      return curElem.category === category;
    });

    setServicesDetailData(updatedList);
  };
  const [servicesDetailData, setServicesDetailData] = useState(ServicesDetailAPIData);
  const [servicesDetailList, setServicesDetailList] = useState(uniqueList);

  return (
    <>
      <section className="services row m-0" id="services">
        <ServicesHeading />
        <ServicesList filterItem={filterItem} servicesDetailList={servicesDetailList} setStatus={setStatus} />
        <div className="col-lg-5 custom-7 col-md-7 col-sm-12 serviceRight ">
          <ServicesDetail servicesDetailData={servicesDetailData} status={status} setStatus={setStatus} />
        </div>
      </section>
    </>
  )
}

export default Services