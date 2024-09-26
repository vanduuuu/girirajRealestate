import React from 'react';
import './CircleDesign.css';
import img from '../../Assets/bg2-back.png'
const CircleDesign = () => {
  return (
<>
<div className='circleouter'>
    <img src={img} className="w-100" alt="img"></img>
    <section>
    <div className="container C-wrapper text-center my-5">
      <div className="big-circle mb-4">
        <i className="fas fa-eye"></i>
      </div>
      <div className="circles-wrapper">
        <div className="small-circle left-circle">Vision</div>
        <div className="small-circle top-circle">Mission</div>
        <div className="small-circle right-circle">Task</div>
      </div>
      <div className="description-wrapper">
        <div className="description vision-description"><p>"Our vision is to be the #1 Real Estate Team in Golden Triangle-South Mumbai, empowering our members to deliver exceptional service and results for our clients."</p></div>
        <div className="description mission-description"><p>
        "Our mission is to provide a top-tier full-service real estate experience with unwavering integrity, fully adhering to the Realtor's Code of Ethics in all our interactions."</p></div>
        <div className="description task-description">
            <p>"Progress: Strive to learn, give, and serve more.
            Service: A servant's heart brings abundant blessings. Legacy: Creating a lasting impact for you and your family."</p>
        </div>
      </div>
    </div>
    </section>
</div>
</>
  );
};

export default CircleDesign;
