import React from 'react'
import axios from 'axios'
import { useEffect, useState, useLayoutEffect} from "react";
import { Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import HeroImageForm from './HeroImageForm';
function Franchise() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    let params = useParams();
    const navigate = useNavigate();

    const [franchise, setfranchise] = useState([]);
    useEffect(() => {
        getfranchise();
    // eslint-disable-next-line 
    },[]);
    const getfranchise = async()=>{
        try{
          await axios.get(`${process.env.REACT_APP_API_BASE }/franchise/${params.id}`).then(function(response) {
            setfranchise(response.data);
        });
        }
        catch(err){
          console.error(err);
        }
    }

    if(!franchise)
    {
        window.alert("Data Not Available On this Moment We are Working On This Thank You !")
        navigate('/');
    }
  return (
    <div>
        <section className="blog-details-area ptb-100">
        <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="blog-details-desc">
                <div className="article-image">
                <Image src={`.${franchise.img_1 ? franchise.img_1.substring(1,1000): ''}`} alt="image" />
                </div>
                <div className="article-content">
                    <div className="entry-meta">
                    <ul>
                        <li>
                        <i className="bx bx-folder-open" />
                        <span>Category</span>
                        <p>{franchise.category}</p>
                        </li>
                        <li>
                        <i className="bx bx-group" />
                        <span>Budget</span>
                        <p>{franchise.budget}</p>
                        </li>
                        <li>
                        <i className="bx bx-calendar" />
                        <span>Added On</span>
                        <p>01/14/2021</p>
                        </li>
                    </ul>
                    </div>
                    <h3>{franchise.heading_1}</h3>
                    <p>{franchise.details_1}</p>
                    <p>{franchise.details_2}</p>
                    <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                        <figure>
                        <Image src={`.${franchise.img_2 ? franchise.img_2.substring(1,1000):''}`} alt="image" />
                        </figure>
                    </li>
                    <li className="blocks-gallery-item">
                        <figure>
                        <Image src={`.${franchise.img_3 ? franchise.img_3.substring(1,1000):''}`} alt="image" />
                        </figure>
                    </li>
                    <li className="blocks-gallery-item">
                        <figure>
                        <Image src={`.${franchise.img_4 ? franchise.img_4.substring(1,1000):''}`} alt="image" />
                        </figure>
                    </li>
                    </ul>
                    <h3>Four major elements that we offer:</h3>
                    <ul className="features-list">
                    <li><i className="bx bx-badge-check" /> {franchise.specification_1}</li>
                    <li><i className="bx bx-badge-check" /> {franchise.specification_2}</li>
                    <li><i className="bx bx-badge-check" /> {franchise.specification_3}</li>
                    <li><i className="bx bx-badge-check" /> {franchise.specification_4}</li>
                    </ul>
                    <div className="btn-box">
                    <a href="Buy-Franchise" className="default-btn">Buy Franchise</a>
                    </div>
                    <h3>{franchise.heading_2}</h3>
                    <p>{franchise.details_3}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        
    </div>
  )
}

export default Franchise