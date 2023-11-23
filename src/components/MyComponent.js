import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MyComponent = () => {
  const videoLinks = [
    'assets/videos/video1.mp4',
    'assets/videos/video2.mp4',
    'assets/videos/video3.mp4',
    'assets/videos/video4.mp4'
  ];

  const renderVideos = () => {
    return videoLinks.map((videoLink, index) => (
      <div key={index}>
        <video controls width="700px" height="400px" style={{paddingLeft:100}}>
          <source src={videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ));
  };

  return (
    <AliceCarousel
      mouseTracking
      items={renderVideos()}
      disableDotsControls
      disableButtonsControls
      autoPlay
      infinite
      animationDuration={1000}
      autoPlayInterval={2000}
    />
  );
};

export default MyComponent;
