import React, { Component } from 'react';
import { HOC } from 'formsy-react';
import classNames from 'classnames';

class FormInputElement extends Component {
  componentDidMount() {
    const { autofocus } = this.props;

    if (autofocus) {
      setTimeout(() => this.refs.input.focus(), 0);
    }
  };

  getClassName = () => {
    const { element, showError } = this.props;
    const { displayValidationErrors } = this.context;
    const baseClassName = element === 'textarea' ? 'form__textarea' : 'form__input';

    return classNames({
      'form__input': !element,
      'form__textarea': element === 'textarea',
      'is-invalid': (showError() && displayValidationErrors)
    });
  };

  render = () => {
    const { element, getValue, setValue } = this.props;

    if (element === 'textarea') {
      return (
        <textarea
          ref="input"
          className={this.getClassName()}
          value={getValue() || ''}
          onChange={(e) => setValue(e.target.value)}
          {...this.props}
        />
      );
    }

    return (
      <input
        ref="input"
        className={this.getClassName()}
        value={getValue() || ''}
        onChange={(e) => setValue(e.target.value)}
        {...this.props}
      />
    );
  };
};

FormInputElement.contextTypes = {
  displayValidationErrors: React.PropTypes.bool
};

export default HOC(FormInputElement);
