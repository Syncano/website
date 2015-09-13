import React from 'react';

export default React.createClass({
  render() {
    return <div dangerouslySetInnerHTML={{__html: this.props.page.data}}></div>;
  }
});