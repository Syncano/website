import {Link} from 'zefir/router'

export default props => (
  <span>
    <Link {...props} />

    <style jsx>{`
      span {
        display: inline-block;
      }

      span :global(a) {
        text-decoration: none;
      }
    `}</style>
  </span>
)
