const Nav = ({children, wrap}) => (
  <div className={`
    Grid
    ${wrap ? 'Grid--wrap' : null}
  `}>
    {children}

    <style jsx>{`
      .Grid {
        display: flex;
        margin-left: -30px;
      }

      .Grid--wrap {
        flex-wrap: wrap;
      }

      .Grid > :global(*) {
        padding-left: 30px;
      }
    `}</style>
  </div>
)

export default Nav
