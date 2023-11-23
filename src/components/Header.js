import React from 'react'
import {Helmet} from "react-helmet";
function Header() {
  return (
    <div>
        <div>
        <Helmet>
            <script src="assets/js/main.js" type="text/javascript"/>
            <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '188646387528861');
              fbq('track', 'PageView');
            `,
          }}
        />
        </Helmet>
        <div className="navbar-area" >
          <div className="xton-responsive-nav">
            <div className="container">
              <div className="xton-responsive-menu">
                <div className="logo">
                  <a href="Home">
                    <img src="assets/img/logopmf.png" className="main-logo" alt="logo" style={{height:'50px', width:'120px'}}/>
                    <img src="assets/img/logopmf.png" className="white-logo" alt="logo" style={{height:'50px', width:'120px'}}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="xton-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="Home">
                  <img src="assets/img/logo.png" className="main-logo" alt="logo" style={{height:'50px', width:'120px'}} />
                  <img src="assets/img/white-logo.png" className="white-logo" alt="logo" style={{height:'50px', width:'120px'}}/>
                </a>
                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a href="Home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item megamenu"><a href="About" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item megamenu"><a href="Franchises" className="nav-link">Buy Franchise</a>
                    </li>
                    <li className="nav-item megamenu"><a href="Franchises1" className="nav-link">List Franchise</a>
                    </li>
                    <li className="nav-item megamenu"><a href="Videos" className="nav-link">Videos</a>
                    </li>
                    <li className="nav-item megamenu"><a href="Contact-Us" className="nav-link">Contact Us</a>
                    </li>
                  </ul>
                  <div className="others-option">
                    <div className="option-item">
                      <div className="burger-menu" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                        <span className="top-bar" />
                        <span className="middle-bar" />
                        <span className="bottom-bar" />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="navbar-area header-sticky">
          <div className="xton-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="Home">
                  <img src="assets/img/logo.png" className="main-logo" alt="logo" style={{height:'50px', width:'120px'}}/>
                  <img src="assets/img/white-logo.png" className="white-logo" alt="logo"style={{height:'50px', width:'120px'}}/>
                </a>
                <div className="collapse navbar-collapse mean-menu">
                  <ul className="navbar-nav">
                    <li className="nav-item"><a href="Home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item megamenu"><a href="About" className="nav-link">About Us</a>
                    </li>
                    <li className="nav-item megamenu"><a href="Franchises" className="nav-link">Buy Franchise</a>
                    </li>
                    <li className="nav-item megamenu"><a href="Franchises1" className="nav-link">List Franchise</a>
                    </li>
                    <li className="nav-item megamenu"><a href="Videos" className="nav-link">Videos</a>
                    </li>
                    <li className="nav-item megamenu"><a href="Contact-Us" className="nav-link">Contact Us</a>
                    </li></ul>
                  <div className="others-option">
                    <div className="option-item">
                      <div className="burger-menu" data-bs-toggle="modal" data-bs-target="#sidebarModal">
                        <span className="top-bar" />
                        <span className="middle-bar" />
                        <span className="bottom-bar" />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="modal right fade sidebarModal" id="sidebarModal" tabIndex={-1} role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="bx bx-x" /></span>
              </button>
              <div className="modal-body">
                <div className="sidebar-about-content">
                  <h3>About PMF</h3>
                  <div className="about-the-store">
                    <p>Are You Looking to expand your business it's important to have the right team behind you. That's where Pick My Franchise comes in. We offer a wide range of services, from business Consulting, branding, and digital marketing to ongoing support and guidance to help you grow your business. With our help, your business can reach new heights and become a nationwide phenomenon. Ready to take your business to the next level?</p>
                    <ul className="sidebar-contact-info">
                      <li><i className="bx bx-map" /> <a href="home" target="_blank">R.S puram, Coimbatore</a></li>
                      <li><i className="bx bx-phone-call" /> <a href="tel:+91 73977 55655">+91 73977 55655</a></li>
                      <li><i className="bx bx-envelope" /> <a href="mailto:work@brandmonk.biz">work@brandmonk.biz</a>
                      </li>
                    </ul>
                  </div>
                  <ul className="social-link">
                  <li><a href="https://www.youtube.com/@pickmyfranchise" className="d-block"><i className="bx bxl-youtube" /></a></li>
                        <li><a href="https://twitter.com/PickMyFranchise" className="d-block" ><i className="bx bxl-twitter" /></a></li>
                        <li><a href="https://www.instagram.com/pickmyfranchise/" className="d-block" ><i className="bx bxl-instagram" /></a></li>
{/*                     <li><a href="home" className="d-block" target="_blank"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="home" className="d-block" target="_blank"><i className="bx bxl-pinterest-alt" /></a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
    </div>
  )
}

export default Header