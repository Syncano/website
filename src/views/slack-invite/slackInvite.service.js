import {action} from 'mobx'

const INVITATION_URL = 'https://api.syncano.io/v1/instances/black-dew-3304/webhooks/p/9659a5f1693cf77733f300f1da949d3a9865f5bc/slack_invite/'
const MESSAGES = {
  already_invited: 'Uh oh! It looks like that email address has already been invited. If you think this is an error, please send a note to support@syncano.io.',
  invalid_email: 'Invalid email',
  invite_sent: 'Woo hoo!  Your invite is on it\'s way. Welcome to the community!',
  already_in_team: 'We can\'t send you another invite - you are already a member!'
}

export default class {
  @action.bound async sendInvitation ({email}) {
    const {request} = this.services
    const {messages} = this.stores

    messages.set('slack.invite.pending')
    messages.delete('slack.invite.success')
    messages.delete('slack.invite.errors')

    try {
      const res = await request.post(INVITATION_URL, {email})
      const {ok, error} = JSON.parse(res.data.result.stdout)

      if (!ok) {
        messages.set('slack.invite.errors', {email: MESSAGES[error]})
      } else {
        messages.set('slack.invite.success', MESSAGES.invite_sent)
      }
    } catch (e) {}

    messages.delete('slack.invite.pending')
  }
}
