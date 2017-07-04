import {connect} from 'zefir/utils'
import Button from '../../../ui/button'
import InputList from '../../../ui/input-list'
import Grid from '../../../ui/grid'

const SocialButtons = ({authViaGithub, authViaGoogle, authViaFacebook, messages}) => (
  <div>
    <div className='Join'>
      <div>
        <Button full github type='button' onClick={authViaGithub}>
          <i className='fa fa-github' />
          <span className='Text'>Github</span>
        </Button>
      </div>
      <div>
        <Button full google type='button' onClick={authViaGoogle}>
          <i className='fa fa-google' />
          <i className='fa fa-plus' />
          <span className='Text'>Google</span>
        </Button>
      </div>
      <div>
        <Button full facebook type='button' onClick={authViaFacebook}>
          <i className='fa fa-facebook' />
          <span className='Text'>Facebook</span>
        </Button>
      </div>
    </div>

    <InputList errors={messages.get('auth.social')} />

    <style jsx>{`
      .fa-plus {
        font-size: 12px;
        vertical-align: middle;
        margin-left: 2px;
      }

      .Join {
        display: flex;
        margin-left: -10px;
      }

      .Join > * {
        width: 100%;
        padding-left: 10px;
      }

      .Text {
        display: none;
        margin-left: 8px;
      }

      @media screen and (min-width: 759px) {
        .Join {
          flex-wrap: wrap;
          margin-left: 0;
        }

        .Join > * {
          padding-left: 0;
        }

        .Join > * + * {
          margin-top: 17px;
        }

        .Text {
          display: inline;
        }
      }
    `}</style>
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
