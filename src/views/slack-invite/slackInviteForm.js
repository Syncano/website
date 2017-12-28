import { connect } from 'zefir/utils'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import InputList from '../../components/ui/input-list'


const SlackInviteForm = ({ email, sendInvitation, messages }) => (
  <div>
    <form className='Form' onSubmit={sendInvitation}>
      <InputList errors={messages.get('slack.invite.errors')}>
        <div className='Form__group'>
          <Input {...email} full />
          <Button
            type='submit'
            disabled={messages.has('slack.invite.pending')}
            secondary
          >
            Send me an invite
          </Button>
        </div>
      </InputList>
      {messages.has('slack.invite.success') ? (
        <div className='Form__message'>{messages.get('slack.invite.success')}</div>
      ) : ''}
    </form>

    <style jsx>{`
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
  </div>
)

SlackInviteForm.form = {
  formName: 'SlackInviteFormForm',
  fields: {
    email: {
      required: 'true',
      type: 'email',
      placeholder: 'E-mail address'
    }
  }
}

SlackInviteForm.init = ({
  stores: { messages },
  services: { slackInvite: { sendInvitation } },
  form: { fields: { email }, submit }
}) => ({
  messages,
  email,
  sendInvitation: (e) => submit(e, sendInvitation)
})

export default connect(SlackInviteForm)
