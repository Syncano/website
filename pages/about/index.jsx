import React from 'react';
import Helmet from 'react-helmet';
import Slider from 'react-slick';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "About Us",
      description: "Syncano was created to help developers build, test, and ship amazing experiences on more devices, in less time, and with fewer resources.",
      keywords: "syncano team, syncano jobs, syncano careers, syncano board, about syncano, syncano location, syncano office"
    }
  },

  getSliderConfig() {
    return {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      draggable: false,
      responsive: [{
        breakpoint: 2000,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }]
    }
  },

  getStyles() {
    return {
      mapContainer: {
        textAlign: 'center'
      },
      sliderContainer: {
        overflow: 'hidden'
      }
    }
  },

  render() {
    let styles = this.getStyles();
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
        <div className="locations" style={styles.mapContainer}>
          <img src="map.png" alt="syncano office locations" />
        </div>
        <div style={styles.sliderContainer}>
          <Slider {...this.getSliderConfig()}>
            <img src="2.jpg" alt="image 2"/>
            <img src="3.jpg" alt="image 3"/>
            <img src="4.jpg" alt="image 4"/>
            <img src="5.jpg" alt="image 5"/>
            <img src="6.jpg" alt="image 6"/>
            <img src="7.jpg" alt="image 7"/>
            <img src="8.jpg" alt="image 8"/>
            <img src="9.jpg" alt="image 9"/>
            <img src="10.jpg" alt="image 10"/>
            <img src="11.jpg" alt="image 11"/>
            <img src="12.jpg" alt="image 12"/>
            <img src="15.jpg" alt="image 15"/>
          </Slider>
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