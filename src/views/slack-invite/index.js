import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import InputList from '../../components/ui/input-list'

const SlackInvite = ({
  messages, email, sendInvitation
}) => (
  <Page>
    <Head>
      <title>Join Slack- Syncano</title>

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
        title='Join the Community'
        subtitle='Join the Syncano community and chat with other developers. Share ideas, learn, build together or ask us anything!'
        />
    </div>

    <div className='Section u-wrapper'>
      <img src='/static/img/slack-invite/syncano-slack.svg' alt='Syncano plus Slack' />

      <form className='Form' onSubmit={sendInvitation}>
        <InputList errors={messages.get('slack.invite.errors')}>
          <div className='Form__group'>
            <Input {...email} full />
            <Button
              type='submit'
              disabled={messages.has('slack.invite.pending')}
              secondary
              >Send me an invite</Button>
          </div>
        </InputList>

        {messages.has('slack.invite.success') ? (
          <div className='Form__message'>{messages.get('slack.invite.success')}</div>
        ) : ''}
      </form>
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

      .Form {
        text-align: left;
        margin-top: 30px;
      }

      .Form__group {
        display: flex;
      }

      .Form__message {
        color: #25b012;
        margin-top: 30px;
        text-align: center;
      }

      .Form__group > :global(*) + :global(*) {
        margin-left: 15px;
      }

      .Form__group :global(.Button) {
        white-space: nowrap;
      }
    `}</style>
  </Page>
)

SlackInvite.form = {
  formName: 'SlackInviteForm',
  fields: {
    email: {
      required: 'true',
      type: 'email',
      placeholder: 'E-mail address'
    }
  }
}

SlackInvite.init = ({
  stores: {messages},
  services: {slackInvite: {sendInvitation}},
  form: {fields: {email}, submit}
}) => ({
  messages,
  email,
  sendInvitation: e => submit(e, sendInvitation)
})

export default SlackInvite
