import {connect} from 'zefir/utils'
import Button from '../../ui/button'
import Input from '../../ui/input'
import Style from './style'

const SignInForm = ({
  services: {ui: {toggleModal}},
  form: {fields: {email, password}}
}) => (
  <div className='AuthForm'>
    <div className='AuthForm__column AuthForm__column--buttons'>
      <Button full github>Github</Button>
      <Button full google>Google</Button>
      <Button full facebook>Facebook</Button>
    </div>
    <div className='AuthForm__separator' />
    <div className='AuthForm__column AuthForm__column--form'>
      <Input full {...email} />
      <Input full {...password} />
      <Button full secondary>Sign in</Button>
    </div>
    <div className='AuthForm__footer'>
      <div>
        By signing in you confirm that you accept our <a href='/#/terms-of-service' target='_blank' rel='noopener noreferrer'>Terms of Use</a>
      </div>

      <div>
        Don't have an account yet? <a onClick={() => toggleModal('signup')}>Sign up here</a>
      </div>
    </div>

    <Style />
  </div>
)

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
