import React from 'react'
import './Footer.css'
import footlogo from '../../../Assets/GIRIRAJ LOGO-01.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
             <footer class="footer-section">
          <div class="container">
              <div class="footer-cta pt-5 ">
                  <div class="row">
                      <div class="col-xl-4 col-md-4 mb-30">
                          <div class="single-cta">
                              <i class="fas fa-map-marker-alt"></i>
                              <div class="cta-text">
                                  <h4>Find us</h4>
                                  <span> Loonet Building, 1st Floor,
 Room No. 30, Opp. Chitra Cinema,
 Dr. Ambedkar Road,
 Dadar East.
 Mumbai 400014</span>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-md-4 mb-30">
                          <div class="single-cta">
                              <i class="fas fa-phone"></i>
                              <div class="cta-text">
                                  <h4>Call us</h4>
                                  <span>+91-9820148089 </span>
                                  <span style={{color:'white'}}> | </span>
                                  <span>+91-9930964393 </span>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-md-4 mb-30">
                          <div class="single-cta">
                              <i class="far fa-envelope-open"></i>
                              <div class="cta-text">
                                  <h4>Mail us</h4>
                                  <span>giriraj.properties@gmail.com</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="footer-content pt-5 pb-1">
                  <div class="row">
                      <div class="col-xl-4 col-lg-4 mb-50">
                          <div class="footer-widget">
                              <div class="footer-logo mb-3">
                                  <a href="index.html"><img src={footlogo} class="img-fluid" alt="logo"/></a>
                              </div>
                              <div class="footer-text">
                                  <p><b>Giriraj Real Estate Consultants:</b> Your trusted partner in South Mumbai with over 35 years of expertise in real estate. We are dedicated to exceptional client service, empowering your real estate journey and connecting you to your dream property.</p>
                              </div>
                              <div class="footer-social-icon">
                                  <span>Follow us</span>
                                  <ul class="social_icon">
                                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                          <div class="footer-widget">
                              <div class="footer-widget-heading">
                                  <h3>Useful Links</h3>
                              </div>
                              <ul>
                                  <li><a href="#">Our Team</a></li>
                                  <li><a href="#">About Us</a></li>
                                  <li><a href="#">Our Gallery</a></li>
                                  <li><a href="#">Selection Process</a></li>
                                  <li><a href="#">FAQ</a></li>
                                  <li><a href="#">Sponsorship</a></li>
                                  <li><a href="#">Our Policies</a></li>
                                  <li><a href="#">Our Team</a></li>
                                  <li><a href="#">Contact us</a></li>
                              </ul>
                          </div>
                      </div>
                      <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                          <div class="footer-widget">
                              <div class="footer-widget-heading">
                                  <h3>Subscribe</h3>
                              </div>
                              <div class="footer-text mb-25">
                                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                              </div>
                              <div class="subscribe-form">
                                  <form action="#">
                                      <input type="text" placeholder="Email Address"/>
                                      <button><i class="fab fa-telegram-plane"></i></button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="copyright-area">
              <div class="container">
                          <div class="copyright-text">
                              <p>© 2024. All Rights Reserved by <Link to=""> Precision Grow (A Unit of Tech Visit IT Pvt Ltd)</Link></p>
                          </div>
                      </div>
                     
          </div>
      </footer>
    </div>
  )
}

export default Footer