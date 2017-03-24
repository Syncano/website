import React from 'react';
import BlurPageDialog from './BlurPageDialog';

class Dialog extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    const styles = {
      dialogStyle: {
        position: 'fixed',
        top: '50%',
        bottom: '50%',
        left: '50%',
        height: '80%',
        width: '70%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9998,
        background: '#fff',
        overflowY: 'auto'
      },
      closeButtonIcon: {
        fontSize: 24,
        color: '#666666',
        cursor: 'pointer',
        position: 'fixed',
        right: 260,
        top: '10%',
        zIndex: 9999
      }
    };
    const { children, onRequestClose } = this.props;

    return (
      <div>
        <button
          style={styles.closeButtonIcon}
          onClick={this.context.onRequestClose}
        >
          x
        </button>
        <div style={styles.dialogStyle}>
          {children}
        </div>
        <BlurPageDialog onRequestClose={onRequestClose} />
      </div>
    );
  }
}

Dialog.contextTypes = {
  onRequestClose: React.PropTypes.func
};

export default Dialog;
