import React from 'react'

const ContactDetails = () => {
  return (
    <>
      <div className="contactDetails">
        <a href="#">
          <i class="fa-solid fa-phone"></i>
          &nbsp;
          01-4281682
        </a>
        <a href="#">
          <i class="fa-solid fa-envelope"></i>
          &nbsp;
          dongolprinters@gmail.com
        </a>
        <a href="#">
          <i class="fa-solid fa-location-dot"></i>
          &nbsp;
          Kalanki, Kathmandu
        </a>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='contactBlob'>
          <path fill="#cad4dc" d="M66,-38.8C76.3,-20.3,68.9,7.6,55,31.8C41,56,20.5,76.6,0,76.5C-20.5,76.5,-40.9,56,-51.5,33.7C-62.2,11.3,-63,-12.8,-52.8,-31.2C-42.5,-49.7,-21.3,-62.5,3.3,-64.4C27.9,-66.3,55.7,-57.3,66,-38.8Z" transform="translate(100 100)" />
        </svg>
      </div>
    </>
  )
}

export default ContactDetails;