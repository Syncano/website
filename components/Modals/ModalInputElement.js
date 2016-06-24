import React, { Component } from 'react';
import { HOC } from 'formsy-react';
import classNames from 'classnames';

class ModalInputElement extends Component {
  componentDidMount() {
    const { autofocus } = this.props;

    if (autofocus) {
      setTimeout(() => this.refs.input.focus(), 0);
    }
  };

  getClassName = () => {
    const { showError, className } = this.props;
    const { displayValidationErrors } = this.context.auth;

    console.log(`displayValidationErrors: ${displayValidationErrors}`);

    return classNames(className, {
      'form__input': true,
      'mousetrap': true,
      'is-invalid': (showError() && displayValidationErrors)
    });
  };

  render = () => {
    const { getValue, setValue, className, ...other } = this.props;

    return (
      <input
        ref="input"
        className={this.getClassName()}
        value={getValue() || ''}
        onChange={(e) => setValue(e.target.value)}
        {...other}
      />
    );
  };
}

ModalInputElement.contextTypes = {
  auth: React.PropTypes.object
};

export default HOC(ModalInputElement);
