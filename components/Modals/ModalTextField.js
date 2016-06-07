import React, { Component } from 'react';
import { HOC } from 'formsy-react';
import classNames  from 'classnames';

class ModalTextField extends Component {
  componentDidMount() {
    const { autofocus } = this.props;

    if (autofocus) {
      setTimeout(() => this.refs.input.focus(), 0);
    }
  };

  getClassName = () => {
    const { showError, className } = this.props;

    return classNames(className, {
      'modal__content_form__input': true,
      'mousetrap': true,
      'is-invalid': (showError())
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

export default HOC(ModalTextField);
