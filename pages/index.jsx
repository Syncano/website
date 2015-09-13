import React from 'react';
import { RouteHandler, Link } from 'react-router';
import _ from 'lodash';
import moment from 'moment';
import ReactScriptLoader from 'react-script-loader';

import Helmet from 'react-helmet';
import { link } from 'gatsby-helpers';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "Turning developers into superstars",
      description: "Syncano is a backend platform to build powerful real-time apps more efficiently.  Integrate with any API, minimize boilerplate code and control your data.",
      keywords: "real-time apps, real-time app, front-end code"
    }
  },

  componentDidMount() {
    var $els = $('#testimonials > .row'),
      i = 0,
      len = $els.length;

    $els.slice(1).hide();
    setInterval(function () {
      $els.eq(i).fadeOut(function () {
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
          meta={[{"name": "description", "content": SEO.description}]}
        />
        <div className="bg-wrap" style={{background: '#244273'}}>
          <div className="hero">
            <div className="container">
              <div className="info">
                <h1>Turning developers into superstars</h1>
                <h2>Build real-time synchronized apps - Connect to data anywhere, anytime.</h2>
                <a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue cta-button mixpanel-btn" id="homepage-hero" style={{marginBottom: 0}}>START BUILDING FOR FREE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="platforms">
          <div className="container">
            <div className="row text-center">
              <h2>Your Data. Your Platform. Your Apps.</h2>
              <h5>Get the data you need. Use the development environment of your choice and <br/>leverage our open source libraries to create your app in minutes.</h5>
              <div className="col-md-1 hidden-md"></div>
              <div className="col-md-1 hidden-md"></div>
              <div className="col-md-1 hidden-md"></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.com/docs/python" target="_blank"><img src={require('../images/python-logo.png')} alt="Python Logo"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.com/docs/javascript" target="_blank"><img src={require('../images/javascript.png')} alt="Javascript icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.com/docs/android" target="_blank"><img src={require('../images/android.png')} alt="android icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.com/docs/ruby" target="_blank"><img src={require('../images/ruby.png')} alt="ruby icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.com/docs/ios" target="_blank"><img src={require('../images/ios8.png')} alt="ios icon"/></a></div>
              <div className="col-md-1 col-xs-3"><a href="http://docs.syncano.com/v1.0/docs/ios#section-syncano-library-and-swift" target="_blank"><img src={require('../images/bird.png')} alt="firebird icon"/></a></div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div className="highlights">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 col-sm-4">
                <div className="">
                  <h3>Take Control of Your Data</h3>
                  <p>Syncano scales and syncs your data across devices in real-time. Get your data when you need it, where you need it, in the form you need it.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="">
                  <h3>Build Your App Your Way</h3>
                  <p>Syncano gives you the flexibility to run your code and define your data structures the way you want to - so you can focus on building powerful user experiences.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="">
                  <h3>Join the Community</h3>
                  <p>Syncano introduces Solutions, a marketplace that speeds up development, fosters collaboration among developers, and fuels creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="testimonials">
          <div className="container-fluid" id="testimonials">
      
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../images/hally.png')} alt="Hally Knutsen"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"What used to take 5 weeks now takes just 1 <br/>week with Syncano. <strong>You let developers be <br/>developers and not get stuck being<br/> middleware or database engineers.</strong>"</div>
                <div className="source">Hally Knutsen <br/><span>New York Digital Labs</span></div>
                <div className="navBulletsWrapper visible-lg">
                  <div rel="0" className="active">1</div>
                  <div rel="1">2</div>
                  <div rel="2">3</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../images/krystian.png')} alt="Krystian"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"Hands-down the easiest way to build robust, <br/>advanced apps with real-time sync. CodeBox <br/>even lets me use third-party apps just like <br/>native ones. <strong>Finally I can build anywhere, <br/>anything, anytime on any device."</strong>
                </div>
                <div className="source">Krystian Sulek <br/><span>CHIMERA PRIME</span></div>
                <div className="navBulletsWrapper visible-lg">
                  <div rel="0">1</div>
                  <div rel="1" className="active">2</div>
                  <div rel="2">3</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 image">
                <img src={require('../images/patrick.png')} alt="Patrick"/>
              </div>
              <div className="col-md-6 col-sm-6 text-center">
                <div className="quote">"Syncano's personal, responsive support was a <br/>difference maker for me. <strong>Syncano is the <br/>developers' champion."</strong>
                </div>
                <div className="source">Patrick DeVivo <br/><span>Fastack</span></div>
                <div className="navBulletsWrapper visible-lg">
                  <div rel="0">1</div>
                  <div rel="1">2</div>
                  <div rel="2" className="active">3</div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
        <div className="build text-center">
          <h2>Build true real-time apps in minutes. <br/>Exchange and synchronize your data blazingly fast.</h2>
          <p>Easily send and receive data between users without delay with just a few lines of code. <br/>Use channels to broadcast and listen for messages.</p>
        </div>
        <div className="data">
          <div className="container">
            <h2 className="text-center">Control your data.</h2>
            <h5 className="text-center">Store, manage, and synchronize data anywhere, anytime, in any form.</h5>
            <div className="row">
              <div className="col-md-4 col-md-offset-2 text-center">
                <div>
                  <img src={require('../images/dashboard.png')} height="55"/>
                </div>
                <h3>Manage your own dashboard</h3>
                <p>Upload, download, manage and sync data <br/>visually with your own Dashboard.</p>
              </div>
              <div className="col-md-4 text-center">
                <div>
                  <img src={require('../images/nosql.png')} height="55"/>
                </div>
                <h3>NoSQL database and file storage</h3>
                <p>NoSQL database and file storage included. Define and create relations, store files, and update your structure based on your needs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bugs">
          <div className="container">
            <h2 className="text-center">Don't spend another minute on bugs, migration, <br/>load balancing or other backend issues.</h2>
            <div className="row">
              <div className="col-md-4 col-md-offset-2 text-center">
                <h3>Replace your backend</h3>
                <p>Use Syncano's API calls instead and focus on <br/>the user experience.</p>
              </div>
              <div className="col-md-4 text-center">
                <h3>Deploy anywhere</h3>
                <p>Deploy anywhere: mobile, web, server, and <br/>desktop. Use our REST HTTP API or one of <br/>our native libraries for JavaScript, Python, <br/>iOS, Android, and .Net.</p>
              </div>
            </div>
          </div>
        </div>
      
        <div className="middleware text-center">
          <div className="container">
            <h2>No middleware required!</h2>
            <p>With CodeBox<sup>TM</sup>, create and run any code, whether it's your own or a third-party's. Build complex <br/>logic into your app. Process data on the fly. Integrate with anything.</p>
            <p><strong>We support Javascript, Python, GO and Ruby</strong></p>
            <p><img src={require('../images/middleware-support-icons.png')} width="288"/></p>
            <img src={require('../images/slider/slide3.png')} />
          </div>
          <div className="shadow"></div>
        </div>
        <div className="showcase">
          <div className="container text-center">
            <h2>Build apps with secure, world-class authentication <br/>and access management.</h2>
            <div className="col-md-4">
              <img src={require('../images/authentication.png')} height="50"/>
              <h3>User Authentication</h3>
              <p>Authenticate your users using <br/>passwords or social media <br/>profiles.</p>
            </div>
            <div className="col-md-4">
              <img src={require('../images/management.png')} height="50"/>
              <h3>Access Management</h3>
              <p>Create Users and Groups. User Profiles <br/>enable you to store any <br/>user data.</p>
            </div>
            <div className="col-md-4">
              <img src={require('../images/security.png')} height="50"/>
              <h3>Data Security</h3>
              <p>Syncano is HIPAA compliant and <br/>Safe Harbor certified.</p>
            </div>
          </div>
        </div>
      
        <div className="solutions">
          <div className="container text-center">
            <h2>Speed up your development process with Solutions.</h2>
            <p>Create your own work, share it with others, and easily install it within your app. <br/>Simply enter our directory, find what you need and start building within seconds.</p>
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
        <div className="support">
          <div className="container text-center">
            <h2>Real support from real developers.</h2>
            <p>It's never a straight path to building the next viral app. There are challanges to overcome, trails to be blazed.<br/>When you have questions, you'll get answers from our developers.</p>
            <a href="/support/" className="btn btn-white">Check out our support page</a>
          </div>
        </div>
        <div className="cta">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12">
                <h2>Ready?</h2>
                <a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue cta-button mixpanel-btn">START BUILDING FOR FREE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
