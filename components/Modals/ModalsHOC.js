import React from 'react';

export default (ComposedComponent) => class extends React.Component {
  static displayName = 'ModalsHOC';

  constructor(props) {
    super(props);

    this.state = {
      logInModalIsOpen: false,
      signUpModalIsOpen: false
    };
  };

  static childContextTypes = {
    modals: React.PropTypes.object
  };

  getChildContext = () => {
    return {
      modals: {
        logInModalIsOpen: this.state.logInModalIsOpen,
        signUpModalIsOpen: this.state.signUpModalIsOpen,
        closeAllModals: this.closeAllModals,
        openModal: this.openModal
      }
    };
  };

  closeAllModals = () => {
    this.setState({
      logInModalIsOpen: false,
      signUpModalIsOpen: false
    });
  };

  openModal = (slug) => {
    this.setState({
      logInModalIsOpen: (slug == 'log-in'),
      signUpModalIsOpen: (slug == 'sign-up')
    });
  };

  render() {
    return (
      <ComposedComponent {...this.props} {...this.state} />          
    );
  };
};
