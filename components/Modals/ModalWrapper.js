import React from 'react';
import Modal from 'react-modal';
import BodyClassName from 'react-body-classname';
import classNames  from 'classnames';

const ModalWrapper = ({ isOpen, children }, { modals }) => {
  const bodyClassName = classNames({
    'has-modal-open': isOpen
  });

  return (
    <BodyClassName className={bodyClassName}>
      <Modal
        className="modal"
        overlayClassName="modal-container"
        isOpen={isOpen}
      >
        <span
          className="modal__close"
          onClick={modals.closeAllModals}
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
};

ModalWrapper.contextTypes = {
  modals: React.PropTypes.object
};

export default ModalWrapper;
