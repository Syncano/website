import Nav from '../nav'

const UserNav = ({theme}) => (
  <div className={`User-nav t-${theme}`}>
    <Nav>
      <a href='' className='User-nav__item User-nav__item--status'>All systems operational</a>
      <a href='' className='User-nav__item'>Sign in</a>
      <a href='' className='User-nav__item'>Sign up</a>
    </Nav>

    <style jsx>{`
      .User-nav :global(li + li) {
        margin-left: 10px;
      }

      .User-nav__item {
        color: rgba(56,113,208, 1);
        font-weight: 500;
        text-decoration: none;
        transition: color .25s;
      }

      .t-dark .User-nav__item {
        color: #fff;
      }

      .User-nav__item:hover {
        color: rgba(56,113,208, .5);
      }

      .t-dark .User-nav__item:hover {
        color: rgba(255,255,255,.5);
      }

      .User-nav__item--status {
        font-weight: 400;
        color: #25b012;
        font-size: 12px;
      }

      .User-nav__item--status:hover {
        color: #25b012;
        text-decoration: underline;
      }

      .t-dark .User-nav__item--status {
        color: #b8e986;
      }

      .t-dark .User-nav__item--status:hover {
        color: #b8e986;
      }

      .User-nav__item--status::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        margin-right: 8px;
        margin-bottom: 2px;
        border-radius: 4px;
        background-color: #23ba15;
        box-shadow: 0 0 7px 1px #b8e986;
        animation: pulse 3s infinite linear;
      }

      .t-dark .User-nav__item--status::before {
        background-color: #b8e986;
      }

      @media screen and (max-width: 989px) {
        .User-nav {
          display: none;
        }
      }

      @media screen and (min-width: 990px) {
        .User-nav :global(li) :global(+) :global(li) {
          margin-left: 20px;
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
