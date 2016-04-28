import React from 'react';
import { Modals, ModalsHOC, TopBar } from '../components';
import 'normalize.css/normalize.css';
import 'styles/styles';

const Template = (props, { modals }) => {
  return (
    <div>
      <Modals />
      <TopBar />
      <div className="wrapper">
        {props.children}
      </div>
    </div>
  );
};

Template.contextTypes = {
  modals: React.PropTypes.object
};

export default ModalsHOC(Template);
