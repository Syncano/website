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
        openLogInModal: this.openLogInModal,
        openSignUpModal: this.openSignUpModal,
        closeAllModals: this.closeAllModals
      }
    };
  };

  closeAllModals = () => {
    this.setState({
      logInModalIsOpen: false,
      signUpModalIsOpen: false
    });
  };

  openLogInModal = () => {
    this.closeAllModals();
    this.setState({ logInModalIsOpen: true });
  };

  openSignUpModal = () => {
    this.closeAllModals();
    this.setState({ signUpModalIsOpen: true });
  };
  
  render() {
    return (
      <ComposedComponent {...this.props} {...this.state} />          
    );
  };
};
