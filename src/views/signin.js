import Footer from '../components/shared/footer'
import Header from '../components/shared/header'
import Head from '../components/ui/head'
import Page from '../components/ui/page'
import SignInForm from '../components/shared/auth/signin'

const SignIn = () => (
  <Page>
    <Head>
      <title>Syncano</title>
    </Head>

    <div className='Header'>
      <Header
        title='Good to see you again'
        subtitle='Continue solving unique customer problems, not building and operating backend code.'
        />
    </div>

    <div className='Section u-wrapper'>
      <SignInForm />
    </div>

    <Footer />

    <style jsx> {`
      :global(.AppContainer) {
        background: rgba(244, 246, 248, 1) linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      .Header :global(.PageHead) {
        max-width: 500px;
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
    `} </style>
  </Page>
)

export default SignIn
