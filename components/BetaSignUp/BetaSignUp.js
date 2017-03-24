import React from 'react';

import CloseButton from '../CloseButton';

const BetaSignUp = React.createClass({
  getStyles() {
    return {
      banner: {
        boxSizing: 'border-box',
        background: 'rgb(0, 0, 0)',
        height: 60,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        fontSize: 18,
        color: 'rgb(155, 155, 155)',
        position: 'fixed',
        width: '100%',
        zIndex: '3'
      },
      ascend: {
        color: '#fff',
        letterSpacing: 2,
        display: 'flex',
        alignItems: 'center'
      },
      toolbarGroup: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 12px'
      },
      betaBadge: {
        color: '#fff',
        fontWeight: 600,
        backgroundColor: 'red',
        padding: '5px 7px',
        borderRadius: 3,
        fontSize: 16,
        marginRight: 5
      },
      topToolbar: {
        background: '#000',
        height: 60,
        padding: 0,
        justifyContent: 'center',
        fontSize: 18,
        color: '#9b9b9b'
      },
      logo: {
        height: 20
      },
      toolbarList: {
        padding: '0 12px'
      },
      applyBeta: {
        color: '#fff',
        borderBottom: '1px solid #fff',
        cursor: 'pointer'
      }
    };
  },

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.topToolbar && styles.banner}>
        <CloseButton />
        <div style={styles.toolbarList && styles.toolbarGroup}>
          Get ready for
        </div>
        <div style={styles.toolbarList && styles.toolbarGroup}>
          <img
            style={styles.logo}
            src={require('./syncano-logo.svg')}
            alt="Syncano Logo"
          />
        </div>
        <div style={{ ...styles.toolbarList && styles.ascend }}>
          ASCEND
        </div>
        <div style={styles.toolbarList && styles.toolbarGroup}>
        <span style={styles.betaBadge}>Beta</span>
        </div>
        <div style={styles.toolbarList && styles.toolbarGroup}>
          Get a sneak peek before anyone else:
        </div>
        <div style={styles.toolbarList && styles.toolbarGroup}>
          <div
            style={styles.applyBeta}
            onClick={() => this.context.onApplyBeta()}
          >
            Apply for beta access
          </div>
        </div>

      </div>
    );
  }
});

BetaSignUp.contextTypes = {
  onApplyBeta: React.PropTypes.func
};

export default BetaSignUp;
