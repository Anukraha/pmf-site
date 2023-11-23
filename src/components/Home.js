/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import { Image } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import {Helmet} from "react-helmet";
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
// import { useNavigate } from "react-router-dom";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import HeroImageForm from './HeroImageForm';


// import MyComponent from './MyComponent';
// import TabbedMenu from './TabbedMenu';
function Home() {

  // const handleDragStart = (e) => e.preventDefault();

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

    const [videos, setvideos] = useState([]);
    useEffect(() => {
        getvideos();
      }, []);
    
      const getvideos = async()=>{
          try{
            await axios.get(`${process.env.REACT_APP_API_BASE }/videos/`).then(function(response) {
              setvideos(response.data);
          });
          }
          catch(err){
            console.error(err);
          }
      }

      const video_html_data = videos.slice(0, 3).map((videos,key)=>
        <div key={key} className="col-lg-4 col-md-6">
        <Helmet>
          <script src="assets/js/main.js" type="text/javascript"/>
         


        </Helmet>
        <div className="single-blog-post">
            <div className="post-image" style={{ borderRadius: '30px', overflow: 'hidden' }} >
            <ReactPlayer url={`${videos.video_link}`} />
            {/* <div className="date">
                <span>{videos.created_at}</span>
            </div> */}
            </div>
            <div className="post-content">
            <span className="category">{videos.category}</span>
            <h3>{videos.tittle}</h3>
            </div>
        </div>
        </div>
    );

   

    const [trending_franchise, settrending_franchise] = useState([]);
    useEffect(() => {
        gettrending_franchise();
      }, []);

    const [category, setcategory] = useState([]);
  
    useEffect(() => {
        getcategory();
      }, []);
    
    const getcategory = async()=>{
      try{
        await axios.get(`${process.env.REACT_APP_API_BASE }/category/`).then(function(response) {
          setcategory(response.data);
          
      });
      }
      catch(err){
        console.error(err);
      }
    }

    let category_html_data = category.map((category,key)=><Dropdown.Item key={key} onClick={()=>{filterResult(category.id)}}>{category.category}</Dropdown.Item>);

    const gettrending_franchise = async()=>{
      try{
        await axios.get(`${process.env.REACT_APP_API_BASE }/trending_franchise/`).then(function(response) {
          settrending_franchise(response.data);
      });
      }
      catch(err){
        console.error(err);
      }
    }
    let trending_franchise_html_data = trending_franchise.map((trending_franchise,key)=>
        <div key={key} className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-categories-box">
            <Image style={{height:130, width:210, }} src={`.${trending_franchise.image_path.substring(1,1000)}`} alt="image" />
            
        </div>
        {/* <div className="content text-white">
            <a href="Buy-Franchise" className="default-btn">Enquire Now</a>
            </div> */}
        </div>
    );

    const [top_franchise, settop_franchise] = useState([]);

    useEffect(() => {
        gettop_franchise();
      }, []);
    
    const gettop_franchise = async()=>{
      try{
        await axios.get(`${process.env.REACT_APP_API_BASE }/top_franchise/`).then(function(response) {
          settop_franchise(response.data);
      });
      }
      catch(err){
        console.error(err);
      }
    }

    useEffect(() => {
      nonfilterResult();
      // eslint-disable-next-line 
    }, [top_franchise]); 

    const [data, setData] = useState(top_franchise);
    const filterResult = (category) => {
    const result = top_franchise.filter((filtered_data)=>{
        return filtered_data.category_id === category
      });
      setData(result);
    }

    const nonfilterResult = () => {
      setData(top_franchise);
    }

    let top_franchise_html_data = data.map((data,key)=>
        <div key={key} className="col-lg-4 col-md-6 col-sm-6" >
          <div className="single-products-box" style={{background:'whitesmoke', borderRadius:'20px',  border: '2px solid #86543b'}}>
              <div className="products-image" style={{ hpadding:'40px' }}>
              <Link to={`/${data.master_id}`} > 
              <Image  height="150px"
  width="150px"
  src={`.${data.image_path.substring(1, 1000)}`}
  className="main-image"
  alt="image"
  style={{ borderRadius: '8px'}}
/>
<Image
  src={`.${data.image_path.substring(1, 1000)}`}
  className="hover-image"
  alt="image"
  style={{ borderRadius: '8px' }}
/>
              </Link> 
              </div><br></br>
              <div className='top_franchise'>
                <h5 style={{fontSize:'18px' }}><b>Top Features</b></h5><br></br>
                <ul className="features-list">
                  <li style={{fontSize:'14px' }}><i className="bx bx-badge-check"/>{data.specification_1}</li>
                  <li style={{fontSize:'14px' }}><i className="bx bx-badge-check"/>{data.specification_2}</li>
                  <li style={{fontSize:'14px' }}><i className="bx bx-badge-check"/>{data.specification_3}</li>
                  <li style={{fontSize:'14px' }}><i className="bx bx-badge-check"/>{data.specification_4}</li>
                </ul>
                <div className="products-content">
                {/* <h3><Link   to={`/${data.master_id}`}  > {data.franchise_name}</Link> </h3><br /> */}
                <br></br><button
  onClick={() => window.location.href = `/${data.master_id}`}
  style={{
    background:'white',
    cursor: 'pointer',
    position: 'relative',
    top: '-15px',
    left: '50px',
    padding: '15px',
    color: '#86543b',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#86543b';
    e.target.style.color = 'white';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'white';
    e.target.style.color = '#86543b';
  }}
>
  More Details
</button>

                </div>
              </div>
          </div>
        </div>
    );

   
    
    const getbanner_data = async()=>{
      try{
        await axios.get(`${process.env.REACT_APP_API_BASE }/banner/`).then(function(response) {
          setbanner_data(response.data);
      });
      }
      catch(err){
        console.error(err);
      }}
    const [banner_data, setbanner_data] = useState([]);
    useEffect(() => {
        getbanner_data();
      }, []);
    let banner_html_data = banner_data.map((banner,key)=>
  <div key={key} className="main-banner banner-bg3" style={{backgroundImage:`url(.${banner.image_path.substring(1,1000)})`}}>
  </div>
  );
  const handleDragStart = (e) => e.preventDefault();
 banner_html_data = banner_data.map((banner,key)=>
 <img key={key} src={`.${banner.image_path.substring(1,1000)}`} onDragStart={handleDragStart} role="presentation" alt=''/>,
  );
       
   
    
  return (
    <div> 
    
    <div >
    <AliceCarousel mouseTracking items={banner_html_data} 
    disableDotsControls={true} 
    disableButtonsControls={true} 
    autoPlay={true} 
    infinite={true}
    animationDuration={1000}
    autoPlayInterval={2000} 
/> 
    </div>
    <section className="categories-banner-area pt-80 " style={{paddingLeft:'180px', paddingRight:'180px', backgroundColor:'white'}}>
                <div className="section-title"><br></br>
                <h2>Trending Franchises in Tamil Nadu</h2>
                </div>
                <AliceCarousel 
    mouseTracking
    items={trending_franchise_html_data.map((item, index) => (
      <div key={index} style={{ width: '1200px', height: '200px' }}>
        {item}
      </div>
    ))}
    disableDotsControls={true}
    disableButtonsControls={true}
    autoPlay={true}
    infinite={true}
    animationDuration={1000}
    autoPlayInterval={2000}
    responsive={{
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 4
      }
    }}
  />
              
            </section>
          
     <section className="categories-banner-area pt-100 pb-70">
                <div className="section-title">
                <a href="Buy-Franchise" className="default-btn">Buy Franchise</a>
                <a href="Submit-Franchise" className="optional-btn">Submit Your Franchise</a>
                </div>
            </section>
        <div>
           
       <br></br>
        <section className="products-area pb-70" style={{paddingLeft:'30px',paddingRight:'30px'}}>
                <div className="container" >
                <div>
                  <h1>Top Selling Franchises</h1><br></br>
                  <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>{nonfilterResult()}}>All</Dropdown.Item>
                      {category_html_data}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                
                </div>
                
            </section>
           <section className="about-section" style={{paddingLeft:'40px',paddingRight:'40px'}} >
  <AliceCarousel
    mouseTracking
    items={top_franchise_html_data.map((item, index) => (
      <div key={index} style={{  paddingLeft:'10px', paddingRight:'30px', width: '900px', height: '500px' }}>
        {item}
      </div>
    ))}
    disableDotsControls={true}
    disableButtonsControls={true}
    autoPlay={true}
    infinite={true}
    animationDuration={1000}
    autoPlayInterval={2000}
    responsive={{
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 4
      }
    }}
  />
</section>

  

  

<section className="categories-banner-area pt-80 " style={{paddingLeft:'180px', paddingRight:'180px', backgroundColor:'white'}}>
                <div className="section-title"><br></br>
                <h2>Our Clients</h2>
                </div>
                <AliceCarousel 
    mouseTracking
    items={trending_franchise_html_data.map((item, index) => (
      <div key={index} style={{ width: '1200px', height: '200px' }}>
        {item}
      </div>
    ))}
    disableDotsControls={true}
    disableButtonsControls={true}
    autoPlay={true}
    infinite={true}
    animationDuration={1000}
    autoPlayInterval={2000}
    responsive={{
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 4
      }
    }}
  />
              
            </section>
         
           
           
            <section className="blog-area pt-100 pb-70">
                <div className="container">
                <div className="section-title">
                    <span className="sub-title">Video's</span>
                    <h2 >Trending Videos</h2>
                </div>
                <div className="row">
                    {video_html_data}
                </div>
                <div className="section-title">
                    <a href='Videos'><span className="sub-title">More Video's ...</span></a>
                </div>
                </div>
              
            </section>
        </div>
        
    </div>
  )
}

export default Home