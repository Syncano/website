import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import Helmet from 'react-helmet';
import { link } from 'gatsby-helpers';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "Syncano - Build real-time apps, integrate with any API",
      description: "A backend platform to build real-time apps efficiently. Integrate with any API, minimize boilerplate code and control your data - all from one place. Start building!",
      mixpanelTitle: "Home"
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

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="home ">
        <Helmet
          title={SEO.title}
          meta={[
            {"name": "description", "content": SEO.description},
            {"name": "mixpanelTitle", "content": SEO.mixpanelTitle}
          ]}
        />
        <div className="bg-wrap" style={{background: '#244273'}}>
          <div className="hero">
            <div className="container">
              <div className="info">
                <h1>Build Serverless Apps</h1>
                <h2>A powerful platform to create connected apps without handling a backend or server</h2>
                <a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue cta-button mixpanel-btn" id="homepage-hero" style={{marginBottom: 0}}>START BUILDING FOR FREE</a>
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
                  <p>With <a href="http://docs.syncano.io/docs/codebox-overview" target="_blank">CodeBox</a>, run any code in the cloud with cron-like Schedules, Webhooks, or triggered by any kind of data change.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="">
                  <h3>Create complex data structures. Add real-time communication.</h3>
                  <p>Define your data the way you want it. <a href="http://docs.syncano.io/docs/data-objects-filtering" target="_blank">Query your data</a>. Connect your data to <a href="http://docs.syncano.io/docs/realtime-communication" target="_blank">Channels</a> to get real-time updates.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="">
                  <h3>Integrate with any API.</h3>
                  <p>Minimize boilerplate code. Easily install code blocks and reuse them across all of your apps with <a href="http://docs.syncano.io/docs/solutions" target="_blank">Solutions</a>. Share amongst the community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="platforms" style={{paddingTop: 120, paddingBottom: 120, background: '#F6F6F6'}}>
          <div className="container">
            <div className="row text-center">
              <h2>Build with your library of choice</h2>
              <h5>We’re Open Source! Help contribute to our code on <a href="https://github.com/syncano" target="_blank">GitHub</a></h5>
              <div className="col-md-1 hidden-md"></div>
              <div className="col-md-1 hidden-md"></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.io/docs/angularjs" target="_blank"><img src={require('../images/angularjs-logo.png')} alt="AngularJS Logo"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.io/docs/python" target="_blank"><img src={require('../images/python-logo.png')} alt="Python Logo"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.io/docs/javascript" target="_blank"><img src={require('../images/javascript.png')} alt="Javascript icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.io/docs/android" target="_blank"><img src={require('../images/android.png')} alt="android icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.io/docs/ruby" target="_blank"><img src={require('../images/ruby.png')} alt="ruby icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.io/docs/ios" target="_blank"><img src={require('../images/ios8.png')} alt="ios icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.io/v1.0/docs/ios#section-syncano-library-and-swift" target="_blank"><img src={require('../images/bird.png')} alt="firebird icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.io/docs/arduino" target="_blank"><img src={require('../images/arduino.svg')} alt="arduino icon"/></a></div>
            </div>
          </div>
        </div>
        <div className="testimonials" style={{background: '#fff'}}>
          <div className="container-fluid" id="testimonials">
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../images/hally.jpg')} alt="Hally Knutsen"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"What used to take 5 weeks now takes just 1 <br/>week with Syncano. <strong>You let developers be <br/>developers and not get stuck being<br/> middleware or database engineers.</strong>"</div>
                <div className="source">Hally Knutsen <br/><span>New York Digital Labs</span></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../images/krystian.jpg')} alt="Krystian"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"Hands-down the easiest way to build robust, <br/>advanced apps with real-time sync. CodeBox <br/>even lets me use third-party apps just like <br/>native ones. <strong>Finally I can build anywhere, <br/>anything, anytime on any device."</strong>
                </div>
                <div className="source">Krystian Sulek <br/><span>CHIMERA PRIME</span></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../images/patrick.jpg')} alt="Patrick"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"Syncano's personal, responsive support was a <br/>difference maker for me. <strong>Syncano is the <br/>developers' champion."</strong>
                </div>
                <div className="source">Patrick DeVivo <br/><span>Fastack</span></div>
              </div>
            </div>
      
          </div>
        </div>
        <div className="data">
          <div className="container">
            <h2 className="text-center">Define your data schema based on your apps’ needs</h2>
            <h5 className="text-center">Build complex data structures with <a href="http://docs.syncano.io/docs/classes" target="_blank">Classes</a></h5>
            <div className="row">
              <div className="col-md-4 col-md-offset-2 text-center">
                <div>
                  <img src={require('../images/dashboard.png')} height="55" alt="dashboard"/>
                </div>
                <h3>Manage your own dashboard</h3>
                <p>Create new objects in the Syncano dashboard<br/>or add them with code</p>
              </div>
              <div className="col-md-4 text-center">
                <div>
                  <img src={require('../images/nosql.png')} height="55" alt="nosql"/>
                </div>
                <h3>NoSQL-like Database</h3>
                <p>Gives you the flexibility to create sophisticated data relations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="build text-center">
          <h2>Add real-time communication with Channels</h2>
          <br/>
          <p>Subscribe to data changes, send custom notification messages, give users different permission types.<br/>Use Rooms to separate real-time data inside a <a href="http://docs.syncano.io/docs/realtime-communication" target="_blank">Channel</a>.</p>
        </div>
        <div className="middleware text-center">
          <div className="container">
            <h2>Build and add microservices into your app without setting up a server or building out a custom API</h2>
            <br/>
            <p>With CodeBox, write and run any code on a Schedule, Trigger or with a Webhook.<br/>Execute code by a particular date you set, or once a change is made to your data.</p>
            <p><strong>We currently support NodeJS, Python, Go, Swift, PHP, and Ruby.</strong></p>
            <p style={{fontSize: 60}}>
              <span style={{margin: '0 5px'}} className="devicons devicons-nodejs_small"/>
              <span style={{margin: '0 5px'}} className="devicons devicons-python"/>
              <img style={{verticalAlign: 'baseline', margin: '0 5px'}} src={require('../images/gopher.svg')} height="50" width="60" alt="gopher"/>
              <span style={{margin: '0 5px'}} className="devicons devicons-swift"/>
              <span style={{margin: '0 5px'}} className="devicons devicons-php"/>
              <span style={{margin: '0 5px'}} className="devicons devicons-ruby"/>
            </p>
            <img src={require('../images/slider/slide3.png')} alt="slide3"/>
          </div>
          <div className="shadow"></div>
        </div>
        <div className="solutions">
          <div className="container text-center">
            <h2>Install code blocks to your apps with <a href="http://docs.syncano.io/docs/solutions" target="_blank">Solutions</a></h2>
            <p>Stop wasting time on CRUD operations or creating code that's already been written.<br/>Simply enter our directory, find what you need, add it to any of your instances and start building within seconds.</p>
            <div className="row">
              <div className="col-md-4 item-8">
                <div className="solutions-item">
                  <div className="solutions-item-header">
                    <div className="solutions-item-header__column">
                      <p className="solutions-item__title">QRCode Generator</p>
                    </div>
                    <div className="solutions-item-header__column">
                      <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/656abb47e589879370574da4db611bdc')`}}></div>
                    </div>
                  </div>
                  <div className="solutions-item__description">This solution generates and stores QRCodes</div>
                  <div className="solutions-item__meta">
                    <div className="solutions-item__meta__section">
                      <div className="solutions-item__meta__section__column">
                        <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                      </div>
                      <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                        <ul>
                          <li>python, </li>
                          <li>image, </li>
                          <li>qrcode</li>
                        </ul>
                      </div>
                    </div>
                    <div className="solutions-item__meta__section">
                      <div className="solutions-item__meta__section__column">
                        <i className="zmdi zmdi-info-outline solutions-item__meta__icon solutions-item__meta__icon--version--stable"></i>
                      </div>
                      <div className="solutions-item__meta__section__column">
                        stable (2.2)
                      </div>
                    </div>
                  </div>
                  <div className="solutions-item-footer text-center">
                    <a className="solutions-item-footer__see-details-btn" href="https://dashboard.syncano.io/#/solutions/8/edit">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 item-9">
                <div className="solutions-item">
                  <div className="solutions-item-header">
                    <div className="solutions-item-header__column">
                      <p className="solutions-item__title">Send SMS</p>
                    </div>
                    <div className="solutions-item-header__column">
                      <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/656abb47e589879370574da4db611bdc')`}}></div>
                    </div>
                  </div>
                  <div className="solutions-item__description">Integrate with Twilio to send text and picture messages with CodeBox calls!</div>
                  <div className="solutions-item__meta">
                    <div className="solutions-item__meta__section">
                      <div className="solutions-item__meta__section__column">
                        <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                      </div>
                      <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                        <ul>
                          <li>python, </li>
                          <li>mms, </li>
                          <li>sms, </li>
                          <li>text, </li>
                          <li>twilio</li>
                        </ul>
                      </div>
                    </div>
                    <div className="solutions-item__meta__section">
                      <div className="solutions-item__meta__section__column">
                        <i className="zmdi zmdi-info-outline solutions-item__meta__icon solutions-item__meta__icon--version--stable"></i>
                      </div>
                      <div className="solutions-item__meta__section__column">
                        stable (1.0)
                      </div>
                    </div>
                  </div>
                  <div className="solutions-item-footer text-center">
                    <a className="solutions-item-footer__see-details-btn" href="https://dashboard.syncano.io/#/solutions/9/edit">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 item-10">
                <div className="solutions-item">
                  <div className="solutions-item-header">
                    <div className="solutions-item-header__column">
                      <p className="solutions-item__title">PDF to Image Converter</p>
                    </div>
                    <div className="solutions-item-header__column">
                      <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/656abb47e589879370574da4db611bdc')`}}></div>
                    </div>
                  </div>
                  <div className="solutions-item__description">This solution lets you convert PDFs and store them as images in syncano</div>
                  <div className="solutions-item__meta">
                    <div className="solutions-item__meta__section">
                      <div className="solutions-item__meta__section__column">
                        <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                      </div>
                      <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                        <ul>
                          <li>python, </li>
                          <li>image, </li>
                          <li>convert, </li>
                          <li>mashape, </li>
                          <li>pdf</li>
                        </ul>
                      </div>
                    </div>
                    <div className="solutions-item__meta__section">
                      <div className="solutions-item__meta__section__column">
                        <i className="zmdi zmdi-info-outline solutions-item__meta__icon solutions-item__meta__icon--version--stable"></i>
                      </div>
                      <div className="solutions-item__meta__section__column">
                        stable (1.0)
                      </div>
                    </div>
                  </div>
                  <div className="solutions-item-footer text-center">
                    <a className="solutions-item-footer__see-details-btn" href="https://dashboard.syncano.io/#/solutions/10/edit">
                      See Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a href="/solutions/" className="btn btn-dark-blue">See more Solutions</a>
          </div>
        </div>
        <div className="showcase">
          <div className="container text-center">
            <h2>Easily add <a href="http://docs.syncano.io/docs/user-management" target="_blank">user management</a> & <a href="http://docs.syncano.io/docs/permissions" target="_blank">user permissions</a>.<br/>Ensure your data is safe</h2>
            <div className="col-md-4">
              <img src={require('../images/authentication.png')} height="50" alt="authentication"/>
              <h3>User Authentication</h3>
              <p>Authenticate your users using<br/>passwords or social media</p>
            </div>
            <div className="col-md-4">
              <img src={require('../images/management.png')} height="50" alt="management"/>
              <h3>User Management</h3>
              <p>Create Users and Groups. User Profiles<br/>enable you to store any user data</p>
            </div>
            <div className="col-md-4">
              <img src={require('../images/security.png')} height="50" alt="security"/>
              <h3>Data Security</h3>
              <p>Syncano is HIPAA compliant</p>
            </div>
          </div>
        </div>
        <div className="support">
          <div className="container text-center">
            <h2>Get real support from real developers</h2>
            <p>We’re a small but growing team and your success is vital to our success.<br/>When you have questions, you’ll get answers from our own developers.</p>
            <Link to="/support/" className="btn btn-white">Check out our support page</Link>
          </div>
        </div>
        <div className="cta">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="text-center">Database. Backend. Middleware. Real-time. Microservices.<br/>All in one place</h2>
                <br/><br/>
                <a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue cta-button mixpanel-btn">START BUILDING FOR FREE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
