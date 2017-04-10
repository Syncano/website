import {Link} from 'zefir/router'

export default props => (
  <div>
    <Link {...props} />

    <style jsx>{`
      div {
        display: inline-block;
      }

      div :global(a) {
        text-decoration: none;
      }
    `}</style>
  </div>
)
