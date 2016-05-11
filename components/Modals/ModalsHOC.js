import React, { Component } from 'react';
import _ from 'lodash';
import { MODALS } from './Modals';

export default (ComposedComponent) => (
  class ModalsHOC extends Component {
    constructor(props) {
      super(props);

      this.state = this.getInitialModalsState();
    };

    static childContextTypes = {
      modals: React.PropTypes.object
    };

    getChildContext = () => {
      const childContext = {...this.state, ...this.getModalMethods()};

      return { modals: childContext };
    };

    closeAll = () => {
      const newState = _.merge({}, this.state);

      _.forEach(newState, (modal) => {
        newState[modal.name].isOpen = false
      });

      this.setState(newState);
    };

    closeModal = (modalName) => {
      const newState = _.merge({}, this.state[modalName], { isOpen: false });

      this.setState({ [modalName]: newState });
    };

    openModal = (modalName) => {
      const newState = _.merge({}, this.state[modalName], { isOpen: true });

      this.closeAll();
      this.setState({ [modalName]: newState });
    };

    getInitialModalsState = () => {
      const initialState = {};

      _.forEach(MODALS, (modalName) => _.merge(initialState, this.getModalInitialState(modalName)));

      return initialState;
    };

    getModalMethods = () => ({
      closeAll: this.closeAll
    });

    getModalInitialState = (modalName) => ({
      [modalName]: {
        name: modalName,
        isOpen: false,
        open: () => this.openModal(modalName),
        close: () => this.closeModal(modalName)
      }
    });

    render() {
      return (
        <ComposedComponent {...this.props} {...this.state} />
      );
    };
  }
);
