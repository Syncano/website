import React, { Component } from 'react';

export default class SlackSliderNavNext extends Component {
  render() {
    return (
      <span {...this.props}>
        <img
          src={require('./images/right.svg')}
          alt="next slide"
        />
      </span>
    );
  };
};
