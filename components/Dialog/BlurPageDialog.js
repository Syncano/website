import React from 'react';

const DialogBlurPage = React.createClass({
  getStyles() {
    return {
      blurStyle: {
        position: 'fixed',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 9997,
        background: 'rgba(0, 0, 0, 0.8)',
        overflow: 'hidden'
      }
    };
  },

  render() {
    const styles = this.getStyles();

    return (
      <div
        style={styles.blurStyle}
      />
    );
  }
});

export default DialogBlurPage;
