import {Match, Switch} from './components/ui/router'

import LandingView from './views/landing'
import FeaturesView from './views/features'
import PricingView from './views/pricing'
import FaqView from './views/faq'
import SlackInviteView from './views/slack-invite'
import ToSView from './views/terms/terms-of-service'
import PrivacyPolicyView from './views/terms/privacy-policy'
import AccepatbleUsePolicyView from './views/terms/acceptable-use-policy'
import GeneralTermsView from './views/terms/general-terms'
import SocketsView from './views/sockets'
import SignUpView from './views/signup'
import SignInView from './views/signin'
import MissingView from './views/missing'
import EnterpriseView from './views/enterprise'

const Routes = () => (
  <Switch>
    <Match path='/' exact component={LandingView} />
    <Match path='/features' exact component={FeaturesView} />
    <Match path='/pricing' exact component={PricingView} />
    <Match path='/faq' exact component={FaqView} />
    <Match path='/sockets' component={SocketsView} />
    <Match path='/signup' exact component={SignUpView} />
    <Match path='/signin' exact component={SignInView} />
    <Match path='/slack-invite' exact component={SlackInviteView} />
    <Match path='/terms-of-service' exact component={ToSView} />
    <Match path='/privacy-policy' exact component={PrivacyPolicyView} />
    <Match path='/acceptable-use-policy' exact component={AccepatbleUsePolicyView} />
    <Match path='/general-terms' exact component={GeneralTermsView} />
    <Match path='/enterprise' exact component={EnterpriseView} />
    <Match component={MissingView} />
  </Switch>
)

Routes.init = ({
  services: {auth, ui}
}) => {
  auth.rebuildSession()
  ui.addSegment(process.env.ANALYTICS_WRITE_KEY)
  ui.fetchServicesStatus()
}

export default Routes
