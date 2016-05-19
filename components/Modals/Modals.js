import React from 'react';
import ModalLogIn from './ModalLogIn';
import ModalResetPassword from './ModalResetPassword';
import ModalSignUp from './ModalSignUp';

export const MODALS = ['logIn', 'resetPassword', 'signUp'];

export default () => {
  return (
    <div>
      <ModalLogIn />
      <ModalResetPassword />
      <ModalSignUp />
    </div>
  );
};
