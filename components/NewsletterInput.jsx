import React from 'react';
import Formsy from 'formsy-react';

export default React.createClass({

  mixins: [Formsy.Mixin],

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    let className = this.showRequired() ? 'required' : this.showError() ? 'has-error' : null;

    return (
      <input className={`form-control ${className}`} type="text" placeholder={this.props.placeholder} onChange={this.changeValue} value={this.getValue()}/>
    );
  }
});