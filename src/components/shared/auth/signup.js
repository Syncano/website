import {connect} from 'zefir/utils'
import Button from '../../ui/button'
import Input from '../../ui/input'
import InputList from '../../ui/input-list'
import Style from './components/style'
import SocialButtons from './components/social-buttons'

const SignUpForm = ({email, password, toggleModal, register, messages,social}) => {

return (
  <form className='AuthForm' onSubmit={register}>
    {social && (
      <div className='AuthForm__column AuthForm__column--buttons'>
        <SocialButtons />
      </div>
    )}

    {social && (
      <div className='AuthForm__separator'></div>
    )}

    <div className='AuthForm__column AuthForm__column--form'>
      <InputList errors={messages.get('auth.register')}>
        <Input full {...email} />
        <Input full {...password} />
      </InputList>
      <Button full secondary>Create your account</Button>
    </div>
    <div className='AuthForm__footer'>
      <div>
        By signing up you confirm that you accept our <a href='/#/terms-of-service' target='_blank' rel='noopener noreferrer'>Terms of Use</a>
      </div>

      <div>
        Already a member? <a onClick={() => {
          window.analytics.track('Sign in Website')
          toggleModal('signin')
        }}>Sign in here</a>
      </div>
    </div>

    <Style />
  </form>
)}

SignUpForm.init = ({
  stores: {messages},
  services: {
    ui: {toggleModal},
    auth: {register}
  },
  form: {fields: {email, password}, submit},
  social
}) => ({
  email,
  password,
  toggleModal,
  messages,
  social,
  register: (e) => submit(e, data => {
    if((email.value != '') && (password.value != '')){
      window.analytics.track('Sign up Website Confirmed')
    }
    register(data)
  })
})

SignUpForm.form = {
  formName: 'SignUpForm',
  fields: {
    email: {
      type: 'email',
      placeholder: 'E-mail address...'
    },
    password: {
      type: 'password',
      placeholder: 'Password...'
    }
  }
}

export default connect(SignUpForm)
