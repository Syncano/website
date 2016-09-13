import React, { Component } from 'react';
import Cookies from 'js-cookie';

class LoggedInContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  componentDidMount() {
    const isUserLoggedIn = Cookies.get('logged_in');

    if (isUserLoggedIn) {
      this.setState({ show: true });
    }
  }

  render() {
    const { children } = this.props;
    const { show } = this.state;

    if (show) {
      return children;
    }

    return null;
  }
};

export default LoggedInContent;
