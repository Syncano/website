import React from 'react';
import Helmet from 'react-helmet';
import Pricing from '../../components/Pricing';

export default React.createClass({

  getSEOConfig() {
    return {
      title: "Pricing",
      description: "Syncano's a pay-as-you go pricing model supports up to 1,500 simultaneous connections. Contact us if you need further support.",
      keywords: "syncano, syncano pricing, syncano cost, real-time sync cost, real-time sync pricing"
    }
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div className="pricing-page">
        <Helmet
          title={SEO.title}
          meta={[{"name": "description", "content": SEO.description}]}
        />
        <div className="hero">
          <div className="container">
            <div className="info">
              <h1>Simple. Flexible. Fair.</h1>
              <div className="row l-pricing-toggle-section">
                <div className="col-sm-4 text-right">
                  <div className="pricing__plan">
                    <div className="pricing__plan__title">Builder</div>
                    <div className="pricing__plan__description">Full access to all Syncano features.<br/>No credit card required.<br/>We pick up the bill for you.</div>
                  </div>
                </div>
                <div className="col-sm-4 text-center">
                  <div className="pricing__toggle">
                    <div className="switch"></div>
                  </div>
                </div>
                <div className="col-sm-4 text-left">
                  <div className="pricing__plan">
                    <div className="pricing__plan__title">Production</div>
                    <div className="pricing__plan__description">From $25/month.<br/>Simply flip the switch and customize based on your needs.</div>
                  </div>
                </div>
              </div>
              <div className="row l-pricing-hero-cta">
                <div className="col-sm-12">
                  <div className="pricing-hero-cta__text">Build your app on your schedule. Pay only when you're ready to deploy.</div>
                  <a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue cta-button mixpanel-btn" id="homepage-hero">START BUILDING FOR FREE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-pricing-explanation-section" style={{background: '#fff'}}>
          <div className="container">
            <h2 className="pricing-explanation__headline">
              Pricing built for developers.
            </h2>
            <div className="row l-pricing-explanation-columns">
              <div className="col-md-5">
                <div className="pricing-explanation__item">
                  <div className="pricing-explanation__item__headline">
                    No commitment
                  </div>
                  <div className="pricing-explanation__item__text">
                    Create your builder account and start building powerful apps today. No credit card required.
                  </div>
                </div>
                <div className="pricing-explanation__item">
                  <div className="pricing-explanation__item__headline">
                    Ready when you are
                  </div>
                  <div className="pricing-explanation__item__text">
                    When you are ready to move to production, just flip the switch. It is that easy.
                  </div>
                </div>
                <div className="pricing-explanation__item">
                  <div className="pricing-explanation__item__headline">
                    Adjust to the plan that fits your needs
                  </div>
                  <div className="pricing-explanation__item__text">
                    It’s hard to gauge the success of an app. You can easily change plans in your Syncano dashboard
                    to better match your usage level.
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-md-offset-2">
                <div className="pricing-explanation__item">
                  <div className="pricing-explanation__item__headline">
                    Easy cost assessment
                  </div>
                  <div className="pricing-explanation__item__text">
                    Not sure how to predict your usage? We provide all of the tools to evaluate and estimate your production costs.
                  </div>
                </div>
                <div className="pricing-explanation__item">
                  <div className="pricing-explanation__item__headline">
                    You are in control
                  </div>
                  <div className="pricing-explanation__item__text">
                    Your budget is set and needs to be kept in check. That’s why we give you the ability to set limits. Soft limits allow you to receive warnings about your spending, hard limits prevent you from overspending.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section style={{background: '#fbfbfb', paddingTop: 74, paddingBottom: 74}}>
          <div className="container">
            <div style={{marginBottom: 50}}>
              <h2 className="pricing-explanation__headline" style={{marginBottom: 20}}>Choose your plan based on your needs</h2>
              <p className="text-center" style={{fontSize: 18, color: '#3c3c3c'}}>
                Move the toggles on API Calls and CodeBox runs to explore pricing. The more you grow, the lower the unit price.<br/>
                Once you're ready to deploy, simply select your plan in your <a href="https://dashboard.syncano.io/#/account/plan/">Dashboard</a>.
              </p>
            </div>
            <Pricing/>
          </div>
        </section>
        <section className="l-pricing-faq-section">
          <div className="container">
            <h2 className="pricing-faq__headline">Frequently Asked Questions</h2>
            <div className="row">
              <div className="col-md-5">
                <div className="pricing-faq__item">
                  <div className="pricing-faq__item__headline">
                    What happens if I exceed my usage? Can I set limits?
                  </div>
                  <div className="pricing-faq__item__text">
                    When you log into your Dashboard, you can set hard limits (absolute) and soft limits
                    (warnings/notifications issued). This ensures you are always in the loop when you have a sudden
                    burst in usage. If you actually exceed your usage, overage fees will appear on the next month’s
                    bill. You can change your limits at any time.
                  </div>
                </div>
                <div className="pricing-faq__item">
                  <div className="pricing-faq__item__headline">
                    What counts as 1 CodeBox execution?
                  </div>
                  <div className="pricing-faq__item__text">
                    To understand a CodeBox execution, let’s look at CodeBox itself. CodeBox is a powerful Syncano tool
                    with multiple applications. You can use it to create integrations between third party services, to
                    create your own logic accessible by an API built on Webhooks, to run schedules, to create triggers
                    and more. CodeBox Executions are measured by webhooks, schedules or triggers. These are all
                    explained in detail <a href="http://docs.syncano.com/v4/docs/codebox-overview/" target="_blank">here</a>.
                  </div>
                </div>
                <div className="pricing-faq__item">
                  <div className="pricing-faq__item__headline">
                    What are the limits on the Builder plan?
                  </div>
                  <div className="pricing-faq__item__text">
                    You have access to 100,000 API calls per month and 1,000 CodeBox executions per month - as long as
                    you're in building mode, it's on us.
                  </div>
                </div>
                <div className="pricing-faq__item">
                  <div className="pricing-faq__item__headline">
                    I have a question that’s not answered here.
                  </div>
                  <div className="pricing-faq__item__text">
                    No problem! Simply send an email to <a href="mailto:payments@syncano.com" target="_blank">payments@syncano.com</a> and one of our engineers will get back to you shortly!
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-md-offset-2">
                <div className="pricing-faq__item">
                  <div className="pricing-faq__item__headline">
                    Help! I don’t know how to predict my usage.
                  </div>
                  <div className="pricing-faq__item__text">
                    We understand that all apps come in different shapes and sizes. We recommend you start at the $25
                    plan to determine what your needs are for the first month. You can always adjust your usage for the
                    following month.
                  </div>
                </div>
                <div className="pricing-faq__item">
                  <div className="pricing-faq__item__headline">
                    What kind of usage metrics will I have access to?
                  </div>
                  <div className="pricing-faq__item__text">
                    Usage is accessible in your Dashboard. Easily track the amount of API calls and CodeBox executions
                    per each instance (project) on Syncano.
                  </div>
                </div>
                <div className="pricing-faq__item">
                  <div className="pricing-faq__item__headline">
                    What happens when my Builder plan expires at 6 months?
                  </div>
                  <div className="pricing-faq__item__text">
                    At the end of the 6 months, you can switch your account to production to continue using all the
                    functionality the Syncano platform has to offer. But don't worry, we will make sure you have plenty
                    of advance notice that your plan is about to expire. And you can always contact us with any
                    questions you may have at <a href="mailto:payments@syncano.com" target="_blank">payments@syncano.com</a>.
                  </div>
                </div>
              </div>
            </div>
            <div className="l-pricing-faq-section__cta">
              <a href="https://dashboard.syncano.io/#/signup" className="btn btn-dark-blue cta-button" id="homepage-hero">START BUILDING FOR FREE</a>
            </div>
          </div>
        </section>
      </div>
    )
  }
});

