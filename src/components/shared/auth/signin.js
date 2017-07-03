import {connect} from 'zefir/utils'
import Button from '../../ui/button'
import Input from '../../ui/input'
import InputList from '../../ui/input-list'
import Style from './components/style'
import SocialButtons from './components/social-buttons'

const SignInForm = ({
  email, password, toggleModal, login, messages
}) => (
  <div className='AuthForm AuthForm--login'>
    <div className='AuthForm__column AuthForm__column--buttons'>
      <SocialButtons />
    </div>
    <div className='AuthForm__separator' />
    <form className='AuthForm__column AuthForm__column--form' onSubmit={login}>
      <InputList errors={messages.get('auth.login')}>
        <Input full {...email} />
        <Input full {...password} />
      </InputList>
      <div className="AuthForm__submit">
        <Button full secondary>Sign in</Button>
      </div>
    </form>
    <div className='AuthForm__footer'>
      <div>
        By signing in you confirm that you accept our <a href='/#/terms-of-service' target='_blank' rel='noopener noreferrer'>Terms of Use</a>
      </div>

      <div>
        <p>
          Don't have an account yet? <a onClick={() => {
            window.analytics.track('Sign up Website')
            toggleModal('signup')
          }}>Sign up here</a> or <a onClick={() => toggleModal('forgot-password')}>reset password</a>
        </p>
      </div>
    </div>

    <Style />
  </div>
)

SignInForm.init = ({
  stores: {messages},
  services: {
    ui: {toggleModal},
    auth: {login}
  },
  form: {fields: {email, password}, submit}
}) => ({
  email,
  password,
  toggleModal,
  messages,
  login: (e) => submit(e, data => {
    window.analytics.track('Sign in Website Confirmed')
    login(data)
  })
})

SignInForm.form = {
  formName: 'SignInForm',
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

export default connect(SignInForm)
