import React from 'react';

export default (ComposedComponent) => class extends React.Component {
  static displayName = 'ModalsHOC';

  constructor(props) {
    super(props);

    this.state = {
      logInModalIsOpen: false
    };
  };

  static childContextTypes = {
    modals: React.PropTypes.object
  };

  getChildContext = () => {
    return {
      modals: {
        logInModalIsOpen: this.state.logInModalIsOpen,
        openLogInModal: this.openLogInModal,
        closeLogInModal: this.closeLogInModal
      }
    };
  };

  openLogInModal = () => {
    this.setState({ logInModalIsOpen: true });
  };

  closeLogInModal = () => {
    this.setState({ logInModalIsOpen: false });
  };
  
  render() {
    return (
      <ComposedComponent {...this.props} {...this.state} />          
    );
  };
};
