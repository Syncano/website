import React from 'react';
import ModalLogIn from './ModalLogIn';
import ModalSignUp from './ModalSignUp';

export const MODALS = ['logIn', 'signUp'];

export default () => {
  return (
    <div>
      <ModalLogIn />
      <ModalSignUp />
    </div>
  );
};
