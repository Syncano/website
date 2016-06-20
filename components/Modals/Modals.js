import React from 'react';
import ModalLogIn from './ModalLogIn';
import ModalResetPassword from './ModalResetPassword';
import ModalSignUp from './ModalSignUp';
import ModalSuggestFeature from './ModalSuggestFeature';

export const MODALS = ['logIn', 'resetPassword', 'signUp', 'suggestFeature'];

export default () => {
  return (
    <div>
      <ModalLogIn />
      <ModalResetPassword />
      <ModalSignUp />
      <ModalSuggestFeature />
    </div>
  );
};
