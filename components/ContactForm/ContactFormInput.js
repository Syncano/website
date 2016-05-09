import React, { Component } from 'react';
import { HOC } from 'formsy-react';

class ContactFormInput extends Component {
  render() {
    const className = this.props.showError() ? 'is-invalid' : null;

    return (
      <input
        className={`form__input ${className}`}
        value={this.props.getValue()}
        onChange={(e) => this.props.setValue(e.target.value)}
        {...this.props}
      />
    );
  };
};

export default HOC(ContactFormInput);
