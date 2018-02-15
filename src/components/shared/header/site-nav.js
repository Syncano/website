import Nav from '../../ui/nav'
import Link from '../../ui/link'
import {MatchAsMember, MatchAsGuest} from '../../ui/router'

const SiteNav = ({isOpen, theme, toggleSignIn, closeNav}) => (
  <div className={`Site-nav t-${theme} ${isOpen ? 'is-open' : null}`} onClick={closeNav}>
    <div className='Site-nav__inner'>
      <Nav>
        <div>
          <Link to='/features'>
            <span className='Site-nav__item'>Product</span>
          </Link>
          <div className='Dropdown'>
            <Nav stack>
              <a href=''>Automation SDK</a>
              <a href=''>Socket Registry</a>
              <a href=''>Cloud OS</a>
              <a href=''>Community</a>
            </Nav>
          </div>
        </div>
        <Link to='/sockets'>
          <span className='Site-nav__item'>Sockets</span>
        </Link>
        <Link to='/pricing'>
          <span className='Site-nav__item'>Plans &amp; Pricing</span>
        </Link>
        <Link to='/enterprise'>
          <span className='Site-nav__item'>Enterprise</span>
        </Link>
        <a className='Site-nav__item' href='https://docs.syncano.io/'>Documentation</a>
        <div className='Site-nav__social'>
          <a href='https://github.com/syncano'><i className='fa fa-github' /></a>
          <Link to='/slack-invite'><i className='fa fa-slack' /></Link>
        </div>

        <MatchAsGuest component={() => (
          <a className='Site-nav__item Site-nav__item--login' onClick={toggleSignIn}>
            Sign in<i className='fa fa-arrow-right' />
          </a>
        )} />

        <MatchAsMember component={() => (
          <a className='Site-nav__item Site-nav__item--login' href={process.env.DASHBOARD_URL}>Go to dashboard</a>
        )} />
      </Nav>
    </div>

    <style jsx>{`
      /* = DROPDOWN
       * ==================================================================== */
      .Dropdown {
        display: none;
      }

      .Site-nav {
        will-change: transform,opacity,visibility;
        transition-property: transform,opacity,visibility;
        transition-duration: .25s;
      }

      .Site-nav__item {
        text-decoration: none;
        cursor: pointer;
      }

      .Site-nav__social :global(a) + :global(a) {
        margin-left: 10px;
      }

      .Site-nav__social :global(a) {
        font-size: 14px;
        margin-right: 10px;
        text-decoration: none;
        color: rgba(56,113,208, .33);
        transition: color .25s ease;
      }

      .t-dark .Site-nav__social :global(a) {
        color: rgba(255,255,255, .33);
      }

      .Site-nav__social :global(a):hover,
      .Site-nav__social :global(a):hover .fa {
        color: rgba(56,113,208, .75);
      }

      .t-dark .Site-nav__social :global(a):hover,
      .t-dark .Site-nav__social :global(a):hover .fa {
        color: rgba(255,255,255, 1);
      }

      .Site-nav__social .fa {
        font-size: 18px;
        transition: color .25s ease;
        color: rgba(56,113,208, .33);
        vertical-align: middle;
        margin-top: -1px;
      }

      .t-dark .Site-nav__social .fa {
        color: rgba(255,255,255, .5);
      }

      @media screen and (max-width: 799px) {
        .Site-nav {
          position: absolute;
          z-index: 10;
          top: 40px;
          left: 0;
          right: 0;
          padding: 10px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
        }

        .Site-nav__inner {
          background: #fff;
          padding: 18px 30px;
          border-radius: 6px;
          flex-grow: 1;
          border: 1px solid #f5f5f5;
          box-shadow: 0 2px 8px rgba(200, 200, 200, .3);
        }

        .Site-nav :global(.Site-nav__item) {
          text-decoration: none;
          line-height: 36px;
          font-size: 18px;
          color: #2c59c5;
          display: block;
        }

        .Site-nav__item--login {
          border-top: 1px solid rgba(24, 126, 239, 0.08);
          margin-bottom: -18px;
          margin-left: -30px;
          margin-right: -30px;
          margin-top: 18px;
          padding: 10px 30px;
          font-weight: 500;
          background-color: rgba(24, 126, 239, 0.03);
          border-radius: 0 0 6px 6px;
        }

        .Site-nav__item--login .fa {
          margin-left: 10px;
          font-size: 14px;
          margin-bottom: 2px;
          vertical-align: middle;
        }

        .Site-nav.is-open {
          visibility: visible;
          transform: none;
          opacity: 1;
        }

        .Site-nav :global(ul) {
          flex-flow: column;
        }
      }

      @media screen and (min-width: 800px) {
        .Site-nav__item {
          font-weight: 500;
          color: rgba(56,113,208, 1);
          margin-left: 15px;
          transition: color .25s ease;
        }

        .t-dark .Site-nav__item {
          color: rgba(255,255,255, .75);
        }

        .Site-nav__item:hover {
          color: rgba(56,113,208, .5);
        }

        .t-dark .Site-nav__item:hover,
        .t-dark .Site-nav__item--login {
          color: #fff;
        }

        .Site-nav__item--login .fa {
          display: none;
        }
      }

      @media screen and (min-width: 1062px) {
        .Site-nav :global(li) :global(+) :global(li) {
          margin-left: 30px;
        }

        .Site-nav {
          margin-right: auto;
          margin-left: 50px;
        }

        .Site-nav__item--login {
          display: none;
        }

        .Site-nav :global(li) :global(+) :global(li) {
          margin-left: 20px;
        }
      }

      @media screen and (max-width: 1115px) {
        .Site-nav__social {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default SiteNav
