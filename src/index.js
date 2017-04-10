import {Match, Switch} from './components/ui/router'

import LandingView from './views/landing'
import FeaturesView from './views/features'
import PricingView from './views/pricing'
import FaqView from './views/faq'
import ToSView from './views/terms/terms-of-service'
import PrivacyPolicyView from './views/terms/privacy-policy'
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
    <Match component={MissingView} />
  </Switch>
)

Routes.init = () => {
  {((h,o,t,j,a,r) => {
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:108213,hjsv:5};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=')}
}

export default Routes
