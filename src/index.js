import {Match, Switch} from './components/router'

import LandingView from './views/landing'
import MissingView from './views/missing'

export default () => (
  <Switch>
    <Match path='/' exact component={LandingView} />
    <Match component={MissingView} />
  </Switch>
)
