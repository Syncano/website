import React from 'react';
import Helmet from 'react-helmet';

export default React.createClass({

  getSEOConfig() {
    return {
      title: 'Syncano Solutions - Easily install code blocks and reuse them across all of your apps',
      description: 'Easily install code blocks and reuse them across all of your apps with Solutions. Spend less time writing code with help from the Syncano community.',
      mixpanelTitle: 'Solutions'
    }
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="solutions" style={{background: '#fafafa'}}>
        <Helmet
          title={SEO.title}
          meta={[{"name": "mixpanelTitle", "content": SEO.mixpanelTitle}]}
        />
        <div className="hero">
          <div className="container">
            <div className="info support-hero-links">
              <h1>Spend less time writing code with easy-to-install, <br/>turnkey app templates from the Syncano
                community.</h1>
            </div>
          </div>
        </div>
        <div className="container solution" style={{paddingTop: 40}}>
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
                        <li>python,</li>
                        <li>image,</li>
                        <li>qrcode</li>
                      </ul>
                    </div>
                  </div>
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i
                        className="zmdi zmdi-info-outline solutions-item__meta__icon solutions-item__meta__icon--version--stable"></i>
                    </div>
                    <div className="solutions-item__meta__section__column">
                      stable (2.2)
                    </div>
                  </div>
                </div>
                <div className="solutions-item-footer text-center">
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/8/install" target="_blank">
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
                <div className="solutions-item__description">Integrate with Twilio to send text and picture messages
                  with CodeBox calls!
                </div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      <ul>
                        <li>python,</li>
                        <li>mms,</li>
                        <li>sms,</li>
                        <li>text,</li>
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
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/9/install" target="_blank">
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
                <div className="solutions-item__description">This solution lets you convert PDFs and store them as
                  images in syncano
                </div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      <ul>
                        <li>python,</li>
                        <li>image,</li>
                        <li>convert,</li>
                        <li>mashape,</li>
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
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/10/install" target="_blank">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 item-11">
              <div className="solutions-item">
                <div className="solutions-item-header">
                  <div className="solutions-item-header__column">
                    <p className="solutions-item__title">Slack giphy bot</p>
                  </div>
                  <div className="solutions-item-header__column">
                    <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/aa38cae284defda7b972f5115850ba5a')`}}></div>
                  </div>
                </div>
                <div className="solutions-item__description">Bot that posts message with a gif from giphy.com</div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      <ul>
                        <li>python,</li>
                        <li>bot,</li>
                        <li>slack,</li>
                        <li>giphy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i
                        className="zmdi zmdi-info-outline solutions-item__meta__icon solutions-item__meta__icon--version--stable"></i>
                    </div>
                    <div className="solutions-item__meta__section__column">
                      stable (1.0)
                    </div>
                  </div>
                </div>
                <div className="solutions-item-footer text-center">
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/11/install" target="_blank">
                    See Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 item-12">
              <div className="solutions-item">
                <div className="solutions-item-header">
                  <div className="solutions-item-header__column">
                    <p className="solutions-item__title">Yahoo Weather</p>
                  </div>
                  <div className="solutions-item-header__column">
                    <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/4d4c7993c7a28e1e11e6a2c3839e8be9')`}}></div>
                  </div>
                </div>
                <div className="solutions-item__description">This solution lets you get weather data for a city in
                  America
                </div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      <ul>
                        <li>python,</li>
                        <li>weather,</li>
                        <li>yahoo</li>
                      </ul>
                    </div>
                  </div>
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i
                        className="zmdi zmdi-info-outline solutions-item__meta__icon solutions-item__meta__icon--version--stable"></i>
                    </div>
                    <div className="solutions-item__meta__section__column">
                      stable (1.0)
                    </div>
                  </div>
                </div>
                <div className="solutions-item-footer text-center">
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/12/install" target="_blank">
                    See Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 item-14">
              <div className="solutions-item">
                <div className="solutions-item-header">
                  <div className="solutions-item-header__column">
                    <p className="solutions-item__title">Segment Integration</p>
                  </div>
                  <div className="solutions-item-header__column">
                    <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/4d4c7993c7a28e1e11e6a2c3839e8be9')`}}></div>
                  </div>
                </div>
                <div className="solutions-item__description">This solution lets you identify users and send events to
                  Segment.com
                </div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      <ul>
                        <li>python,</li>
                        <li>segment,</li>
                        <li>analytics</li>
                      </ul>
                    </div>
                  </div>
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i
                        className="zmdi zmdi-info-outline solutions-item__meta__icon solutions-item__meta__icon--version--stable"></i>
                    </div>
                    <div className="solutions-item__meta__section__column">
                      stable (1.0)
                    </div>
                  </div>
                </div>
                <div className="solutions-item-footer text-center">
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/14/install" target="_blank">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 item-17">
              <div className="solutions-item">
                <div className="solutions-item-header">
                  <div className="solutions-item-header__column">
                    <p className="solutions-item__title">Venmo</p>
                  </div>
                  <div className="solutions-item-header__column">
                    <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/b1722680238e43e7f3889d617b23073b')`}}></div>
                  </div>
                </div>
                <div className="solutions-item__description">Make payments through the Venmo API</div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      <ul>
                        <li>python,</li>
                        <li>payment</li>
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
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/17/install" target="_blank">
                    See Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 item-18">
              <div className="solutions-item">
                <div className="solutions-item-header">
                  <div className="solutions-item-header__column">
                    <p className="solutions-item__title">Stripe</p>
                  </div>
                  <div className="solutions-item-header__column">
                    <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/b1722680238e43e7f3889d617b23073b')`}}></div>
                  </div>
                </div>
                <div className="solutions-item__description">Charge customers through the Stripe API</div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      <ul>
                        <li>payment,</li>
                        <li>node,</li>
                        <li>stripe</li>
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
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/18/install" target="_blank">
                    See Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 item-27">
              <div className="solutions-item">
                <div className="solutions-item-header">
                  <div className="solutions-item-header__column">
                    <p className="solutions-item__title">GeoSyncano</p>
                  </div>
                  <div className="solutions-item-header__column">
                    <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/b1722680238e43e7f3889d617b23073b')`}}></div>
                  </div>
                </div>
                <div className="solutions-item__description">GeoSyncano is a solution that enables you to store & query
                  a set of geographic locations. It also has the Google Geocoding API built in.
                </div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      no tags
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
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/27/install" target="_blank">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 item-30">
              <div className="solutions-item">
                <div className="solutions-item-header">
                  <div className="solutions-item-header__column">
                    <p className="solutions-item__title">Youtube Search</p>
                  </div>
                  <div className="solutions-item-header__column">
                    <div className="solutions-item__avatar" style={{backgroundImage: `url('https://www.gravatar.com/avatar/656abb47e589879370574da4db611bdc')`}}></div>
                  </div>
                </div>
                <div className="solutions-item__description">This uses the google youtube api. Make a search query and
                  this solution will return a list of videos and store them in Syncano
                </div>
                <div className="solutions-item__meta">
                  <div className="solutions-item__meta__section">
                    <div className="solutions-item__meta__section__column">
                      <i className="zmdi zmdi-label solutions-item__meta__icon solutions-item__meta__icon--tags"></i>
                    </div>
                    <div className="solutions-item__meta__section__column solutions-item__meta__section__column--flex">
                      <ul>
                        <li>python,</li>
                        <li>google,</li>
                        <li>youtube,</li>
                        <li>youtube api</li>
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
                  <a className="solutions-item-footer__see-details-btn"
                     href="https://dashboard.syncano.io/#/solutions/30/install" target="_blank">
                    See Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
