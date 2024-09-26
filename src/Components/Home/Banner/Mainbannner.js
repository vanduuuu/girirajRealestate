import React from 'react';
import './Banner.css';
import './Mainbannner.css';

const MainBanner = ({ title, imageSrc }) => {
  return (
    <div className="banner">
      <div className='inner-bannertxt'>
        <h1 className='h1title'>{title}</h1>
      </div>
      <div className='container h-100'> {/* Ensure container takes full height */}
        <div className='row h-100'> {/* Ensure row takes full height */}
          <div className='col-lg-6 d-flex align-items-center'>
            {/* This column can be empty or have text if needed */}
          </div>
          <div className='col-lg-6 d-flex justify-content-end'>
            <img src={imageSrc} alt="" className="img-fluid m-0 p-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
