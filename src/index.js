import {Match, Switch} from './components/router'

import LandingView from './views/landing'
import FaqView from './views/faq'
import MissingView from './views/missing'

export default () => (
  <Switch>
    <Match path='/' exact component={LandingView} />
    <Match path='/faq' exact component={FaqView} />
    <Match component={MissingView} />
  </Switch>
)
