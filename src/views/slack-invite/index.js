import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import SlackInviteForm from './slackInviteForm'

const SlackInvite = () => (
  <Page>
    <Head>
      <title>Syncano - Join Community</title>
      <meta name='description' content='Join the Syncano community and chat with other developers. Share ideas, learn, build together or ask us anything!' />

      <meta property='og:image' content='https://www.syncano.io/static/img/slack-invite/og-image.png' />
      <meta property='og:title' content='Get your Syncano Slack community invite' />
      <meta property='og:url' content='https://www.syncano.io/slack-invite/' />
      <meta property='og:site_name' content='Get your Syncano Slack community invite' />
      <meta property='og:type' content='website' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@Syncano' />
      <meta name='twitter:title' content='Get your Syncano Slack community invite' />
      <meta name='twitter:description' content='Join the Syncano community and chat with other developers. Share ideas, learn, build together or ask us anything!' />
      <meta name='twitter:image' content='https://www.syncano.io/static/img/slack-invite/twitter-image.png' />
    </Head>

    <div className='Header'>
      <Header
        before={(
          <div className='Header__img'>
            <img src='/static/img/slack-invite/syncano-slack.svg' alt='Syncano plus Slack' />
          </div>
        )}
        title='Join the Community'
        subtitle='Join the Syncano community and chat with other developers. Share ideas, learn, build together or ask us anything!'
      />
    </div>
    <div className="Section u-wrapper">
      <SlackInviteForm />
    </div>
    <Footer />

    <style jsx>{`
      .Section {
        max-width: 670px;
        margin-bottom: 30px;
        text-align: center;
      }

      @media screen and (min-width: 560px) {
        .Section {
          margin-bottom: 60px;
        }
      }

      @media screen and (min-width: 970px) {
        .Section {
          margin-bottom: 90px;
        }
      }

      .Header :global(.PageHead__subtitle) {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }

      .Header__img {
        text-align: center;
        margin-bottom: 30px;
      }
    `}</style>
  </Page>
)

export default SlackInvite
