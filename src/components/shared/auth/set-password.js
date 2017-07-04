import {connect} from 'zefir/utils'
import Button from '../../ui/button'
import Input from '../../ui/input'
import InputList from '../../ui/input-list'
import Style from './components/style'

const SetPasswordForm = ({
  fields, setPassword, messages
}) => (
  <div className='AuthForm'>
    <form className='AuthForm__column AuthForm__column--form' onSubmit={setPassword}>
      <InputList errors={messages.get('auth.set-password.errors')}>
        <Input full {...fields.email} />
        <Input full {...fields.password} />
      </InputList>

      <div className='AuthForm__submit'>
        <Button
          full
          secondary
          disabled={messages.has('auth.set-password.pending')}
          >Create account</Button>
      </div>

      {messages.has('auth.set-password.success') ? (
        <div className='AuthForm__message'>{messages.get('auth.set-password.success')}</div>
      ) : ''}
    </form>

    <Style />
  </div>
)

SetPasswordForm.init = ({
  stores: {messages, ui},
  services: {
    ui: {toggleModal},
    auth: {setPassword}
  },
  form: {fields, submit}
}) => ({
  fields,
  toggleModal,
  messages,
  data: ui.modalData,
  toggleSignInModal: () => toggleModal('signin'),
  setPassword: (e) => submit(e, setPassword)
})

SetPasswordForm.form = {
  formName: 'SetPasswordForm',
  fields: ({stores: {ui: {modalData}}}) => {
    return {
      email: {
        type: 'email',
        placeholder: 'E-mail address...',
        readOnly: true,
        disabled: true,
        value: modalData.email
      },
      account_key: {
        value: modalData.account_key
      },
      password: {
        type: 'password',
        placeholder: 'Password...'
      }
    }
  }
}

export default connect(SetPasswordForm)
