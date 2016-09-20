import React, { Component, PropTypes } from 'react';
import Cookies from 'js-cookie';

export default (ComposedComponent) => (
  class LoggedInHOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isUserLoggedIn: null
      };
    }

    static childContextTypes = {
      isUserLoggedIn: PropTypes.bool
    };

    getChildContext = () => {
      const { isUserLoggedIn } = this.state;

      return { isUserLoggedIn: isUserLoggedIn };
    };

    componentWillMount() {
      const isUserLoggedIn = Cookies.get('logged_in');

      this.setState({ isUserLoggedIn: isUserLoggedIn ? true : false });
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
);
