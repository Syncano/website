import axios from 'axios'
import {connect} from 'zefir/utils'
import Button from '../../../components/ui/button'
import Input from '../../../components/ui/input'
import InputList from '../../../components/ui/input-list'
import Style from '../../../components/shared/auth/components/style'
import Quotes from '../../../components/shared/auth/components/quotes'

const addIntercomLead = ({ email, env, customAttributes = {} }) => {
  axios.post('https://dry-wave-5153.syncano.space/intercom-add-lead/add_lead/', {
    env,
    email,
    custom_attributes: customAttributes
  });
}

const BookMeetingForm = ({
  email, name, company, toggleModal, login, messages, addLead
}) => (
  <div className='AuthForm AuthForm--login'>
    <div className='AuthForm__column AuthForm__column--quotes'>
      <Quotes />
    </div>
    <div className='AuthForm__column AuthForm__column--form'>
      <form id='enterprise-form' className='AuthForm__column AuthForm__column--form' onSubmit={addLead}>
        <InputList>
          <Input full {...name} />
          <Input full {...company} />
          <Input full {...email} />
        </InputList>
        <div className="AuthForm__submit">
          <Button full secondary>Book my meeting</Button>
        </div>
      </form>
    </div>
    <Style />
  </div>
)

BookMeetingForm.init = ({
  services: {
    ui: {toggleModal}
  },
  form: {fields: {name, email, company}, submit}
}) => ({
  email,
  name,
  company,
  toggleModal,
  addLead: (e) => {
    submit(e, data => {
      e.preventDefault()
      const { email, name, company } = data
      const env = process.env.CIRCLE_BRANCH === 'syncano-ascend-master' ? 'production' : 'staging'

      addIntercomLead({ email, env, customAttributes: { enterprise: true, name, company }})
      window.analytics.track('Book Meeting')
      toggleModal('book-meeting')
      toggleModal('booking-confirmed')
    })
  }
})

BookMeetingForm.form = {
  formName: 'BookMeetingForm',
  fields: {
    email: {
      type: 'email',
      placeholder: 'E-mail address...'
    },
    name: {
      type: 'name',
      placeholder: 'Full name...'
    },
    company: {
      type: 'company',
      placeholder: 'Company name...'
    }
  }
}

export default connect(BookMeetingForm)
