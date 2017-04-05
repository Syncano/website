import Sidebar from '../../components/sidebar'
import Menu from '../../components/menu'
import NavLink from '../../components/nav-link'

const TermsSidebar = () => (
  <Sidebar>
    <Menu>
      <NavLink to='/terms-of-service'>Terms of service</NavLink>
      <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
      <NavLink to='/acceptable-use-policy'>Acceptable Use Policy</NavLink>
      <NavLink to='/general-terms'>General Terms and Conditions</NavLink>
      <NavLink to='/syncano-performace-insights'>Syncano Performance Insight EU-US Privacy Shield Policy</NavLink>
    </Menu>
  </Sidebar>
)

export default TermsSidebar
