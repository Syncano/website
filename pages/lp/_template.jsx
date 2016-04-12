import React from 'react';
import { RouteHandler, Link } from 'react-router';
import Scroll from 'react-scroll';

import { Adwords, Hello, Landing } from '../../components/';
import Helmet from 'react-helmet';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "A Serverless App Platform For Developers - Syncano",
      description: "Syncano is a backend platform to build powerful real-time apps efficiently. Integrate with any API, minimize boilerplate code and control your data.",
      mixpanelTitle: "Landing Page"
    }
  },

  getInitialState() {
    return {
      converted: false
    }
  },

  componentDidMount() {
    var $els = $('#testimonials > .row'),
      i = 0,
      len = $els.length;

    $els.slice(1).hide();
    setInterval(() => {
      $els.eq(i).fadeOut(() => {
        $els.eq(++i % len).fadeIn();
      })
    }, 7500)
  },

  renderConversionTag() {
    // return this.state.converted ? <Adwords.Conversion/> : null;
    return null;
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="home ">
        {this.renderConversionTag()}
        <Helmet
          title={SEO.title}
          meta={[
            {"name": "description", "content": SEO.description},
            {"name": "mixpanelTitle", "content": SEO.mixpanelTitle},
            {"name": "robots", "content": "noindex, nofollow"}
          ]}
        />
        <div className="bg-wrap" style={{background: '#244273'}}>
          <div className="hero">
            <div className="container">
              <div className="info">
                <RouteHandler {...this.props}/>
              </div>
            </div>
          </div>
        </div>
        <div className="highlights" style={{paddingTop: 120}}>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 col-sm-4">
                <div className="">
                  <h3>Add microservices to your app.</h3>
                  <p>With Scripts, run any code in the cloud with cron-like Schedules, Webhooks, or triggered by any kind of data change.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="">
                  <h3>Create complex data structures. Add real-time communication.</h3>
                  <p>Define your data the way you want it. Query your data. Connect your data to Channels to get real-time updates.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="">
                  <h3>Integrate with any API.<br/>Minimize boilerplate code.</h3>
                  <p>Easily install code blocks and reuse them across all of your apps with Solutions. Share your custom Solutions with the community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="platforms" style={{paddingTop: 120, paddingBottom: 120, background: '#F6F6F6'}}>
          <div className="container">
            <div className="row text-center">
              <h2>Build with your library of choice</h2>
              <h5>Syncano libraries are Open Source! You can contribute to our code on GitHub at any time.</h5>
              <div className="col-md-1 hidden-md"></div>
              <div className="col-md-1 hidden-md"></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/angularjs-logo.png')} alt="AngularJS Logo"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/logo-ember.png')} alt="EmberJS Logo"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/python-logo.png')} alt="Python Logo"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/javascript.png')} alt="Javascript icon"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/android.png')} alt="android icon"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/ruby.png')} alt="ruby icon"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/ios8.png')} alt="ios icon"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/arduino.svg')} alt="arduino icon"/></div>
            </div>
          </div>
        </div>
        <div className="testimonials" style={{background: '#fff'}}>
          <div className="container-fluid" id="testimonials">
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../../images/hally.jpg')} alt="Hally Knutsen"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"What used to take 5 weeks now takes just 1 <br/>week with Syncano. <strong>You let developers be <br/>developers and not get stuck being<br/> middleware or database engineers.</strong>"</div>
                <div className="source">Hally Knutsen <br/><span>New York Digital Labs</span></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../../images/krystian.jpg')} alt="Krystian"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"Hands-down the easiest way to build robust, <br/>advanced apps with real-time sync. Scripts <br/>even lets me use third-party apps just like <br/>native ones. <strong>Finally I can build anywhere, <br/>anything, anytime on any device."</strong>
                </div>
                <div className="source">Krystian Sulek <br/><span>CHIMERA PRIME</span></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../../images/patrick.jpg')} alt="Patrick"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"Syncano's personal, responsive support was a <br/>difference maker for me. <strong>Syncano is the <br/>developers' champion."</strong>
                </div>
                <div className="source">Patrick DeVivo <br/><span>Fastack</span></div>
              </div>
            </div>

          </div>
        </div>
        <div className="data text-center">
          <h2>Customize your APIs and features</h2>
          <h5>Every app’s needs are different. With Sockets, we give you the flexibility to combine and<br/>configure the building blocks your application needs. Build stronger and better apps, faster!</h5>
          <div className="text-center">
            <img src={require('../../images/sockets.png')} alt="sockets"/>
          </div>
        </div>
        <div className="data" style={{background: '#fff'}}>
          <div className="container">
            <h2 className="text-center">Define your data schema based on your apps’ needs</h2>
            <h5 className="text-center">Build complex data structures with Classes</h5>
            <div className="row">
              <div className="col-md-4 col-md-offset-2 text-center">
                <div>
                  <img src={require('../../images/dashboard.png')} height="55"/>
                </div>
                <h3>Manage your own dashboard</h3>
                <p>Create new objects in the Syncano dashboard<br/>or add them with code.</p>
              </div>
              <div className="col-md-4 text-center">
                <div>
                  <img src={require('../../images/nosql.png')} height="55"/>
                </div>
                <h3>NoSQL-like Database</h3>
                <p>Gives you the flexibility to create sophisticated data relations.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="data text-center">
          <h2>Add real-time communication with Channels</h2>
          <br/>
          <h5>Subscribe to data changes, send custom notification messages, give users different permission types.<br/>Use Rooms to separate real-time data inside a Channel.</h5>
          <br/><br/>
          <Scroll.Link to="landing-contact-form" smooth={true} offset={-90} duration={500} style={{cursor: 'pointer'}}>
            <div className="btn btn-dark-blue cta-button mixpanel-btn" id="homepage-hero" style={{marginBottom: 0, background: '#ffcc00', color: '#363636'}}>SIGN UP FOR FREE</div>
          </Scroll.Link>
        </div>
        <div className="middleware text-center">
          <div className="container">
            <h2>Build and add microservices into your app</h2>
            <br/>
            <p>Write and run any code on a schedule, triggered by an event or with a Webhook without setting up a server.<br/>Execute code by a particular date or a change in data.</p>
            <p><strong>We currently support NodeJS, Python, Go, Swift, PHP, and Ruby.</strong></p>
            <p style={{fontSize: 60}}>
              <span style={{margin: '0 5px'}} className="devicons devicons-nodejs_small"/>
              <span style={{margin: '0 5px'}} className="devicons devicons-python"/>
              <img style={{verticalAlign: 'baseline', margin: '0 5px'}} src={require('../../images/gopher.svg')} height="50" width="60" alt="gopher"/>
              <span style={{margin: '0 5px'}} className="devicons devicons-swift"/>
              <span style={{margin: '0 5px'}} className="devicons devicons-php"/>
              <span style={{margin: '0 5px'}} className="devicons devicons-ruby"/>
            </p>
            <img src={require('../../images/slider/slide3.jpg')} />
          </div>
          <div className="shadow"></div>
        </div>
        <div className="showcase">
          <div className="container text-center">
            <h2>Easily add user management & user permissions</h2>
            <div className="col-md-4">
              <img src={require('../../images/authentication.png')} height="50"/>
              <h3>User Authentication</h3>
              <p>Authenticate your users using<br/>passwords or social media.</p>
            </div>
            <div className="col-md-4">
              <img src={require('../../images/management.png')} height="50"/>
              <h3>User Management</h3>
              <p>Create Users and Groups. User Profiles<br/>enable you to store any user data.</p>
            </div>
            <div className="col-md-4">
              <img src={require('../../images/security.png')} height="50"/>
              <h3>Data Security</h3>
              <p>Syncano is HIPAA compliant to ensure<br/>your data is kept safe.</p>
            </div>
          </div>
        </div>
        <div className="support">
          <div className="container text-center">
            <h2>Get real support from real developers</h2>
            <h5>We’re a small but growing team and your success is vital to our success.<br/>When you have questions, you’ll get answers from our own developers.</h5>
          </div>
        </div>
        <Scroll.Element name="landing-contact-form">
          <div className="cta">
            <div className="container text-center">
              <div className="row">
                <div className="col-sm-12">
                  <h2 className="text-center">Build serverless apps with Syncano​</h2>
                  <br/><br/>
                  <div className="row">
                    <div className="col-md-offset-4 col-md-4">
                      <Landing.ContactForm/>
                    </div>
                  </div>
                  <br/><br/>
                </div>
              </div>
            </div>
          </div>
        </Scroll.Element>
      </div>
    )
  }
});