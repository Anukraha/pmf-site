import React from 'react';

const Banner = () => {
  const bannerStyle = {
    position: 'relative',
    width: '100%',
  };

  const imageStyle = {
    position: 'relative',
    width: '100%',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity as needed
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    marginBottom: '30px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#fff',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <section style={bannerStyle}>
      <div style={imageStyle}>
        <img src="/path/to/image.jpg" alt="Banner" />
        <div style={overlayStyle}></div> {/* Overlay effect */}
      </div>
      <div style={contentStyle}>
        <h2 style={headingStyle}>Welcome to our Website</h2>
        <p style={paragraphStyle}>Discover the best franchise opportunities for your entrepreneurial journey.</p>
        <button style={buttonStyle}>Learn More</button>
      </div>
    </section>
  );
};

export default Banner;
