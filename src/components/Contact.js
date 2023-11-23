import React from 'react'

function Contact() {
  return (
    <div>
        <div>
            <section className="contact-area ptb-100">
                <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                    <div className="contact-info">
                        <h3>Here to Help</h3>
                        <p>Have a question? You may find an answer in our <a href="Home">FAQs</a>. But you can also contact
                        us.</p>
                        <ul className="contact-list">
                        <li><i className="bx bx-map" /> Location: <a href="Home">R.S puram, Coimbatore</a></li>
                        <li><i className="bx bx-phone-call" /> Call Us: <a href="tel:+91 73977 55655">+91 73977 55655</a>
                        </li>
                        <li><i className="bx bx-envelope" /> Email Us: <a href="mailto:work@brandmonk.biz">work@brandmonk.biz</a></li>
                        </ul>
                        <h3>Opening Hours:</h3>
                        <ul className="opening-hours">
                        <li><span>Monday:</span> 8AM - 6AM</li>
                        <li><span>Tuesday:</span> 8AM - 6AM</li>
                        <li><span>Wednesday:</span> 8AM - 6AM</li>
                        <li><span>Thursday - Friday:</span> 8AM - 6AM</li>
                        <li><span>Sunday:</span> Closed</li>
                        </ul>
                        <h3>Follow Us:</h3>
                        <ul className="social">
                        <li><a href="https://www.youtube.com/@pickmyfranchise" className="d-block"><i className="bx bxl-youtube" /></a></li>
                        <li><a href="https://twitter.com/PickMyFranchise" className="d-block" ><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/pickmyfranchise/" className="d-block" ><i className="bx bxl-instagram" /></a></li>
{/*                         <li><a href="Home" target="_blank"><i className="bx bxl-linkedin" /></a></li>
                        <li><a href="Home" target="_blank"><i className="bx bxl-skype" /></a></li>
                        <li><a href="Home" target="_blank"><i className="bx bxl-pinterest-alt" /></a></li> */}
                        {/* <li><a href="Home" target="_blank"><i className="bx bxl-youtube" /></a></li> */}
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div id="map">
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3466790454054!2d76.94826601490063!3d11.012594692161526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85993ac8026f3%3A0x6cf499321b77cde4!2sBrand%20Monk%20Academy%20%7C%20Best%20digital%20marketing%20institute%20in%20coimbatore!5e0!3m2!1sen!2sin!4v1677670993247!5m2!1sen!2sin"/>
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