import React, { Component } from 'react';
import Modal from 'react-modal';
import BodyClassName from 'react-body-classname';
import classNames  from 'classnames';
import { mouseTrap } from 'react-mousetrap';
import _ from 'lodash';
const isBrowser = typeof window !== 'undefined';

class ModalWrapper extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    this.handleESCShortcutBind(nextContext);
  };

  handleESCShortcutBind(nextContext) {
    const { bindShortcut, unbindShortcut } = this.props;
    const { modals } = this.context;
    const nextContentModals = nextContext.modals;
    const contextIsOpen = this.getModalsOpenState(modals);
    const nextContextIsOpen = this.getModalsOpenState(nextContentModals);

    if (contextIsOpen !== nextContextIsOpen) {
      unbindShortcut('esc');
      nextContextIsOpen && bindShortcut('esc', nextContentModals.closeAll);
    }
  };
  
  getBodyClassName() {
    const bodyClassName = classNames({
      'has-modal-open': this.getCurrentOpenState()
    });

    return bodyClassName;
  };

  getModalsOpenState(modals) {
    return _.some(modals, { isOpen: true });
  };

  getCurrentOpenState() {
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
          className="modal-scroll"
          overlayClassName="modal-overlay"
          isOpen={this.getCurrentOpenState()}
        >
          <div className="modal">
            <div className="modal-box">
              <span
                className="modal-box__close"
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
            </div>
          </div>
        </Modal>
      </BodyClassName>
    );
  };
};

ModalWrapper.contextTypes = {
  modals: React.PropTypes.object
};

export default isBrowser ? mouseTrap(ModalWrapper) : ModalWrapper;
