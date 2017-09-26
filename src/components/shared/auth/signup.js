import {connect} from 'zefir/utils'
import {action} from 'mobx'
import Button from '../../ui/button'
import Input from '../../ui/input'
import InputList from '../../ui/input-list'
import Style from './components/style'
import SocialButtons from './components/social-buttons'
import Quotes from './components/quotes'
import Footer from './components/footer'

const SignUpForm = ({
  email, password, toggleModal, register, messages, withSocialButtons,
  withQuotes, ui
}) => (
    <form
      className={`
        AuthForm
        ${withQuotes ? 'AuthForm--with-quotes' : ''}
      `}
      onSubmit={register}
    >
      {ui.flags.get('auth.active-quote')}
      {withQuotes && (
        <div className='AuthForm__column AuthForm__column--quotes'>
          <Quotes />
        </div>
      )}

      {withSocialButtons && (
        <div className='AuthForm__column AuthForm__column--buttons'>
          <SocialButtons />
        </div>
      )}

      {withSocialButtons && (
        <div className='AuthForm__separator' />
      )}

      <div className='AuthForm__column AuthForm__column--form'>
        <InputList errors={messages.get('auth.register')}>
          <Input full {...email} />
          <Input full {...password} />
        </InputList>
        <div className="AuthForm__submit">
          <Button full secondary>Create your account</Button>
        </div>

        {withQuotes && (
          <Footer toggleModal={toggleModal} smallSpacing/>
        )}
      </div>

      {!withQuotes && (
        <Footer toggleModal={toggleModal} />
      )}
      <Style />
    </form>
  )

SignUpForm.init = ({
  stores: {messages, ui},
  services: {
    ui: {toggleModal},
    auth: {register}
  },
  form: {fields: {email, password}, submit},
  withSocialButtons,
  withQuotes
}) => ({
  email,
  password,
  toggleModal,
  messages,
  withSocialButtons,
  withQuotes,
  ui,
  register: (e) => submit(e, data => {
    if (email.value !== '' && password.value !== '') {
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
