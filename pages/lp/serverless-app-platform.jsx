import React from 'react';
import { Landing } from '../../components/';

export default React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-offset-2 col-md-8">
          <Landing.ContactFormInline/>
        </div>
      </div>
    )
  }
});
