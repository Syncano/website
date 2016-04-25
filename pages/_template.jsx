import React from 'react';
import { TopBar } from '../components';
import 'normalize.css/normalize.css';
import 'styles/styles';

export default ({ children }) => {
  return (
    <div>
      <TopBar />
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
};
