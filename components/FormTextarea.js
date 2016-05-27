import React, { Component } from 'react';
import { HOC } from 'formsy-react';
import classNames from 'classnames';

class ContactFormTextarea extends Component {
  getClassName = () => {
    const { showError } = this.props;

    return classNames({
      'form__textarea': true,
      'is-invalid': (showError()),
    });
  };

  render = () => {
    const { getValue, setValue } = this.props;

    return (
      <textarea
        className={this.getClassName()}
        value={getValue() || ''}
        onChange={(e) => setValue(e.target.value)}
        {...this.props}
      />
    );
  };
};

export default HOC(ContactFormTextarea);
