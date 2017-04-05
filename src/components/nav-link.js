import {NavLink} from 'zefir/router'

export default props => (
  <div>
    <NavLink {...props} />

    <style jsx>{`
      div :global(a) {
        text-decoration: none;
      }
    `}</style>
  </div>
)
