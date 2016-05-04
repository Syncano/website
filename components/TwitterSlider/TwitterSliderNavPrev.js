import React from 'react';

export default class extends React.Component {
  render() {
    return (
      <span {...this.props}>
        <img
          src={require('./images/left.svg')}
          alt="prev slide"
        />
      </span>
    );
  };
};
