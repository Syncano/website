import React from 'react';
import ModalLogIn from './ModalLogIn';
import ModalResetPassword from './ModalResetPassword';
import ModalSignUp from './ModalSignUp';
import ModalSuggestFeature from './ModalSuggestFeature';
import ModalSupportTicket from './ModalSupportTicket';

export const MODALS = ['logIn', 'resetPassword', 'signUp', 'suggestFeature', 'supportTicket'];

export default () => {
  return (
    <div>
      <ModalLogIn />
      <ModalResetPassword />
      <ModalSignUp />
      <ModalSuggestFeature />
      <ModalSupportTicket />
    </div>
  );
};
