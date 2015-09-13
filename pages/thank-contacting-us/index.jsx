import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "Thank you for contacting us"
    }
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="contact" style={{paddingTop: 90}}>
        <Helmet title={SEO.title}/>
        <div className="container">
          <div className="col-md-6">
            <h1>Thank you! Your message has been received.</h1>
            <p>We’ll get back to you soon. In the mean time, check out some of our recent <Link to="blog-template">blog articles.</Link></p>
          </div>
          <div className="col-md-6">
            <img src="new_york_office_hydra_420px.jpg" alt="New York City" />
          </div>
        </div>
      </div>
    )
  }  
})
