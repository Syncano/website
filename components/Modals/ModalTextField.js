import React, { Component } from 'react';
import { HOC } from 'formsy-react';
import classNames  from 'classnames';

class ModalTextField extends Component {
  getClassName = () => {
    const { showError, className } = this.props;

    return classNames(className, {
      'modal__content_form__input': true,
      'mousetrap': true,
      'is-invalid': (showError())
    });
  };

  componentDidMount() {
    const { autofocus } = this.props;

    if (autofocus) {
      setTimeout(() => this.refs.input.focus(), 0);
    }
  };

  render = () => {
    const { getValue, setValue } = this.props;

    return (
      <input
        {...this.props}
        ref="input"
        className={this.getClassName()}
        value={getValue() || ''}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  };
}

export default HOC(ModalTextField);
