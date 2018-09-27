import Sidebar from '../../../components/ui/sidebar'
import Menu from '../../../components/ui/menu'
import NavLink from '../../../components/ui/nav-link'

const TermsSidebar = () => (
  <Sidebar>
    <Menu>
      <NavLink to='/terms-of-service'>Terms of service</NavLink>
      <NavLink to='/acceptable-use-policy'>Acceptable Use Policy</NavLink>
      <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
      <NavLink to='/general-terms'>General Terms and Conditions</NavLink>
    </Menu>
  </Sidebar>
)

export default TermsSidebar
