import {Match, Switch} from './components/ui/router'

import LandingView from './views/landing'
import FeaturesView from './views/features'
import PricingView from './views/pricing'
import FaqView from './views/faq'
import ToSView from './views/terms/terms-of-service'
import PrivacyPolicyView from './views/terms/privacy-policy'
import AccepatbleUsePolicyView from './views/terms/acceptable-use-policy'
import SyncanoPerformanceInsightsView from './views/terms/syncano-performance-insights'
import GeneralTermsView from './views/terms/general-terms'
import SocketsView from './views/sockets'
import MissingView from './views/missing'

const Routes = () => (
  <Switch>
    <Match path='/' exact component={LandingView} />
    <Match path='/features' exact component={FeaturesView} />
    <Match path='/pricing' exact component={PricingView} />
    <Match path='/faq' exact component={FaqView} />
    <Match path='/sockets' exact component={SocketsView} />
    <Match path='/terms-of-service' exact component={ToSView} />
    <Match path='/privacy-policy' exact component={PrivacyPolicyView} />
    <Match path='/acceptable-use-policy' exact component={AccepatbleUsePolicyView} />
    <Match path='/syncano-performance-insights' exact component={SyncanoPerformanceInsightsView} />
    <Match path='/general-terms' exact component={GeneralTermsView} />
    <Match component={MissingView} />
  </Switch>
)

Routes.init = ({
  services: {auth, ui}
}) => {
  auth.rebuildSession()
  ui.addHotjar()
  ui.fetchServicesStatus()
}

export default Routes
