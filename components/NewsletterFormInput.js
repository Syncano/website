import React from 'react';
import Formsy from 'formsy-react';

export default React.createClass({
  mixins: [Formsy.Mixin],

  render() {
    const className = this.showError() ? 'is-invalid' : '';

    return (
      <input
        className={`newsletter-form__field__input ${className}`}
        onChange={(event) => this.setValue(event.currentTarget.value)}
        {...this.props}
      />
    );
  }
});
