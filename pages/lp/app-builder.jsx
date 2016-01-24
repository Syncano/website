import React from 'react';
import Helmet from 'react-helmet';
import { Landing } from '../../components/';

export default React.createClass({
  getSEOConfig() {
    return {
      title: "A Serverless App Platform For Builders - Syncano"
    }
  },

  render() {
    let SEO = this.getSEOConfig();

    return (
      <div>
        <Helmet title={SEO.title}/>
        <h1>A Serverless App Platform<br/>For App Builders</h1>
        <h2>Forget About The Backend. Build Powerful Realtime Apps Efficiently.</h2>
        <br/><br/>
        <div className="row">
          <div className="col-sm-12 col-md-offset-2 col-md-8">
            <Landing.ContactFormInline/>
          </div>
        </div>
      </div>
    )
  }
});
