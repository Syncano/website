import {connect} from 'zefir/utils'
import Logo from '../../ui/logo'
import Link from '../../ui/link'
import SiteNav from './site-nav'
import UserNav from './user-nav'
import Hexagons from './hexagons.svg'

const Header = ({
  title,
  subtitle,
  theme = 'light',
  toggleNav,
  toggleSignUp,
  toggleSignIn,
  flags,
  pageStatus,
  closeNav,
  before,
  children
}) => (
  <div className={`Header t-${theme}`}>
    <div className='Hexagons'>
      <Hexagons />
    </div>
    <div className='Header__inner u-wrapper'>
      <div className='Header__bar'>
        <Link to='/'>
          <span className='Header__logo'>
            <Logo />
          </span>
        </Link>

        <span onClick={toggleNav} className='Header__nav-toggle fa fa-bars' />

        <SiteNav theme={theme} toggleSignIn={toggleSignIn} isOpen={flags.has('site-nav.open')} closeNav={closeNav} />
        <UserNav theme={theme} toggleSignUp={toggleSignUp} toggleSignIn={toggleSignIn} pageStatus={pageStatus} />
      </div>

      {title && (
        <div className='PageHead'>
          {before}

          <h1 className='PageHead__title'>{title}</h1>
          <h2 className='PageHead__subtitle'>{subtitle}</h2>
        </div>
      )}

      {children}
    </div>

    <style jsx>{`
      /* = PageHead
       * ==================================================================== */
      .PageHead {
        margin: 45px auto;
        text-align: center;
      }

      .PageHead__title {
        color: #0b0f15;
        font-size: 28px;
        line-height: 36px;
      }

      .PageHead__subtitle {
        font-size: 20px;
        line-height: 32px;
        font-weight: 300;
        color: #7a7f87;
        margin-top: 5px;
      }

      @media screen and (min-width: 560px) {
        .PageHead {
          margin: 90px auto;
        }

        .PageHead__title {
          font-size: 48px;
          line-height: 48px;
        }

        .PageHead__subtitle {
          font-size: 24px;
          margin-top: 15px;
        }
      }


      /* = HEADER
       * ==================================================================== */
      .Header {
        color: #3871d0;
        padding-top: 25px;
        position: relative;
        z-index: 10;
      }

      .Header.t-dark {
        color: #fff;
      }

      .Header.t-dark {
        background: linear-gradient(0deg, #0B0F15, #0B0F15);
      }

      .Header.t-dark::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background:
          radial-gradient(875.03px at 50% 100%, rgba(0, 100, 255, 0.25) 0%, rgba(0, 100, 255, 5e-05) 100%);
        animation: pulseBG 3s infinite linear;
      }

      .Header__inner {
        width: 100%;
        max-width: 1220px;
        padding-left: 30px;
        padding-right: 30px;
        position: relative;
        z-index: 1;
      }

      .Header__bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .Header__logo :global(svg) {
        width: 120px;
      }

      .Header__logo :global(path) {
        fill: #0b0f15;
      }

      .t-dark .Header__logo :global(path) {
        fill: #fff;
      }

      .Header__nav-toggle {
        cursor: pointer;
        font-size: 28px;
        line-height: 23px;
      }

      @media screen and (min-width: 800px) {
        .Header__nav-toggle {
          display: none;
        }
      }

      .Hexagons {
        position: absolute;
        width: 100%;
        min-width: 1530px;
        left: 50%;
        margin-left: -765px;
        bottom: 0;
        display: flex;
        transition: opacity .25s ease-in-out;
      }

      .t-light .Hexagons {
        display: none;
      }

      @media screen and (max-width: 720px) {
        .Hexagons {
          opacity: 0;
        }
      }

      @keyframes pulseBG {
        from, to {
          opacity: 1;
        }

        50% {
          opacity: .7;
        }
      }
    `}</style>
  </div>
)

Header.init = ({
  theme = 'light',
  stores: {ui: {flags, pageStatus}},
  services: {ui: {toggleFlag, toggleModal}},
  ...props
}) => {
  return {
    theme,
    flags,
    pageStatus,
    toggleSignUp: () => {
      window.analytics.track('Sign up Website')
      toggleModal('signup')
    },
    toggleSignIn: () => {
      window.analytics.track('Sign in Website')
      toggleModal('signin')
    },
    toggleNav: () => toggleFlag('site-nav.open'),
    closeNav: () => flags.delete('site-nav.open'),
    ...props
  }
}

export default connect(Header)
