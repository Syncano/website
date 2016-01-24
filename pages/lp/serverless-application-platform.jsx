import React from 'react';
import { Landing } from '../../components/';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>A Serverless App Platform<br/>For Developers</h1>
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
