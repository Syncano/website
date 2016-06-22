import React, { Component } from 'react';
import { HOC } from 'formsy-react';
import classNames from 'classnames';

class FormTextarea extends Component {
  componentDidMount() {
    const { autofocus } = this.props;

    if (autofocus) {
      setTimeout(() => this.refs.input.focus(), 0);
    }
  };

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
        ref="input"
        className={this.getClassName()}
        value={getValue() || ''}
        onChange={(e) => setValue(e.target.value)}
        {...this.props}
      />
    );
  };
};

export default HOC(FormTextarea);
