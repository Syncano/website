import React from 'react';
import Formsy from 'formsy-react';
import Radium from 'radium';

export default Radium(React.createClass({

  mixins: [Formsy.Mixin],

  getStyles() {
    return {
      margin: '5px 0',
      maxWidth: 'none',
      '@media (min-width: 992px)': {
        margin: 0,
        maxWidth: 160
      }
    }
  },

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },

  render() {
    let styles = this.getStyles();
    let className = this.showRequired() ? 'required' : this.showError() ? 'has-error' : null;

    return (
      <input
        style={styles}
        className={`form-control ${className}`}
        type="text"
        placeholder={this.props.placeholder}
        onChange={this.changeValue}
        value={this.getValue()}
      />
    );
  }
}));
