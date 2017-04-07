import Hexagon from '../../../../components/ui/hexagon'
import Button from '../../../../components/ui/button'
import Icon from './icon-1.svg'
import Hexagons from './hexagons.svg'

const Sockets = () => (
  <div className='Section'>
    <div className='Section__content u-wrapper u-ta-c'>
      <div className='Project'>
        <h2 className='Project__headline'>Combine Syncano sockets to build your</h2>
        <p className='Project__title'>
          fintech innovati_
        </p>
      </div>

      <div className='Socket-list'>
        <a className='Socket' title='DB'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#05b470', stroke: 'none'}} />
        </a>
        <a className='Socket' title='BAR'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#f69819', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Twitter'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#1da1f2', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Slack'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#6ecadc', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Parse'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#1199ed', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Facebook'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#3B5998', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Stripe'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#00afe1', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Triangle'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#6c5bca', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Firebase'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#ffa801', stroke: 'none'}} />
        </a>
        <a className='Socket' title='Segment'>
          <div className='Socket__icon'><Icon /></div>
          <Hexagon width={130} style={{fill: '#3bb075', stroke: 'none'}} />
        </a>
        <a className='Socket Socket--empty' title='Plus'>
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
          <Hexagon width={64} fill='#05b470' position={{top: '-24%', right: '-90px'}} />
          <Hexagon width={64} fill='#b4f2da' position={{bottom: '0%', left: '-8%'}} />
        </div>
      </div>

      <div className='Separator' data-after='or' />
      <a href=''>Browse all 150 sockets</a>

      <div className='HiddenAtMd'>
        <Hexagon width={32} fill='#05a5b4' position={{top: '-15px', left: '10%'}} />
        <Hexagon width={48} fill='#197eee' position={{bottom: '15%', right: '10%'}} />
      </div>
    </div>

    <div className='CTA u-wrapper'>
      <h3 className='u-title'>50,000 developers use Syncano</h3>
      <p className='CTA__subtitle u-subtitle'>to faster build, test and scale their APIs.</p>

      <Button primary>Get started for free</Button>
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
        max-width: 720px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 90px;
          padding-bottom: 90px;
        }
      }

      @media screen and (min-width: 918px) {
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

      @media screen and (max-width: 429px) {
        .Socket-list {
          margin-bottom: 30px;
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
        .Socket-list {
          margin-bottom: -30px;
        }

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
        cursor: pointer;
        margin-bottom: 10px;
      }

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
      a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
      }

      a:hover {
        text-decoration: underline;
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
