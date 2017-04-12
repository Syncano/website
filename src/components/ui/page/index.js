import FontAwesome from './styles/font-awesome'
import Normalize from './styles/normalize'
import Modal from '../modal'
import ScrollManager from '../../ui/scroll-manager'
import SignUpForm from '../../shared/auth/signup'
import SignInForm from '../../shared/auth/signin'

export default ({children}) => (
  <div>
    {children}
    {/* <ScrollManager /> */}
    <FontAwesome />
    <Normalize />

    <Modal
      name='signup'
      title='Sign up and get started'
      subtitle='Build more and faster by leveraging existing backend code.'
      >
      <SignUpForm />
    </Modal>

    <Modal
      name='signin'
      title='Good to see you again'
      subtitle='Continue solving unique customer problems, not building and operating backend code.'
      >
      <SignInForm />
    </Modal>

    <style jsx global>{`
      body,
      h1, h2, h3, h4, h5, h6,
      blockquote, p, pre,
      dl, dd, ol, ul,
      figure,
      hr,
      fieldset, legend {
        margin:  0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        line-height: 1.25;
      }

      html {
        font-family: Roboto;
      }

      .AppContainer {
        overflow: hidden;
      }

      /* = WRAPPER
       * ==================================================================== */
      .u-wrapper {
        padding-left: 30px;
        padding-right: 30px;
        margin-left: auto;
        margin-right: auto;
      }

      /* = HEADINGS
       * ==================================================================== */
      .u-title {
        color: #0b0f15;
        font-weight: 300;
        font-size: 28px;
        line-height: 36px;
      }

      .u-title + .u-subtitle {
        margin-top: 15px;
      }

      @media screen and (min-width: 560px) {
        .u-title {
          font-size: 48px;
          line-height: 48px;
        }
      }

      .u-subtitle {
        color: #7a7f87;
        font-weight: 300;
        font-size: 20px;
        line-height: 32px;
      }

      @media screen and (min-width: 560px) {
        .u-subtitle {
          font-size: 24px;
        }
      }

      /* = TEXT-ALIGN
       * ==================================================================== */
      .u-ta-c {
        text-align: center;
      }

      .u-ta-r {
        text-align: right;
      }

      a {
        color: #2c59c5;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
)
