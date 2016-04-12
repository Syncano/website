import React from 'react';
import Formsy from 'formsy-react';

export default React.createClass({
  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    const className = this.showError() ? 'is-invalid' : '';

    return (
      <input
        className={`newsletter-form__field__input ${className}`}
        type="email"
        placeholder="E-mail address"
        onChange={this.changeValue}
      />
    )
  }
});
