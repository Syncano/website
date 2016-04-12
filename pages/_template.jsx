import React from 'react';
import { TopBar } from '../components';
import 'normalize.css/normalize.css';
import 'styles/styles';

export default (props) => (
  <div className="wrapper">
    <TopBar pathname={props.location.pathname} />
    {props.children}
  </div>
);
