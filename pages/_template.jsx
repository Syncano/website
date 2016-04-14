import React from 'react';
import { TopBar } from '../components';
import 'normalize.css/normalize.css';
import 'styles/styles';

export default ({children}) => (
  <div className="wrapper">
    <TopBar />
    {children}
  </div>
);
