import React from "react";
import "./Banner.css";
import b1 from "../../../Assets/bg1.png";
import b2 from "../../../Assets/bg.png";
const Banner = () => {
  return (
    <>
      <div className="container-fixed">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="left-div">
              <div className="Onediv">
                <p className="bgP">Most Trusted</p>
                <h1 className="h1title">
                  Perfect Firm For Selling Or Leasing Houses, Flats, And Villas
                </h1>
                <p className="greypara">
                Giriraj Properties have over 35 years of real estate
 experience and are dedicated to customer service,
 commitment and accomplishment
                </p>
                <p className="greypara">
                Open homes and inspections are tailored to your
 schedule, costs are determined by your budget, and
 outcomes are negotiated around your expectations
                </p>
                <p className="greypara">
                We are backed by a team of multi
lingual professionals and can expose
 your property to a gambit of buyers,
 both foreign and domestic, using
 demographic appropriate media
 platforms.
                </p>
              </div>
            </div>
            <div className="verticle-txt">
              <h5>REal estae Agency</h5>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="rightimg">
              <img src={b1} alt="b1" className="w-100" />
            </div>
          </div>
        </div>
        <div className="abt-sectionbg">
        <section>

        <h1 className="h1title text-center">
        South Mumbai
                </h1>
                <p className="text-center greypara"> Our main area of
                operation</p>
          <div className="row">
            <div className="col-lg-5">
              <img src={b2} alt="about us" className="img-fluid"/>
            </div>
            <div className="col-lg-6">
              <div className="abt-inner2">
              <section>
              <p className="bgP">About Us</p>
              <h1 className="smalltitle">Giriraj Properties</h1>
<p className="greypara">have
 established themselves as the
 pre-eminent real estate brand
 and industry leaders in the
 premium property market.
 </p>
 <p className="greypara">A dedicated team of professionals
 committed to excellence in client
 service and satisfaction work
 tirelessly representing the full gamut
 of customers’ interests from buyers,
 sellers, developers and investors.</p>
<div className="abt-quote">
  <p className="greypara text-dark fw-bold">
    <i> When buying or selling a house, you
 want a real estate agent who negotiates
 the best deal and treats you as as their
 most important client</i>
  </p>
</div>
              </section>

              </div>
            </div>
          </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default Banner;
