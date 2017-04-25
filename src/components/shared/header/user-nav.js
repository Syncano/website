import Nav from '../../ui/nav'
import {MatchAsGuest, MatchAsMember} from '../../ui/router'

const UserNav = ({theme, toggleSignUp, toggleSignIn, pageStatus}) => (
  <div className={`User-nav t-${theme}`}>
    <MatchAsGuest component={() => (
      <Nav>
        {pageStatus.indicator && (
          <a className={`User-nav__item User-nav__item--status User-nav__item--status-${pageStatus.indicator}`} href='http://status.syncano.com/'>{pageStatus.description}</a>
        )}

        <a className='User-nav__item' onClick={toggleSignIn}>Sign in</a>
        <a className='User-nav__item' onClick={toggleSignUp}>Sign up</a>
      </Nav>
    )} />

    <MatchAsMember component={() => (
      <Nav>
        {pageStatus.indicator && (
          <a className={`User-nav__item User-nav__item--status User-nav__item--status-${pageStatus.indicator}`} href='http://status.syncano.com/'>{pageStatus.description}</a>
        )}
        <a className='User-nav__item' href='https://dashboard.syncano.io/'>Go to dashboard</a>
      </Nav>
    )} />

    <style jsx>{`
      .User-nav :global(li + li) {
        margin-left: 10px;
      }

      .User-nav__item {
        color: rgba(56,113,208, 1);
        font-weight: 500;
        text-decoration: none;s
        transition: color .25s;
        cursor: pointer;
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
        color: #dac529;
        font-size: 12px;
      }

      .User-nav__item--status:hover {
        color: #dac529;
        text-decoration: underline;
      }

      .User-nav__item--status-none,
      .User-nav__item--status-none:hover {
        color: #25b012;
      }

      .t-dark .User-nav__item--status,
      .t-dark .User-nav__item--status:hover {
        color: #efe17a;
      }

      .t-dark .User-nav__item--status-none,
      .t-dark .User-nav__item--status-none:hover {
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
        background-color: #dac529;
        box-shadow: 0 0 7px 1px #dac529;
        animation: pulse 3s infinite linear;
      }

      .User-nav__item--status-none::before {
        background-color: #25b012;
        box-shadow: 0 0 7px 1px #b8e986;
      }

      .t-dark .User-nav__item--status::before {
        background-color: #efe17a;
      }

      .t-dark .User-nav__item--status-none::before {
        background-color: #b8e986;
      }

      @media screen and (max-width: 1061px) {
        .User-nav {
          display: none;
        }
      }

      @media screen and (min-width: 1062px) {
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
