import React from 'react';
import { RouteHandler, Link } from 'react-router';
import _ from 'lodash';

import { Adwords, Hello, Landing } from '../../components/';
import Helmet from 'react-helmet';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "Landing Page",
      description: "Syncano is a backend platform to build powerful real-time apps more efficiently. Integrate with any API, minimize boilerplate code and control your data.",
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
    return this.state.converted ? <Adwords.Conversion/> : null;
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
            {"name": "mixpanelTitle", "content": SEO.mixpanelTitle}
          ]}
        />
        <div className="bg-wrap" style={{background: '#244273'}}>
          <div className="hero">
            <div className="container">
              <div className="info">
                <h1>A Serverless Application Platform</h1>
                <h2>Build Powerful Real-Time Apps More Efficiently With Syncano</h2>
                <br/><br/>
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
                  <h3>Add microservice-like functionality to your app.</h3>
                  <p>With CodeBox, run any code in the cloud with cron-like Schedules, Webhooks, or triggered by any kind of data change.</p>
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
              <div className="col-md-1 hidden-md"></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/python-logo.png')} alt="Python Logo"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/javascript.png')} alt="Javascript icon"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/android.png')} alt="android icon"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/ruby.png')} alt="ruby icon"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/ios8.png')} alt="ios icon"/></div>
              <div className="col-md-1 col-xs-3"><img src={require('../../images/bird.png')} alt="firebird icon"/></div>
              <div className="col-md-1"></div>
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
                <div className="quote">"Hands-down the easiest way to build robust, <br/>advanced apps with real-time sync. CodeBox <br/>even lets me use third-party apps just like <br/>native ones. <strong>Finally I can build anywhere, <br/>anything, anytime on any device."</strong>
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
        <div className="data">
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
        <div className="build text-center">
          <h2>Add real-time communication with Channels</h2>
          <br/>
          <p>Subscribe to data changes, send custom notification messages, give users different permission types.<br/>Use Rooms to separate real-time data inside a Channel.</p>
        </div>
        <div className="middleware text-center">
          <div className="container">
            <h2>Build and add microservices into your app</h2>
            <br/>
            <p>Write and run any code on a schedule, triggered by an event or with a Webhook without setting up a server.<br/>Execute code by a particular date or a change in data.</p>
            <p><strong>We currently support Javascript, Python, Go and Ruby.</strong></p>
            <p><img src={require('../../images/middleware-support-icons.png')} width="288"/></p>
            <img src={require('../../images/slider/slide3.png')} />
          </div>
          <div className="shadow"></div>
        </div>
        <div className="solutions">
          <div className="container text-center">
            <h2>Install code blocks to your apps with Solutions</h2>
            <p>Stop wasting time on CRUD operations or creating code that's already been written.<br/>Simply enter our directory, find what you need, add it to any of your instances and start building within seconds.</p>
            <div className="row">
              <div className="col-md-4 item-8">
                <div className="solutions-item">
                  <div className="solutions-item-header">
                    <div className="solutions-item-header__column">
                      <p className="solutions-item__title">QRCode Generator</p>
                    </div>
                    <div className="solutions-item-header__column">
                      <div className="solutions-item__avatar" style={{backgroundImage: `url(${require('./QR.png')})`}}></div>
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
                </div>
              </div>
              <div className="col-md-4 item-9">
                <div className="solutions-item">
                  <div className="solutions-item-header">
                    <div className="solutions-item-header__column">
                      <p className="solutions-item__title">Send SMS</p>
                    </div>
                    <div className="solutions-item-header__column">
                      <div className="solutions-item__avatar" style={{backgroundImage: `url(${require('./Comments.png')})`}}></div>
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
                </div>
              </div>
              <div className="col-md-4 item-10">
                <div className="solutions-item">
                  <div className="solutions-item-header">
                    <div className="solutions-item-header__column">
                      <p className="solutions-item__title">PDF to Image Converter</p>
                    </div>
                    <div className="solutions-item-header__column">
                      <div className="solutions-item__avatar" style={{backgroundImage: `url(${require('./Acrobat.png')})`}}></div>
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
                </div>
              </div>
            </div>
          </div>
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
            <p>We’re a small but growing team and your success is vital to our success.<br/>When you have questions, you’ll get answers from our own developers.</p>
          </div>
        </div>
        <div className="cta">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="text-center">Add all the modules you need to build serverless apps</h2>
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
      </div>
    )
  }
});
