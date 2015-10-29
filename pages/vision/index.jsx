import React from 'react';
import Helmet from 'react-helmet';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "Our Vision",
      description: "People are more connected than ever. There are an average of 5.7 internet connected devices per household. Our vision is to make them all play together.",
      mixpanelTitle: "Vision"
    }
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div style={{paddingTop: 80, paddingBottom: 80}}>
        <Helmet
          title={SEO.title}
          meta={[
            {"name": "description", "content": SEO.description},
            {"name": "mixpanelTitle", "content": SEO.mixpanelTitle}
          ]}
        />
        <div className="text-hero">
          <div className="container">
            <h1>Our Vision</h1>
            <h2>Screens are everywhere. Make them play together.</h2>
          </div>
        </div>
        <div className="container">
          <h2>People are more connected to screens than ever before. In fact, there are an average of 5.7 internet
            connected devices per household, dramatically transforming the way we consume media, interact, engage and
            make decisions.</h2>
          <p>Not only are we using screens every day, but we are using them simultaneously for related or unrelated
            activities. How many times have you watched TV and used your smartphone or app during commercials? Or have
            you ever started researching something on your phone and moved between your tablet and PC to aid in
            finalizing your decision?</p>
          <h3>This cross-screen behavior is now the new way we engage.</h3>
          <p>All of these screens that we use are powered by apps. As the app world has matured, so have consumer
            expectations. Consumers now expect relevant content and experiences to be delivered across their various
            devices in real time. Anything less takes away from a powerful user experience and misses the mark.</p>

          <p>Building smart, cross-screen apps takes significant time and effort. The challenge app developers have
            today is that the rate that apps are evolving is much faster than the time it takes to develop and scale
            them. The result of this challenge is that building these apps becomes cost prohibitive which can ultimately
            hinder innovation and the ability to get to market quickly.</p>
          <h3>This is where Syncano fits in.</h3>
          <p>Syncano's cloud-based platform makes it easier for app developers to synchronize and scale data across
            devices and servers in real time.</p>
          <p dir="ltr"><strong>By using Syncano's backend to power your apps, you can expect the following:</strong></p>

          <ul>
            <li>empower your team with the ability to experiment on ideas and innovation without a significant financial
              burden
            </li>
            <li>innovate faster</li>
            <li>focus on strategy and user experience of your apps and let Syncano do the heavy lifting for you</li>
            <li>don't worry about scaling and managing servers</li>
            <li>get complex apps to market quickly</li>
            <li>increase ability to take on more projects and earn greater profit margins</li>
            <li>substantially grow your business</li>
            <li>build some really cool apps that you wouldn't have been able to create without Syncano!</li>
          </ul>
        </div>
      </div>
    )
  }
});