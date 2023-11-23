import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                    <h3>About PMF</h3>
                    <div className="about-the-store">
                        <p>We offer a wide range of services, from business Consulting, branding, and digital marketing to ongoing support and guidance to help you grow your business.</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-footer-widget pl-4">
                    <h3>Quick Links</h3>
                    <ul className="quick-links">
                        <li><a href="Home">Home</a></li>
                        <li><a href="About">About Us</a></li>
                        <li><a href="Franchises">Franchise List</a></li>
                        <li><a href="Contact-Us">Contact Us</a></li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="single-footer-widget">
                    <h3>Contact Us</h3>
                    <div className="about-the-store">
                        <ul className="footer-contact-info">
                        <li><i className="bx bx-map" /> <a href="home" >R.S puram, Coimbatore</a></li>
                        <li><i className="bx bx-phone-call" /> <a href="tel:+91 73977 55655">+91 73977 55655</a></li>
                        <li><i className="bx bx-envelope" /> <a href="mailto:work@brandmonk.biz ">work@brandmonk.biz</a>
                        </li>
                        </ul>
                    </div>
                    <ul className="social-link">
                        <li><a href="https://www.youtube.com/@pickmyfranchise" className="d-block"><i className="bx bxl-youtube" /></a></li>
                        <li><a href="https://twitter.com/PickMyFranchise" className="d-block" ><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/pickmyfranchise/" className="d-block" ><i className="bx bxl-instagram" /></a></li>
{/*                         <li><a href="home" className="d-block" ><i className="bx bxl-linkedin" /></a></li>
                        <li><a href="home" className="d-block" ><i className="bx bxl-pinterest-alt" /></a>
                        </li> */}
                    </ul>
                    </div>
                </div>
                </div>
                <div className="footer-bottom-area">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                    <p>© PMF is Proudly Owned by <a href="https://brandmonk.biz/">Brand Monk</a></p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer