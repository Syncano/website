import React from 'react';
import { Landing } from '../../components/';

export default React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-md-offset-4 col-md-4">
          <Landing.ContactForm/>
        </div>
      </div>
    )
  }
});
