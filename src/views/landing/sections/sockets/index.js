import ReactRotatingText from 'react-rotating-text'
import Hexagon from '../../../../components/ui/hexagon'
import Button from '../../../../components/ui/button'
import {MatchAsGuest} from '../../../../components/ui/router'
import Link from '../../../../components/ui/link'
import IconFacebook from './icon-fb.svg'
import IconDB from './icon-db.svg'
import IconGoogleAnalytics from './icon-google-analytics.svg'
import IconTwitter from './icon-twitter.svg'
import IconSlack from './icon-slack.svg'
import IconParse from './icon-parse.svg'
import IconStripe from './icon-stripe.svg'
import IconFirebase from './icon-firebase.svg'
import IconSegment from './icon-segment.svg'
import IconSentry from './icon-sentry.svg'
import Hexagons from './hexagons.svg'

const Sockets = ({
  toggleSignUpModal
}) => (
  <div className='Section'>
    <div className='Section__content u-wrapper u-ta-c'>
      <div className='Project'>
        <h2 className='Project__headline'>Assemble your backend from Syncano Sockets to build your</h2>
        <p className='Project__title'>
          <ReactRotatingText
            items={[
              ' fintech innovation solution',
              ' messenger bot',
              ' mobile backend',
              ' custom CMS',
              ' analytics integration',
              ' IoT backend',
              ' payment gateway',
              ' web hosting solution',
              '... basically, whatever...'
            ]} />
        </p>
      </div>

      <div className='Socket-list'>
        <a className='Socket' title='DB'>
          <div className='Socket__icon'><IconDB /></div>
          <Hexagon width={130} style={{fill: '#05b470', stroke: 'none'}} />
        </a>
        <a className='Socket' title='BAR'>
          <div className='Socket__icon'><IconGoogleAnalytics /></div>
          <Hexagon width={130} style={{fill: '#f69819', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Twitter'>
          <div className='Socket__icon'><IconTwitter /></div>
          <Hexagon width={130} style={{fill: '#1da1f2', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Slack'>
          <div className='Socket__icon'><IconSlack /></div>
          <Hexagon width={130} style={{fill: '#6ecadc', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Parse'>
          <div className='Socket__icon'><IconParse /></div>
          <Hexagon width={130} style={{fill: '#1199ed', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Facebook'>
          <div className='Socket__icon'><IconFacebook /></div>
          <Hexagon width={130} style={{fill: '#3B5998', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Stripe'>
          <div className='Socket__icon'><IconStripe /></div>
          <Hexagon width={130} style={{fill: '#00afe1', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Sentry'>
          <div className='Socket__icon'><IconSentry /></div>
          <Hexagon width={130} style={{fill: '#6c5bca', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Firebase'>
          <div className='Socket__icon'><IconFirebase /></div>
          <Hexagon width={130} style={{fill: '#ffa801', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Segment'>
          <div className='Socket__icon'><IconSegment /></div>
          <Hexagon width={130} style={{fill: '#3bb075', stroke: 'none'}} />
        </a>
        <a className='Socket Socket--empty' href='https://syncano.github.io/syncano-node-cli/#/building-sockets/basics' title='Build your socket'>
          <i className='Socket__icon fa fa-plus' />
          <Hexagon width={130} style={{
            fill: '#111',
            strokeWidth: '2',
            stroke: '#fff',
            strokeDasharray: '5,5',
            strokeOpacity: '.5'
          }} />
        </a>
        <div className='Hexagons'>
          <Hexagons />
        </div>

        <div className='HiddenAtMd'>
          <Hexagon width={64} fill='#05b470' position={{top: '-24%', right: '-200px'}} />
          <Hexagon width={64} fill='#b4f2da' position={{bottom: '0%', left: '-8%'}} />
        </div>
      </div>

      {/* <div className='Separator' data-after='or' />
      <Link to='/sockets'>Browse all 150 sockets</Link> */}

      <div className='HiddenAtMd'>
        <Hexagon width={32} fill='#05a5b4' position={{top: '-15px', left: '10%'}} />
        <Hexagon width={48} fill='#197eee' position={{bottom: '15%', right: '10%'}} />
      </div>
    </div>

    <div className='CTA u-wrapper'>
      <h3 className='u-title'>More than 60,000 developers use Syncano NoOps</h3>
      <p className='CTA__subtitle u-subtitle'>
        to accelerate and automate their software development process. <br />
        Together, let’s enable the autonomous developer.
      </p>

      <MatchAsGuest component={() => (
        <Button primary onClick={toggleSignUpModal}>Get started for free</Button>
      )} />
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        padding-top: 30px;
        padding-bottom: 30px;
        background-image: radial-gradient(1171px at 50.83% -19.58%, rgba(0, 100, 255, 0.25) 0%, rgba(0, 100, 255, 5e-05) 100%),
        linear-gradient(0deg, #0B0F15, #0B0F15);
        position: relative;
      }

      .Section__content {
        max-width: 770px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 90px;
          padding-bottom: 90px;
        }
      }

      @media screen and (min-width: 1100px) {
        .Section {
          margin-top: -213px;
          padding-top: 140px;
          padding-bottom: 140px;
        }
      }

      /* = TEXT
       * ==================================================================== */
      .Project__headline {
        font-size: 24px;
        font-weight: 300;
        color: rgba(255,255,255, .5);
      }

      .Project__title {
        font-family: Courier;
        font-size: 36px;
        font-weight: normal;
        color: #fff;
        margin-top: 7px;
        min-height: 41px;
      }

      @media screen and (max-width: 680px) {
        .Project__title {
          min-height: 82px;
          font-size: 28px;
        }
      }

      @media screen and (max-width: 370px) {
        .Project__title {
          font-size: 24px;
        }
      }

      .u-title {
        color: #fff;
      }

      .u-subtitle {
        color: rgba(255,255,255,.5);
      }

      /* = SOCKET
       * ==================================================================== */
      .Socket-list {
        max-width: 240px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 1;
      }

      .Socket-list::after {
        content: '';
        clear: both;
        display: table;
      }

      @media screen and (max-width: 429px) {
        .Socket-list {
          margin-bottom: 80px;
        }

        .Socket:nth-child(2),
        .Socket:nth-child(11) {
          margin-left: -20px;
          margin-right: -20px;
          top: 63px;
        }

        .Socket:nth-child(3),
        .Socket:nth-child(5),
        .Socket:nth-child(6),
        .Socket:nth-child(7),
        .Socket:nth-child(8),
        .Socket:nth-child(9),
        .Socket:nth-child(10) {
          display: none;
        }
      }

      @media screen and (min-width: 430px) {
        .Socket-list {
          max-width: 350px;
        }
      }

      @media screen and (min-width: 430px) and (max-width: 649px) {
        .Socket:nth-child(2),
        .Socket:nth-child(5),
        .Socket:nth-child(8) {
          margin-left: -20px;
          margin-right: -20px;
          top: 55px;
        }

        .Socket:nth-child(11) {
          margin-left: 70px;
        }
      }

      @media screen and (min-width: 650px) {
        .Socket-list {
          padding-top: 80px;
          max-width: 590px;
        }

        .Socket:nth-child(2),
        .Socket:nth-child(4),
        .Socket:nth-child(7),
        .Socket:nth-child(9) {
          margin-left: -20px;
          margin-right: -20px;
          top: 62px;
        }
      }

      .Socket {
        position: relative;
        font-size: 16px;
        display: inline-block;
        width: 130px;
        cursor: default;
        margin-bottom: 10px;
      }

      .Socket--empty { cursor: pointer }

      .Socket__text {
        text-anchor: middle;
      }

      .Socket__icon {
        font-size: 32px;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      /* = SEPARATOR
       * ==================================================================== */
      .Separator {
        width: 2px;
        height: 24px;
        opacity: 0.25;
        border: dashed 1px #ffffff;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        margin-bottom: 25px;
      }

      .Separator::after {
        content: attr(data-after);
        color: rgba(255,255,255,.5);
        font-weight: 300;
        position: absolute;
        top: 100%;
        transform: translateX(-50%);
      }

      /* = OTHER
       * ==================================================================== */
      div :global(a) {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        position: relative;
        z-index: 1;
      }

      div :global(a:hover) {
        text-decoration: underline;
      }

      :global(.react-rotating-text-cursor) {
        animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
      }

      @keyframes blinking-cursor {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      /* = CTA
       * ==================================================================== */
      .CTA {
        margin-top: 30px;
        text-align: center;

      }

      .CTA__subtitle {
        margin-bottom: 30px;
      }

      @media screen and (min-width: 560px) {
        .CTA {
          margin-top: 90px;
        }
      }

      @media screen and (max-width: 780px) {
        .HiddenAtMd {
          display: none;
        }
      }

      .Hexagons {
        position: absolute;
        top: -165px;
        transform: translateX(-20px);
        left: auto;
        right: auto;
        z-index: -1;
      }
    `}</style>
  </div>
)

export default Sockets
