import React, { Component } from 'react';
import { HOC } from 'formsy-react';

class ContactFormTextarea extends Component {
  render() {
    const className = this.props.showError() ? 'is-invalid' : null;

    return (
      <textarea
        className={`form__textarea ${className}`}
        value={this.props.getValue()}
        onChange={(e) => this.props.setValue(e.target.value)}
        {...this.props}
      />
    );
  };
};

export default HOC(ContactFormTextarea);
