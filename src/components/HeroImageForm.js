import React from 'react';

const HeroImageForm = () => {
  return (
    <div>
      <div
        className="bg-img"
        style={{
          top: '-70px',
          // backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20210724/pngtree-dark-blue-abstract-business-background-image_752312.jpg')",
          minHeight: '150px',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative',
          textAlign: 'center',
          
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ flex: 1, color: 'white' }}>
            <br /><br />
          
            <h1 style={{color:'black'}}>Get in Touch.</h1>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center'  }} >
            <button
              className="btn"
              style={{
                width: '200px',
                height: '50px',
                position: 'absolute',
                top: '36%',
                right: '20px',
                backgroundColor: 'transparent',
                color: 'black',
                border: '2px solid black',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'black';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'black';
              }}
            >
              Enquire now
            </button>
          </div>
        </div>
      </div>

      {/* <p>
        This example creates a form on a responsive image. Try to resize the browser window to see how it always covers the whole width of the screen and scales nicely on all screen sizes.
      </p> */}
    </div>
  );
};

export default HeroImageForm;
