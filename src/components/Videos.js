import React from 'react'
import axios from 'axios'
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'
// import HeroImageForm from './HeroImageForm';

function Videos() {

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

    const video_html_data = videos.map((videos,key)=>
    <div key={key} className="col-lg-4 col-md-6">
    <div className="single-blog-post" >
       
        <div className="post-image" style={{ borderRadius: '30px', overflow: 'hidden' }} >
  <ReactPlayer url={`${videos.video_link}`} />


        <div className="date">
            <span>{videos.created_at}</span>
        </div>
        </div>
        <div className="post-content">
        <span className="category">{videos.category}</span>
        <h3>{videos.tittle}</h3>
        </div>
    </div>
    </div>
    );
  return (
    <div >
        <section className="blog-area pt-100 pb-70">

            <div className="container">
              <h2>Franchise Videos</h2>
              <span>Captivating videos showcasing our franchise's success and offerings.</span><br></br><br></br>
            <div className="row">
                {video_html_data}
            </div>
            </div>
        </section>
       
    </div>
  )
}

export default Videos