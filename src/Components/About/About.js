import React from 'react'
import MainBanner from '../Home/Banner/Mainbannner'
import houseAd from '../../Assets/title.png'
import adwomen from '../../Assets/1.png'
import trophi from '../../Assets/tt.png'
import './About.css'
const About = () => {
  return (
    <div>
         <MainBanner title="About Us" imageSrc={houseAd} />
         <div className='aboutOuter1'>
           <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='aboutinner1'>
                            <h2 className='h2title'>Few description <br/>
                            <span>about Giriraj Real Estate Consultants</span></h2>
                            <p className='bgP'>Introduction</p>
                            <p className='greypara mt-3'>
                            We are backed by a team of multilingual professionals who can expose your property to a wide range of buyers, both foreign and domestic, using demographic-appropriate media platforms. With over <b>35 years of real estate experience</b>, Giriraj Properties is dedicated to customer service, commitment, and accomplishment.
                            </p>
                            <h2 className='h2title'>
                            <span>Our Services</span></h2>
                            <p className='bgP'>Open Homes and Inspections</p>
                            <p className='greypara mt-3'>
                            Open homes and inspections are tailored to your schedule, costs are determined by your budget, and outcomes are negotiated around your expectations.    
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={adwomen} alt="adwomen" className='img-fluid'/>
                    </div>
                </div>
            </div>
         </div>
         <div className='aboutOuter2'>
    <div className='container-fixed'>
        <div className='row text-center mx-auto'>
            <div className='col-lg-6 a1'>
                <div className='abt-inner'>
                <p>BOOK YOUR</p>
                <h3>APPARTMENT OR HOUSE</h3>
                </div>
                </div>
            <div className='col-lg-6 a2'>
                <div className='abt-inner'>
                <h3>WE ARE READY TO RECEIVE YOUR CALL</h3>
                <h3>CALL US : <span>+91-9820148089</span><span> /+91-9820148089</span></h3>
                </div>
                </div>
        </div>
    </div>
</div>
<div className='abtOuter3'>
    <section>
    <div className='container'>
        <h1 className='h1title text-center'>Awards &
        Achievements</h1>
        <div className='row'>
        <div className='col-lg-5'>
                <img src={trophi} alt="t" className='w-75'/>
            </div>
            <div className='col-lg-7'>
                <div className='award'>
                <h2 className='h2title'><span>CHANNEL PARTNER CERTIFICATE</span></h2>
                <p className='greypara fs-3'><i>Awarded by 'Bombay Realty'</i></p>
                <h2 className='h2title'><span>AWARD FOR OUTSTANDING SALES PERFORMANCE</span></h2>
                <p className='greypara fs-3'><i>Awarded by 'Bombay Realty'</i></p>
                <h2 className='h2title'> <span>CERTIFICATE OF APPRECIATION</span></h2>
                <p className='greypara fs-3'><i> Awarded by 'Runwal Developers'</i></p>
                </div>
            </div>
            
        </div>
    </div>
    </section>
 
</div>
    </div>
  )
}

export default About