import React from 'react';
import { Modals, ModalsHOC, TopBar } from '../components';
import 'normalize.css';
import 'styles/styles';

const Template = ({ children }) => {
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

export default ModalsHOC(Template);
