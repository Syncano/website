import Footer from '../components/shared/footer'
import Header from '../components/shared/header'
import Head from '../components/ui/head'
import Page from '../components/ui/page'
import SignUpForm from '../components/shared/auth/signup'

const SignUp = () => (
  <Page>
    <Head>
      <title>Syncano</title>
    </Head>

    <Header
      title='Sign up and get started'
      subtitle='Build more and faster by leveraging existing backend code.'
      />

    <div className='Section u-wrapper'>
      <SignUpForm />
    </div>

    <Footer />

    <style jsx>{`
      :global(.AppContainer) {
        background: rgba(244, 246, 248, 1) linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      .Section {
        max-width: 450px;
        margin-bottom: 30px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          margin-bottom: 90px;
        }
      }
    `}</style>
  </Page>
)

export default SignUp
