import React, { Component } from 'react';

export default class SlackSlider extends Component {
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
