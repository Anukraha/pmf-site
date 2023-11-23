import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SubmitFranchise() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE}/submit_franchise/`, inputs).then(function (response) {
        console.log(response.data);
        window.alert('Thanks! We will Contact You Soon');
        navigate('/');
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
    <div className="center-align" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <section className="contact-area " style={{ backgroundColor: 'lightgray', width: '700px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-10">
              <div className="contact-form"><br></br>
                
                <h2 style={{ textAlign: 'center' }}>Do You Want To Add Your Franchise to PMF?</h2><br></br>
                <p style={{ textAlign: 'center' }}>
                  We're thrilled to be at your service! Whether you have inquiries or require an estimate, drop us a
                  line using the form below. Our team is eagerly standing by, ready to assist you.
                </p><br></br>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>Name <span>*</span></label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          required
                          data-error="Please enter your name"
                          placeholder="Your name"
                          onChange={handleChange}
                          style={{ backgroundColor: 'white', color: '#fff' }}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>Email <span>*</span></label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          required
                          data-error="Please enter your email"
                          placeholder="Your email address"
                          onChange={handleChange}
                          style={{ backgroundColor: 'white', color: '#fff' }}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Phone Number <span>*</span></label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="form-control"
                          required
                          data-error="Please enter your phone number"
                          placeholder="Your phone number"
                          onChange={handleChange}
                          style={{ backgroundColor: 'white', color: '#fff' }}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Your Franchise Name <span>*</span></label>
                        <textarea
                          name="franchise_name"
                          id="franchise_name"
                          cols={30}
                          rows={5}
                          required
                          data-error="Please enter your Franchise Name"
                          className="form-control"
                          placeholder="Write your Franchise Name..."
                          defaultValue={""}
                          onChange={handleChange}
                          style={{ backgroundColor: 'white', color: '#fff' }}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Your Franchise Category <span>*</span></label>
                        <textarea
                          name="franchise_category"
                          id="franchise_category"
                          cols={30}
                          rows={5}
                          required
                          data-error="Please enter your Franchise Category"
                          className="form-control"
                          placeholder="Write your Franchise Category..."
                          defaultValue={""}
                          onChange={handleChange}
                          style={{ backgroundColor: 'white', color: '#fff' }}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Your Franchise Investment <span>*</span></label>
                        <textarea
                          name="franchise_investment"
                          id="franchise_investment"
                          cols={30}
                          rows={5}
                          required
                          data-error="Please enter your Franchise Investment"
                          className="form-control"
                          placeholder="Write your Franchise Investment..."
                          defaultValue={""}
                          onChange={handleChange}
                          style={{ backgroundColor: 'white', color: '#fff' }}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="default-btn" onClick={handleSubmit}>
                        Send Message
                      </button>
                      <div id="msgSubmit" className="h3 text-center hidden" />
                      <div className="clearfix" /><br></br>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubmitFranchise;
