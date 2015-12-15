import React from 'react';
import Helmet from 'react-helmet';

export default React.createClass({

  getSEOConfig() {
    return {
      title: 'Careers at Syncano',
      description: 'If you are an explorer, an adventurer or a start-up entrepreneur at heart, apply on this page. Check for job openings in the US and Europe.',
      mixpanelTitle: 'Jobs'
    }
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="jobs ">
        <Helmet
          title={SEO.title}
          meta={[{"name": "mixpanelTitle", "content": SEO.mixpanelTitle}]}
        />
        <div className="hero" style={{backgroundImage: `url('${require('../../images/jobs-bg.png')}')`}}>
          <div className="container">
            <div className="info">
              <h1>We are dreamers, thinkers, <br/>inventors - and doers.</h1>
              <h5>We believe that every developer can build the app that changes the way people <br/>live, work, think, interact and socialize.</h5>
            </div>
          </div>
        </div>
        <div className="job-info">
          <div className="container">
            <div className="row text-center">
              <h2>Building an app is hard. <br/>The Syncano platform makes it easy, fast, scalable and accessible.</h2>
              <p>If you are an explorer, an adventurer or a start-up entrepreneur at heart, <br/>apply below.</p>
            </div>
          </div>
        </div>
        <div className="positions">
          <div className="container text-center">
            <h2>Open Positions</h2>
            <ul>
              <li>
                <h3><a href="https://syncano.workable.com/jobs/41529" target="_blank">Product Owner</a></h3>
                <h4>New York, NY</h4>
              </li>
              <li>
                <h3><a href="https://syncano.workable.com/jobs/41528" target="_blank">Developer Evangelist</a></h3>
                <h4>Telecommute, United States</h4>
              </li>
              <li>
                <h3><a href="https://syncano.workable.com/jobs/41523" target="_blank">Senior Front End Engineer</a></h3>
                <h4>Mazowieckie, Warsaw</h4>
              </li>
              <li>
                <h3><a href="https://syncano.workable.com/jobs/32568" target="_blank">Senior Python Developer</a></h3>
                <h4>Mazowieckie, Warsaw</h4>
              </li>
            </ul>
          </div>
        </div>
        <div className="benefits">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-1">
                <h2>We believe in trust, honesty and hard work. Like this:</h2>
                <h5>Flexible work and vacation policy (US)</h5>
                <p>Get your job done. Take the time you need.</p>
                <h5>Live where you want.</h5>
                <p>Do great work from an environment that you're comfortable in. We’re international and multicultural. We have offices in NYC, Oslo and Warsaw and employees distributed around the world.</p>
                <h5>Live a full life.</h5>
                <p>Hobbies and personal interests? Great, go after them. You bring more passion to your work when you live a full life.</p>
                <h5>Salary + Options + Benefits</h5>
                <p>We're a well-funded startup and you’re vital to our success. We offer highly competitive salaries, bonus, equity options and full benefits.</p>
                <h5>Beyond awesome team building.</h5>
                <p>We view team building a bit differently. Our last trip was in the Arctic Circle, in Svalbard. 24 hours of sun, polar bears, arctic foxes, and a lot, lot more. Help us plan our next destination!</p>
                <h5>No knives-in-the-back.</h5>
                <p>Politics are the worst.  If there’s one thing we’re adamant about, it’s not having them.</p>
                <h5>Talent and ability count.</h5>
                <p>We have degrees. We have no degrees. We have computer scientists. We have liberal arts majors. We’re about rewarding those who do great things.</p>
              </div>
              <div className="col-md-3 col-md-offset-1">
                <div><img src="IMG_8182.png" alt="IMG_8182"/></div>
                <div><img src="TapadNewOffice0314-2.png" alt="TapadNewOffice0314-2"/></div>
                <div><img src="mariuszsara_websummit.png" alt="mariuszsara_websummit"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
