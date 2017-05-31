import {connect} from 'zefir/utils'
import Button from '../../ui/button'
import Input from '../../ui/input'
import InputList from '../../ui/input-list'
import Style from './components/style'

const ForgotPasswordForm = ({
  email, password, toggleSignInModal, resetPassword, messages
}) => (
  <div className='AuthForm'>
    <form className='AuthForm__column AuthForm__column--form' onSubmit={resetPassword}>
      <InputList errors={messages.get('auth.forgot-password.errors')}>
        <Input full {...email} />
      </InputList>
      <Button
        full
        secondary
        disabled={messages.has('auth.forgot-password.pending')}
        >Send instructions</Button>

      {messages.has('auth.forgot-password.success') ? (
        <div className='AuthForm__message'>{messages.get('auth.forgot-password.success')}</div>
      ) : ''}
    </form>
    <div className='AuthForm__footer'>
      <div>
        Remember your password? <a onClick={toggleSignInModal}>Sign in here</a>
      </div>
    </div>

    <Style />
  </div>
)

ForgotPasswordForm.init = ({
  stores: {messages},
  services: {
    ui: {toggleModal},
    auth: {resetPassword}
  },
  form: {fields: {email}, submit}
}) => ({
  email,
  toggleModal,
  messages,
  toggleSignInModal: () => toggleModal('signin'),
  resetPassword: (e) => submit(e, resetPassword)
})

ForgotPasswordForm.form = {
  formName: 'ForgotPasswordForm',
  fields: {
    email: {
      type: 'email',
      placeholder: 'E-mail address...'
    }
  }
}

export default connect(ForgotPasswordForm)
