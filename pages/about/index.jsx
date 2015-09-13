import React from 'react';
import Helmet from 'react-helmet';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "About Us",
      description: "Syncano was created to help developers build, test, and ship amazing experiences on more devices, in less time, and with fewer resources.",
      keywords: "syncano team, syncano jobs, syncano careers, syncano board, about syncano, syncano location, syncano office"
    }
  },

  componentDidMount() {
    require('../../node_modules/owl-carousel-2/owl.carousel.min');
    require('../../node_modules/owl-carousel-2/assets/owl.carousel.min.css');

    setTimeout(() => {
      $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        center: true,
        responsive: {
          0: {
            items: 1,
            autoHeight: true
          },
          480: {
            autoHeight: false,
            items: 6,
            autoWidth: true
          }
        }
      });
    }, 100);
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="about">
        <Helmet
          title={SEO.title}
          meta={[{"name": "description", "content": SEO.description}]}
        />
        <div className="hero">
          <div className="container">
            <div className="info">
              <h1>We're on a mission to <br/>make every developer a superstar</h1>
              <p>We believe in the world-changing power of apps and in the developers who build them. And the ever-increasing complexity of these apps demanded a new platform made by developers, for developers - Syncano.</p>
              <p>Syncano eliminates the need for backend development - but unlike other BaaS systems, we're just getting you started. Synchronize all the data in real-time, wherever it's from, whenever it's relevant, and whatever it looks like. Deploy totally scalable code to any device.</p>
              <p><strong>Now... How will YOU change the world with Syncano?</strong></p>
            </div>
          </div>
        </div>
        <div className="locations">
          <img src="map.png" alt="syncano office locations" />
        </div>
        <div className="owl-carousel about-us-carousel">
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/1.jpg')} alt="image 1"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/2.jpg')} alt="image 2"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/3.jpg')} alt="image 3"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/4.jpg')} alt="image 4"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/5.jpg')} alt="image 5"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/6.jpg')} alt="image 6"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/7.jpg')} alt="image 7"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/8.jpg')} alt="image 8"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/9.jpg')} alt="image 9"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/10.jpg')} alt="image 10"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/11.jpg')} alt="image 11"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/12.jpg')} alt="image 12"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/13.jpg')} alt="image 13"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/14.jpg')} alt="image 14"/>
          </div>
          <div className="about-us-carousel__item">
              <img src={require('../../images/carousel/15.jpg')} alt="image 15"/>
          </div>
        </div>

        <div className="team">
          <div className="container">
            <h2 className="text-center">Meet the Team</h2>
            <div className="row text-center">
              <div className="col-md-3 col-sm-3">
                <img src="nik.png" alt="nikolai"/>
                <h2>Nikolai Fasting</h2>
                <h3>CEO</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="hubert.png" alt="hubert"/>
                <h2>Hubert Wesolowski</h2>
                <h3>Junior Frontend</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="kelly.png" alt="kelly"/>
                <h2>Kelly Andrews</h2>
                <h3>Principal Developer Evangelist</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="Jhishan.png" alt="jhishan"/>
                <h2>Jhishan Khan</h2>
                <h3>Jr Developer Evangelist</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 col-sm-3">
                <img src="michal.png" alt="michal"/>
                <h2>Michal Kobus</h2>
                <h3>DevOps</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="robert.png" alt="robert"/>
                <h2>Robert Kopaczewski</h2>
                <h3>Chief Platform Architect</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="teodor.png" alt="teodor"/>
                <h2>Teodor Bjerrang</h2>
                <h3>Senior Product Designer</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="pedro.png" alt="pedro"/>
                <h2>Pedro Fasting</h2>
                <h3>Chairman of the Board</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 col-sm-3">
                <img src="sara.png" alt="sara"/>
                <h2>Sara Cowie</h2>
                <h3>Customer Growth</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="daniel.png" alt="daniel"/>
                <h2>Daniel Kopka</h2>
                <h3>Software Engineer</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="bartek.png" alt="bartek"/>
                <h2>Bartek Jakubowski</h2>
                <h3>DevOps</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="justyna.png" alt="justyna"/>
                <h2>Justyna Ilczuk</h2>
                <h3>Princess Champion of DevOps</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 col-sm-3">
                <img src="mary.png" alt="mary"/>
                <h2>Mary Fabro</h2>
                <h3>Head of Customer Growth</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="adam.png" alt="adam"/>
                <h2>Adam Wardecki</h2>
                <h3>Software Engineer</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="harald.png" alt="harald"/>
                <h2>Harald Lervik</h2>
                <h3>Board Member</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="maciej.png" alt="maciej"/>
                <h2>Maciej Kucharz</h2>
                <h3>Head of Engineering</h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 col-sm-3">
                <img src="mariusz.png" alt="mariusz"/>
                <h2>Mariusz Wisniewski</h2>
                <h3>The Tech Guy</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="patryk.png" alt="patryk"/>
                <h2>Patryk Kopycinski</h2>
                <h3>Software Engineer</h3>
              </div>
              <div className="col-md-3 col-sm-3">
                <img src="jeff.png" alt="jeff"/>
                <h2>Jeff Driskill</h2>
                <h3>CFO</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  )}
});
