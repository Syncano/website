import Nav from '../nav'

const UserNav = () => (
  <div className='User-nav'>
    <Nav>
      <a href='' className='User-nav__item User-nav__item--status'>All systems operational</a>
      <a href='' className='User-nav__item'>Sign in</a>
      <a href='' className='User-nav__item'>Sign up</a>
    </Nav>

    <style jsx>{`
      @media screen and (max-width: 989px) {
        .User-nav {
          /*display: none;*/
        }
      }

      .User-nav :global(li + li) {
        margin-left: 10px;
      }

      .User-nav__item {
        font-weight: 500;
        color: #fff;
        text-decoration: none;
      }

      .User-nav a:hover {
        text-decoration: underline;
      }

      .User-nav__item--status {
        font-weight: 400;
        color: #b8e986;
        font-size: 12px;
      }

      .User-nav__item--status::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-right: 8px;
        margin-bottom: 2px;
        border-radius: 4px;
        background-color: #b8e986;
        box-shadow: 0 0 7px 1px #b8e986;
        animation: pulse 3s infinite linear;
      }

      @media screen and (max-width: 989px) {
        .User-nav {
          display: none;
        }
      }

      @media screen and (min-width: 990px) {
        .User-nav :global(li) :global(+) :global(li) {
          margin-left: 30px;
        }
      }

      @keyframes pulse {
        from, 50%, to {
          opacity: 1;
        }

        45%, 85% {
          opacity: .25;
        }
      }
    `}</style>
  </div>
)

export default UserNav
