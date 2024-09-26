import React from 'react'
import contactbg from '../../Assets/sustainable.jpg'
import MainBanner from '../Home/Banner/Mainbannner'
import './Contact.css'
const Contact = () => {
  return (
    <div>
        <div className='contact-outer'>
        <MainBanner title="Contact Us" imageSrc={contactbg} /> 

        <section className="contact-page-sec">
    <div className="container">
      <p className='bgP'>FEEL FREE TO CONTACT WITH US - <span>GIRIRAJ REAL ESTATE CONSULTANTS</span> </p>
      <h2 className='h2title'>We’re Here for You, No Matter Where You Are!</h2>
      <p className='greypara'>Reach out to us for expert guidance in real estate. Our dedicated team is ready to assist you in finding your dream home or investment property. Whether you're buying, selling, or exploring options, we're just a message away—let's make your real estate journey seamless and successful!</p>
      <div className="row">
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-map-marked"></i>
              </div>
              <div className="contact-info-text">
                <h2>address</h2>
                <span> Loonet Building, 1st Floor,
 Room No. 30, Opp. Chitra Cinema,
 Dr. Ambedkar Road,</span> 
                <span>Dadar East.
                Mumbai 400014</span> 
              </div>
            </div>            
          </div>          
        </div>          
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info-text">
                <h2>E-mail</h2>
                <span> giriraj.properties@gmail.com</span> 
              </div>
            </div>            
          </div>                
        </div>                
        <div className="col-md-4">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="contact-info-text">
                <h2>office time</h2>
                <span>Mon - Sat  9:00 am - 10.00 pm</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <form action="contact-mail.php" method="post">
              <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>                              
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>  
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div className="col-md-12 message-input">
                <div className="single-input-field">
                  <textarea  placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div className="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
            </form>   
          </div>      
        </div>
        <div className="col-md-4">        
          <div className="contact-page-map">
           

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.867184606141!2d72.99561517596528!3d19.069576252172716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18d9a0f2377%3A0xeb69a81457fd381d!2sVashi%20Plaza!5e0!3m2!1sen!2sin!4v1727239047065!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>          
        </div>        
      </div>
    </div>
  </section> 
        </div>
    </div>
  )
}

export default Contact