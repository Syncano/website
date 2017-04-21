import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import Avatar from '../../components/ui/avatar'
import Hexagon from '../../components/ui/hexagon'
import CTA from '../../components/shared/cta'
import Icon from './icon-1.svg'

const Sockets = () => (
  <Page>
    <Head>
      <title>Sockets Registry - Syncano</title>
    </Head>

    <Header
      title='Sockets Registry'
      subtitle='Don’t build what’s already been built. Use sockets.'
      />

    <div className='Section u-wrapper'>
      <ul className='Socket-list'>
        <li className='Socket'>
          <a className='Socket__symbol' title='Facebook'>
            <div className='Socket__icon'><Icon /></div>
            <Hexagon width={80} fill='#3B5998' />
          </a>
          <div className='Socket__meta'>
            <h3>
              <a className='Socket__title' href=''>facebook-authenticator</a>
            </h3>
            <p className='Socket__description'>Quisque tristique rutrum libero. Fusce in dui tristique, dapibus nisi lorem ipsum.</p>
          </div>
          <div className='Socket__author'>
            <Avatar
              size={32}
              src='/static/img/testimonials/stale-husby.png'
              srcSet='/static/img/testimonials/stale-husby.png 1x, /static/img/testimonials/stale-husby@2x.png 2x'
              />
            <div>maciej.kucharz</div>
          </div>
        </li>
        <li className='Socket'>
          <a className='Socket__symbol' title='Facebook'>
            <div className='Socket__icon'><Icon /></div>
            <Hexagon width={80} fill='#05b470' />
          </a>
          <div className='Socket__meta'>
            <h3>
              <a className='Socket__title' href=''>data-exporter</a>
            </h3>
            <p className='Socket__description'>Quisque tristique rutrum libero. Fusce in dui tristique, dapibus nisi lorem ipsum.</p>
          </div>
          <div className='Socket__author'>
            <Avatar
              size={32}
              src='/static/img/testimonials/stale-husby.png'
              srcSet='/static/img/testimonials/stale-husby.png 1x, /static/img/testimonials/stale-husby@2x.png 2x'
              />
            <div>ideredpl</div>
          </div>
        </li>
      </ul>
    </div>

    <CTA />
    <Footer />

    <style jsx>{`
      .Section {
        max-width: 670px;
      }

      .Socket-list {
        list-style: none;
      }

      .Socket {
        display: flex;
        align-items: center;
      }

      .Socket + .Socket {
        border-top: solid 1px #e5e5e5;
        padding-top: 15px;
        margin-top: 15px;
      }

      .Socket__symbol {
        position: relative;
        font-size: 16px;
        display: inline-block;
        width: 80px;
        cursor: pointer;
        margin-right: 30px;
      }

      .Socket__icon {
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        max-height: 32px;
        max-width: 32px;
        transform: translate(-50%, -50%);
      }

      .Socket__icon :global(svg) {
        height: 32px;
        fill: #fff;
      }

      .Socket__meta {
        max-width: 340px;
        padding-right: 20px;
        width: 100%;
      }

      .Socket__title {
        font-weight: 400;
        text-decoration: none;
        font-size: 18px;
        color: #0b0d11;
      }

      .Socket__description {
        font-size: 14px;
        line-height: 1.29;
        color: #8d9299;
        margin-top: 7px;
      }

      .Socket__author {
        display: flex;
        font-size: 14px;
        line-height: 1.29;
        color: rgba(47, 51, 57, .8);
      }

      .Socket__author div {
        padding-left: 15px;
      }

      .Socket__author div::before {
        content: 'Made by';
        display: block;
        font-size: 12px;
        line-height: 1.5;
        color: rgba(122, 127, 135, .8);
      }
    `}</style>
  </Page>
)

export default Sockets
