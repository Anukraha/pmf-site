import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import { Image } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
// import HeroImageForm from './HeroImageForm';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function FranchiseList() {

    const [franchise, setfranchise] = useState([]);
    useEffect(() => {
        getfranchise();
      }, []);
    
    const getfranchise = async()=>{
      try{
        await axios.get(`${process.env.REACT_APP_API_BASE }/franchise/`).then(function(response) {
          setfranchise(response.data);
      });
      }
      catch(err){
        console.error(err);
      }
    }
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

  let category_html_data = category.map((category,key)=><Dropdown.Item key={key} onClick={()=>{filterResult(category.category)}}>{category.category}</Dropdown.Item>);

  useEffect(() => {
    nonfilterResult();
    // eslint-disable-next-line 
  }, [franchise]); 

  const [data, setData] = useState(franchise);

  const filterResult = (category) => {
  const result = franchise.filter((filtered_data)=>{
      return filtered_data.category === category
    });
    setData(result);
  }

  const nonfilterResult = () => {
    setData(franchise);
  }
  const [banner_data, setbanner_data] = useState([]);
       useEffect(() => {
           getbanner_data();
         }, []);
      
    const getbanner_data = async()=>{
         try{
           await axios.get(`${process.env.REACT_APP_API_BASE }/banner/`).then(function(response) {
             setbanner_data(response.data);
         });
         }
         catch(err){
           console.error(err);
         }}
 let banner_html_data = banner_data.map((banner,key)=>
  <div key={key} className="main-banner banner-bg3" style={{backgroundImage:`url(.${banner.image_path.substring(1,1000)})`}}>
  </div>
  );
  const handleDragStart = (e) => e.preventDefault();
 banner_html_data = banner_data.map((banner,key)=>
 <img key={key} src={`.${banner.image_path.substring(1,1000)}`} onDragStart={handleDragStart} role="presentation" alt=''/>,
  );
        
  let franchise_html_data = data.map((data,key)=>
  <div className="col-lg-4 col-md-6 col-sm-6 products-col-item">
  <div className="single-products-box">
      <div className="products-image1">
      <Link to={`/${data.id}`} > 
          <Image src={`.${data.img_1.substring(1,1000)}`} className="main-image" alt="image" />
          {/* <Image src={`.${data.img_2.substring(1,1000)}`}className="hover-image" alt="image" /> */}
      </Link>
      </div>
      <div className="products-content">
      <h3><Link to={`/${data.id}`}>{data.franchise_name}</Link></h3><br />
      <Link to={`/${data.id}`} className="add-to-cart">More Details</Link>
      </div>
  </div>
  </div>
);

  return (
    <div>
      <AliceCarousel mouseTracking items={banner_html_data} 
    disableDotsControls={true} 
    disableButtonsControls={true} 
    autoPlay={true} 
    infinite={true}
    animationDuration={1000}
    autoPlayInterval={2000} 
/> 
        <div>
            <section className="products-area pt-100 pb-70">
                <div className="container">
                <div>
                  <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={()=>{nonfilterResult()}}>All</Dropdown.Item>
                      {category_html_data}
                    </Dropdown.Menu>
                  </Dropdown>
                </div><br></br>
                <div id="products-collections-filter" className="row">
                    {franchise_html_data}
                </div>
                </div>
            </section>
           
        </div>
    </div>
  )
}

export default FranchiseList