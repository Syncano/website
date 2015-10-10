import React from 'react';
import Helmet from 'react-helmet';
import Scroll from 'react-scroll';

export default React.createClass({

  getSEOConfig() {
    return {
      title: 'Support',
      description: 'Our scalable backend helps developers build complex, real-time apps with only front-end code.',
      keywords: 'real-time apps, real-time app, front-end code'
    }
  },
  
  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="support">
        <Helmet
          title={SEO.title}
          meta={[{"name": "description", "content": SEO.description}]}
        />
        <div className="hero">
          <div className="container">
            <div className="info support-hero-links">
              <h1>Need help? We're developers too.</h1>
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <div className="row">
                    <div className="col-sm-4">
                      <a href="http://docs.syncano.com" target="_blank">
                        <div className="support-hero-links__image">
                          <img src="docs.png" alt="docs"/>
                        </div>
                        <h5>Docs</h5>
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <a href="http://syncano.statuspage.io/" target="_blank">
                        <div className="support-hero-links__image">
                          <img src="api.png" alt="API Status"/>
                        </div>
                        <h5>Api Status</h5>
                      </a>
                    </div>
                    <div className="col-sm-4">
                      <Scroll.Link to="support-contact-form" smooth={true} offset={-90} duration={500} style={{cursor: 'pointer'}}>
                        <div className="support-hero-links__image">
                          <img src="developers.png" alt="developers"/>
                        </div>
                        <h5>Get Support</h5>
                      </Scroll.Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main container">
          <div className="row">
            <div className="sidebar col-md-3 col-md-offset-1">
              <h2>Quicklinks</h2>
              <ul>
                <li><a href="http://docs.syncano.com/docs/getting-started-with-syncano/" target="_blank">Getting Started</a></li>
                <li><a href="http://docs.syncano.com/docs/syncano-libraries/" target="_blank">Libraries</a></li>
                <li><a href="http://docs.syncano.com/v0.1/" target="_blank">HTTP API Reference</a></li>
                <li><a href="http://docs.syncano.com/docs/faq/" target="_blank">FAQ</a></li>
              </ul>
            </div>
            <div className="col-md-8">
              <h2>Frequently Asked Questions</h2>
              <h4>What is Syncano?</h4>
              <br/>
              <p>Syncano is a backend platform to build powerful real-time apps more efficiently.</p>
              <p>Syncano gives you the freedom to integrate with any API, define your data schema, write sophisticated processes to run any code in the cloud - on a schedule or with triggers and webhooks, and share app functionality in our open source community of Solutions - all from one intuitive dashboard.</p>
              <p>Our goal is to help you solve real user experience problems so that you don't have to worry about wasting time on CRUD operations and other plumbing activities.</p>
              <br/>
              <h4>What capabilities does Syncano provide to simplify application development?</h4>
              <br/>
              <ul>
                <li>With Syncano, any front-end developer can set up their entire backend, middleware, infrastructure and more without writing backend code</li>
                <li>Minimize boilerplate backend code with Solutions. Solutions are pieces of backend functionality to help reduce a lot of code redundancy. There is a lot of code that must reused for many different applications - but why would it make sense to rebuild the same functionality over and over again? Solutions help solve this problem for you. Browse through our directory of Solutions, create and share your own. All you need to do is hit the "Install" button, select your instance, and you have pre-made functionality installed into your app.</li>
                <li>CodeBox gives you the ability to write and run any code on Syncano. A CodeBox is an object that contains a script that can be run on Syncano's code servers - think of it as a microservice-like functionality. CodeBoxes can be run in several different ways - all depending on your apps' needs.</li>
                <li>Code with your preferred language. Use or REST API or our libraries. We currently support iOS, Swift, Android, Javascript, Python and Ruby. We're always adding more and appreciate your feedback. If we don't have what you need, let us know!</li>
                <li>Define your data schema with Classes. Classes give you the flexibility to customize the data in your app. Our NoSQL database enables you to create sophisticated data relations.</li>
                <li>Channels enable you to easily add real-time communication to your app.</li>
                <li>With User authentication, you can choose who can access your data by using our Permissions and User management.</li>
              </ul>
              <br/>
              <h4>Why should I use Syncano instead of setting up a database and building a customized set of APIs?</h4>
              <br/>
              <p>Modern developers struggle with rushing to market and are so focused on the core of their app that they have little to no time to focus on the user experience. Developers are left wasting time on CRUD operations instead of what truly matters.</p>
              <p>Additionally, when you create a specialized server and API for your app, then they are only good for that particular app. When you start developing a new app, you’re back at the beginning.  Syncano eliminates the need for you to create a specialized server and API. You can reuse functionality for any app you build and focus on problems specific to your app instead.</p>
              <p>Our goal is to reduce boilerplate code and for any front-end developer to be able to build a fully-fledged app without having to know backend code. We hope to give control back to the developer, to create a platform that gives you the flexibility to build how you want. We believe developers should be spending time focusing on your customers - not on middleware, backend or maintenance issues.</p>
              <br/><br/>
              <p><a href="http://docs.syncano.com/docs/faq/" target="_blank">More questions? Check out our FAQ</a></p>
              <br/>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact">
                    <Scroll.Element name="support-contact-form">
                      <h4>Get support</h4>
                      <br/>
                      <form action="//formspree.io/support@syncano.com" method="POST" name="contact" className="contact">
                        <input type="hidden" name="_subject" value="Contact Form Submission from syncano.com" />
                        <input type="text" name="_gotcha" style={{display: 'none'}} />
                        <input type="hidden" name="_next" value="//syncano.com/thank-contacting-us" />
                        <div className="form-group" id="name">
                          <input className="form-control" type="text" name="name" placeholder="Name" required/>
                        </div>
                        <div className="form-group" id="email">
                          <input className="form-control" type="email" name="_replyto" placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" rows="3" name="message" placeholder="Message"></textarea>
                        </div>
                        <input type="submit" value="Send" className="btn btn-dark-blue" />
                      </form>
                    </Scroll.Element>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
