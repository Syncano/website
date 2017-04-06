import {connect} from 'zefir/utils'
import Button from '../button'
import Input from '../input'

const SignInForm = ({
  services: {ui: {toggleModal}},
  form: {fields: {email, password}}
}) => (
  <div className='SignUp'>
    <div className='SignUp__column SignUp__column--buttons'>
      <Button full github>Github</Button>
      <Button full google>Google</Button>
      <Button full facebook>Facebook</Button>
    </div>
    <div className='SignUp__separator' />
    <div className='SignUp__column SignUp__column--form'>
      <Input full {...email} />
      <Input full {...password} />
      <Button full secondary>Sign in</Button>
    </div>
    <div className='SignUp__footer'>
      <div>
        By signing in you confirm that you accept our <a href=''>Terms of Use</a>
      </div>

      <div>
        No account yet? <a onClick={() => toggleModal('signup')}>Sign up here</a>
      </div>
    </div>
    <style jsx>{`
      .SignUp {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
      }

      .SignUp__column > :global(*) + :global(*) {
        margin-top: 15px;
      }

      .SignUp__separator {
        border-top: 1px dashed rgba(141, 146, 153, .25);
        width: 100%;
        margin-top: 35px;
        margin-bottom: 34px;
        position: relative;
      }

      .SignUp__separator::after {
        content: 'or';
        position: absolute;
        top: 50%;
        margin-top: -15px;
        margin-left: -10px;
        left: 50%;
        font-size: 16px;
        text-align: center;
        color: rgba(122, 127, 135, .5);
        padding: 3px;
        background-color: #fff;
      }

      .SignUp__footer {
        flex: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 14px;
        color: #8d9299;
        margin-top: 30px;
      }

      .SignUp__footer a {
        font-weight: 500;
        color: #2c59c5;
        text-decoration: none;
      }

      @media screen and (max-width: 599px) {
        .SignUp__column {
          flex: 1 0 100%;
        }
      }

      @media screen and (min-width: 600px) {
        .SignUp {
          display: flex;
          margin-top: 50px;
        }

        .SignUp__separator {
          border-left: 1px dashed rgba(141, 146, 153, .25);
          border-top: none;
          margin: 0;
          margin-left: 35px;
          margin-right: 34px;
          width: auto;
        }

        .SignUp__separator::after {
          content: 'or';
          position: absolute;
          margin-left: 0;
          top: 50%;
          margin-top: -15px;
          left: -11px;
          font-size: 16px;
          text-align: center;
          color: rgba(122, 127, 135, .5);
          padding: 3px;
          background-color: #fff;
        }

        .SignUp__column--buttons {
          width: 240px;
        }

        .SignUp__column--form {
          flex: 1;
        }

        .SignUp__footer {
          margin-top: 50px;
        }
      }
    `}</style>
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
