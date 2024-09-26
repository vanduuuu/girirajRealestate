import React from 'react'
import houseAd from '../../Assets/title.png'
import MainBanner from '../Home/Banner/Mainbannner'
import './Services.css'
const Services = () => {
  return (
    <div>
       <div className='service-outer'>
       <MainBanner title="Services" imageSrc={houseAd} />
       </div> 
    </div>
  )
}

export default Services