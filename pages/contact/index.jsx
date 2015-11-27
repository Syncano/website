import React from 'react';
import Helmet from 'react-helmet';
import { ContactForm } from '../../components/';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "Contact Us",
      description: "Contact Syncano, a real-time sync API and backend in the cloud that helps developers create real-time apps.",
      mixpanelTitle: "Contact Us"
    }
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="contact">
        <Helmet
          title={SEO.title}
          meta={[
            {"name": "description", "content": SEO.description},
            {"name": "mixpanelTitle", "content": SEO.mixpanelTitle}
          ]}
        />
        <div className="gray">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Ideas, suggestions, interested in partnerships?</h1>
                <h2>We'd love to hear from you!</h2>
                <p>Drop us an email at <a href="mailto:build@syncano.com">build@syncano.com</a></p>
                <p>Need to call us? Try <a href="tel:16468834189">+1 646 883 4189</a></p>
              </div>
              <div className="col-md-4">
                <ContactForm mail="hello@syncano.com"/>
              </div>
            </div>
          </div>
        </div>

        <div className="white" style={{paddingTop: 40, paddingBottom: 40}}>
          <div className="container">
            <div className="row">
              <div className="col-sm-3 text-center location">
                <img src="nyc.jpg" alt="nyc"/>
                <h2>USA - East Coast</h2>
                <p><a href="https://www.google.com/maps/place/120+E+23rd+St,+New+York,+NY+10010/@40.739496,-73.98572,17z/data=!3m1!4b1!4m2!3m1!1s0x89c259a0de37a537:0x60b1997940b9a35f" target="_blank">120 East 23rd St.</a></p>
                <p>5th Floor</p>
                <p>10010 New York, NY</p>
              </div>
              <div className="col-sm-3 text-center location">
                <img src="sanleandro.jpg" alt="sanleandro"/>
                <h2>USA - West Coast</h2>
                <p><a href="https://www.google.com/maps/place/1933+Davis+St+%23249,+San+Leandro,+CA+94577,+USA/@37.7163316,-122.1817367,17z/data=!3m1!4b1!4m2!3m1!1s0x808f8563fc8cbdc9:0xb2f270a9734d0b6b" target="_blank">1933 Davis St.</a></p>
                <p>#249</p>
                <p>94577 San Leandro, CA</p>
              </div>
              <div className="col-sm-3 text-center location">
                <img src="warsaw.jpg" alt="warsaw"/>
                <h2>POLAND</h2>
                <p><a href="https://www.google.com/maps/place/Aleje+Jerozolimskie+81,+Warszawa,+Poland/@52.2269719,21.001542,17z/data=!3m1!4b1!4m2!3m1!1s0x471ecc928b79810d:0xdfe2f37dc4130825" target="_blank">Al. Jerozolimskie 81</a></p>
                <p>02-001 Warsaw</p>
                <p>Poland</p>
              </div>
              <div className="col-sm-3 text-center location">
                <img src="oslo.jpg" alt="oslo"/>
                <h2>NORWAY</h2>
                <p><a href="https://www.google.com/maps/place/Stortingsgata+30,+0161+Oslo,+Norway/@59.9147703,10.7317376,17z/data=!3m1!4b1!4m2!3m1!1s0x46416e7e12fff935:0xda8a78ba0761b31" target="_blank">Stortingsgata 30</a></p>
                <p>0161 Oslo</p>
                <p>Norway</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
