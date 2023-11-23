import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styled, { keyframes } from 'styled-components';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'
const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeaderContainer = styled.header`
  .owl-carousel {
    position: relative;
    height: 100vh;
  }

  .owl-carousel .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .owl-carousel .item .cover {
    padding: 75px 0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
  }

  .owl-carousel .item .cover .container {
    position: relative;
    padding: 56px;
    overflow: hidden;
  }

  .owl-carousel .item .cover .container .line {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    left: 40px;
    top: 0;
    position: absolute;
    border: 9px solid #fff;
    clip-path: polygon(0 0, 60% 0, 36% 100%, 0 100%);
  }

  .owl-carousel .item .cover .container h2 {
    font-weight: 300;
    font-size: 35px;
    color: #fff;
    animation: ${fadeInDown} 1s both 0.3s;
  }

  .owl-carousel .item .cover .container h1 {
    font-size: 56px;
    font-weight: 600;
    margin: 5px 0 20px;
    word-spacing: 3px;
    color: #fff;
    animation: ${fadeInDown} 1s both 0.3s;
  }

  .owl-carousel .item .cover .container h4 {
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    color: #fff;
    animation: ${fadeInUp} 1s both 0.3s;
  }

  .owl-carousel .owl-item.active .line {
    animation: ${fadeInLeft} 1s both 0.3s;
    
  }

  .owl-carousel .owl-nav .owl-prev,
  .owl-carousel .owl-nav .owl-next {
    position: absolute;
    top: 43%;
    opacity: 0;
    transition: all 0.4s ease-out;
    background: rgba(0, 0, 0, 0.5) !important;
    width: 40px;
    cursor: pointer;
    height: 40px;
    position: absolute;
    display: block;
    z-index: 1000;
    border-radius: 0;
  }

  .owl-carousel .owl-nav .owl-prev span,
  .owl-carousel .owl-nav .owl-next span {
    font-size: 1.6875rem;
    color: #fff;
  }

  .owl-carousel .owl-nav .owl-prev:focus,
  .owl-carousel .owl-nav .owl-next:focus {
    outline: 0;
  }

  .owl-carousel .owl-nav .owl-prev:hover,
  .owl-carousel .owl-nav .owl-next:hover {
    background: #000 !important;
  }

  .owl-carousel:hover .owl-prev,
  .owl-carousel:hover .owl-next {
    left: 0px;
    opacity: 1;
    /* Form Styles */
    .form-container {
      position: absolute;
      top: 50%;
      left: 2rem;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.8);
      padding: 2rem;
      border-radius: 5px;
      color: #fff;
      animation: ${fadeInLeft} 1s both 0.3s;
    }
  
    .form-container h3 {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 1rem;
    }
  
    .form-container input,
    .form-container select {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
      border-radius: 5px;
      border: none;
    }
  
    .form-container button {
      background: #fff;
      color: #000;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

const Header = () => {
    
    const owlCarouselOptions = {
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      mouseDrag: false,
      autoplay: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    };
  
    // const navigate = useNavigate();
    // const [inputs, setInputs] = useState([]);
    // const handleChange = (event) => {
    //   const name = event.target.name;
    //   const value = event.target.value;
    //   setInputs(values => ({ ...values, [name]: value }));
    // }
    //   const handleSubmit = async (event) => {
    //       event.preventDefault();
    //       try {
    //           await axios.post(`${process.env.REACT_APP_API_BASE }/buy_franchise/`, inputs).then(function (response) {
    //               console.log(response.data);
    //               window.alert("Thanks! We will Contact You Soon");
    //               navigate('/');
    //           });
    //       }
    //       catch (err) {
    //           console.error(err);
    //       }
    //   }
    const items = [
      {
        image: 'https://cdn.pixabay.com/photo/2017/10/24/10/30/business-2884023_960_720.jpg',
        // subtitle: "Welcome to Brand Monk's ",
        title: 'PICK MY FRANCHISE',
        description: 'We help entrepreneurs, start-ups and enterprises shape their ideas into products'
      },
      {
        image: 'assets/img/bg.png',
        // subtitle: 'Professional Support',
        title: 'Franchise Consulting',
        description: "Your success is our priority, and we can't wait to help you achieve it."
      },
      {
        image: 'assets/img/bg.png',
        // subtitle: 'Targeted Reach',
        title: 'Streamlined Franchise Inquiries',
        description: 'Platform dedicated to help entrepreneurs find their franchise opportunity. '
      }
    ];
  
    return (
      <HeaderContainer>
        <OwlCarousel className="owl-carousel owl-theme" {...owlCarouselOptions}>
          {items.map((item, index) => (
            <div key={index} className="item" style={{height:'590px'}}>
              <img  src={item.image} alt="images not found" />
              <div className="cover">
                <div className="container" >
                <div className="col-lg-12" style={{ padding: '30px'}} >
                  <div className="header-content" >
                    <div className="line"></div>
                    <h2>{item.subtitle}</h2>
                    <h1>{item.title}</h1>
                    <h4>{item.description}</h4>
                  </div>
                 
                   </div>
                    
                    </div>
                  <div className="col-lg-5 col-md-6" style={{color:'white'}}>
                   {/*  <form id="contactForm">
                        <div className="row">
                        <div className="col-lg-12 col-md-6">
                            <div className="form-group">
                            <label>Name <span>*</span></label>
                            <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your name" onChange={handleChange}/>
                            <div className="help-block with-errors" />
                            </div>
                            <br></br>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div className="form-group">
                            <label>Email <span>*</span></label>
                            <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your email address" onChange={handleChange}/>
                            <div className="help-block with-errors" />
                            </div><br></br>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                            <label>Phone Number <span>*</span></label>
                            <input type="text" name="phone" id="phone" className="form-control" required data-error="Please enter your phone number" placeholder="Your phone number" onChange={handleChange}/>
                            <div className="help-block with-errors" />
                            </div><br></br>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                            <label>Franchise Name/Details<span>*</span></label>
                            <textarea name="franchise_name" id="franchise_name" cols={30} rows={5} required data-error="Please enter franchise name" className="form-control" placeholder="Write your franchise name/details" defaultValue={""} onChange={handleChange}/>
                            <div className="help-block with-errors" />
                            </div><br></br>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="default-btn" onClick={handleSubmit}>Send</button>
                            <div id="msgSubmit" className="h3 text-center hidden" />
                            <div className="clearfix" />
                        </div>
                        </div>
                    </form>*/}
                    </div> 
                </div>
              </div>
         
          ))}
        </OwlCarousel>
      </HeaderContainer>
    );
  };
  export default Header;
