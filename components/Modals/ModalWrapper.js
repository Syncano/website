import React, { Component } from 'react';
import Modal from 'react-modal';
import BodyClassName from 'react-body-classname';
import classNames  from 'classnames';
import { mouseTrap } from 'react-mousetrap';

class ModalWrapper extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    this.handleESCShortcutBind(nextContext);
  };

  handleESCShortcutBind(nextContext) {
    const { bindShortcut, unbindShortcut, modalName } = this.props;
    const isOpen = this.getOpenState();
    const nextContextModalObject = nextContext.modals[modalName];

    if (isOpen !== nextContextModalObject.isOpen) {
      nextContextModalObject.isOpen && bindShortcut('esc', nextContextModalObject.close);
      !nextContextModalObject.isOpen && unbindShortcut('esc');
    }
  };
  
  getBodyClassName() {
    const bodyClassName = classNames({
      'has-modal-open': this.getOpenState()
    });

    return bodyClassName;
  };

  getOpenState() {
    const { modalName } = this.props;
    const { modals } = this.context;

    return modals[modalName].isOpen;
  };

  render() {
    const { modals } = this.context;
    const { children } = this.props;

    return (
      <BodyClassName className={this.getBodyClassName()}>
        <Modal
          className="modal"
          overlayClassName="modal-container"
          isOpen={this.getOpenState()}
        >
        <span
          className="modal__close"
          onClick={modals.closeAll}
        >
          <img
            src={require('./images/close.svg')}
            alt="close"
          />
          <img
            className="small"
            src={require('./images/close-small.svg')}
            alt="close"
          />
        </span>
          {children}
        </Modal>
      </BodyClassName>
    );
  }
}

ModalWrapper.contextTypes = {
  modals: React.PropTypes.object
};

export default mouseTrap(ModalWrapper);
