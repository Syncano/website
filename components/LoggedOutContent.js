import React, { Component } from 'react';
import Cookies from 'js-cookie';

class LoggedOutContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  componentDidMount() {
    const isUserLoggedIn = Cookies.get('logged_in');

    if (isUserLoggedIn) {
      this.setState({ show: false });
    }
  }

  render() {
    const { children } = this.props;
    const { show } = this.state;

    if (!show) {
      return null;
    }

    return children;
  }
};

export default LoggedOutContent;
