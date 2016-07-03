import React, { Component } from 'react';
import _ from 'lodash';
import { MODALS } from './Modals';

export default (ComposedComponent) => (
  class ModalsHOC extends Component {
    constructor(props) {
      super(props);

      this.state = this.getInitialModalsState();
    };

    static contextTypes = {
      router: React.PropTypes.object
    };

    static childContextTypes = {
      modals: React.PropTypes.object
    };

    getChildContext = () => {
      const childContext = {...this.state, ...this.getModalMethods()};

      return { modals: childContext };
    };

    closeAll = (updateRoute = true) => {
      const newState = _.merge({}, this.state);

      _.forEach(newState, (modal) => {
        newState[modal.name].isOpen = false
      });

      !_.isBoolean(updateRoute) && this.handleUpdateRoute();
      this.setState(newState);
    };

    closeModal = (modalName) => {
      const newState = _.merge({}, this.state[modalName], { isOpen: false });

      this.handleUpdateRoute();
      this.setState({ [modalName]: newState });
    };

    openModal = (modalName) => {
      const newState = _.merge({}, this.state[modalName], { isOpen: true });

      this.closeAll(false);
      this.setState({ [modalName]: newState });
    };

    handleUpdateRoute = () => {
      const { router } = this.context;
      const { pathname, query, state } = this.props.location;

      router.push({
        query: _.omit(query, MODALS),
        pathname,
        state
      });
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
