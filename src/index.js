import {Match, Switch} from './components/ui/router'

import LandingView from './views/landing'
import FeaturesView from './views/features'
import PricingView from './views/pricing'
import FaqView from './views/faq'
import ToSView from './views/terms/terms-of-service'
import PrivacyPolicyView from './views/terms/privacy-policy'
import SocketsView from './views/sockets'
import MissingView from './views/missing'

export default () => (
  <Switch>
    <Match path='/' exact component={LandingView} />
    <Match path='/features' exact component={FeaturesView} />
    <Match path='/pricing' exact component={PricingView} />
    <Match path='/faq' exact component={FaqView} />
    <Match path='/sockets' exact component={SocketsView} />
    <Match path='/terms-of-service' exact component={ToSView} />
    <Match path='/privacy-policy' exact component={PrivacyPolicyView} />
    <Match component={MissingView} />
  </Switch>
)
