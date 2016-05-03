import React from 'react';
import { Modals, ModalsHOC, TopBar } from '../components';
import 'normalize.css/normalize.css';
import 'styles/styles';
import 'components/CodePreview/_theme-twilight';

const Template = ({ children }, { modals }) => {
  return (
    <div>
      <TopBar />
      <div className="wrapper">
        {children}
      </div>
      <Modals />
    </div>
  );
};

Template.contextTypes = {
  modals: React.PropTypes.object
};

export default ModalsHOC(Template);
