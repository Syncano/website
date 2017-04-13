import {connect} from 'zefir/utils'
import Button from '../../../ui/button'
import InputList from '../../../ui/input-list'

const SocialButtons = ({authViaGithub, authViaGoogle, authViaFacebook, messages}) => (
  <div>
    <Button full github onClick={authViaGithub}>Github</Button>
    <Button full google onClick={authViaGoogle}>Google</Button>
    <Button full facebook onClick={authViaFacebook}>Facebook</Button>

    <InputList errors={messages.get('auth.social')} />
  </div>
)

SocialButtons.init = ({
  stores: {messages},
  services: {auth: {socialAuth}}
}) => ({
  messages,
  authViaFacebook: socialAuth.bind(null, 'facebook'),
  authViaGithub: socialAuth.bind(null, 'github'),
  authViaGoogle: socialAuth.bind(null, 'google')
})

export default connect(SocialButtons)
