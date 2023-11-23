import React from 'react'
import { Image } from 'react-bootstrap';
import {Helmet} from "react-helmet";
// import Banner from './Banner';
// import HeroImageForm from './HeroImageForm';

function About() {
  return (
    <div>
        <Helmet>
            <script src="assets/js/main.js" type="text/javascript"/>
   
        </Helmet>
        <div>
        {/* <img src="assets/img/pmf.gif" alt="GIF" style={{height:'540px', width:'100%'}}/> */}
            <section className="about-area ptb-100">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                    <div className="about-image">
                        <Image src="https://m.economictimes.com/thumb/msid-92692968,width-1200,height-770,resizemode-4,imgsize-49434/istock-987738900.jpg" className="shadow" alt="image" />
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                    <div className="about-content">
                        <h3 className="sub-title">About Us</h3>
                        <h6><h5><b>Are You Looking to expand your business ? </b></h5>it's important to have the right team behind you. That's where Pick My Franchise comes in. We offer a wide range of services, from business Consulting, branding, and digital marketing to ongoing support and guidance to help you grow your business. With our help, your business can reach new heights and become a nationwide phenomenon. Ready to take your business to the next level? </h6>
                        <h6><h5><b>Why Choose PMF? </b></h5>Pick My franchise has 5+ years of experience in the franchise industry and we understand what it takes to successfully expand your brand across all states. With our trademarked process of understanding market and strategy building according to demographics and audience, we handpick brands for investors and aspiring entrepreneurs that have the potential for long-term success. We understand that each business has unique needs, so we take the time to create tailored support plans that meet the needs and make sure that the businesses we work with are set up for success.</h6>
                        <h6><h5><b>Personalized Franchise Solutions </b></h5>Our investors and entrepreneurs have seen tremendous successes, growing their brands across all states and internationally. Whether it's a regional success or a global one, PMF has the resources and knowledge to help you grow your brand and take it to the next level.</h6>
                        <h6>We work with only the best brands and have a proven track record of success. We’ve helped brands like yours expand to new markets and we can do the same for you. Contact us today to learn more about our franchise opportunities.</h6>
                    </div>
                    </div>
                </div>
                <div className="about-inner-area">
                    <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="about-text">
                        <h3>Our Vision</h3>
                        <p>Empowering Entrepreneurs with Franchise Dreams</p>
                        <ul className="features-list">
                            <li><i className="bx bx-check" /> Franchise empowerment </li>
                            <li><i className="bx bx-check" /> Revolutionizing finding franchises</li>
                            <li><i className="bx bx-check" /> Creating a path to entrepreneurship</li>
                            <li><i className="bx bx-check" /> Connecting entrepreneurs and franchises.</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="about-text">
                        <h3>Our Mission</h3>
                        <p>Forging Strong Partnerships for Franchise Excellence</p>
                        <ul className="features-list">
                            <li><i className="bx bx-check" /> Simplify franchise discovery</li>
                            <li><i className="bx bx-check" /> Promoting franchise expansion</li>
                            <li><i className="bx bx-check" /> Inspiring and supporting entrepreneurs</li>
                            <li><i className="bx bx-check" /> Build franchisor-franchisee partnerships.</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="about-text">
                        <h3>Our Goal</h3>
                        <p>Enhancing Franchise Exploration and Experience</p>
                        <ul className="features-list">
                            <li><i className="bx bx-check" /> Connect diverse entrepreneurs</li>
                            <li><i className="bx bx-check" /> Enhance user experience</li>
                            <li><i className="bx bx-check" /> Foster knowledge sharing</li>
                            <li><i className="bx bx-check" /> Innovate and adapt for growth.</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div> 
                </div>
            </section>
          <section className="testimonials-area ptb-100">
                <div className="container">
                <div className="section-title">
                    <span className="sub-title">Services</span>
                    <h2>Services we provide</h2>
                </div>
                <div className="testimonials-slides owl-carousel owl-theme">
                    <div className="single-testimonials-item" style={{borderRadius:'20px'}}>
                       
                    <p>Franchise Assessment: We evaluate your goals, skills, and investment criteria to identify the right franchise opportunities for you.
</p>
                    
                    </div>
                    <div className="single-testimonials-item" style={{borderRadius:'20px'}}>
                    <p>Extensive Franchise Network: Our vast network enables us to connect you with a wide range of reputable franchises across different industries.</p>
                 
                    </div>
                    <div className="single-testimonials-item" style={{borderRadius:'20px'}}>
                    <p>Expert Guidance: We provide expert guidance at every step, including franchise research, negotiations, and finalizing the franchise agreement.</p>
                  
                    </div>
                    <div className="single-testimonials-item" style={{borderRadius:'20px'}}>
                    <p>Financial Assistance: We can assist you in exploring financing options and connecting you with lenders who specialize in franchise investments.</p>
                    
                    </div>
                </div>
                </div>
                
            </section> 
        </div>
      
    </div>
  )
}

export default About