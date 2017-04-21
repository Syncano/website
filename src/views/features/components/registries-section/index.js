import Grid from '../../../../components/ui/grid'
import Button from '../../../../components/ui/button'
import Hexagon from '../../../../components/ui/hexagon'
import Hexagons from './hexagons.svg'
import IconSentry from './icon-sentry.svg'
import IconStripe from './icon-stripe.svg'
import IconTwitter from './icon-twitter.svg'
import IconDB from './icon-db.svg'
import IconFacebook from './icon-fb.svg'

const RegistriesSection = ({toggleSignUpModal}) => (
  <div className='Section'>
    <div className='Section__inner u-wrapper'>
      <div className='Section__column Section__column--header'>
        <h2 className='u-title'>Syncano Socket Registry</h2>
        <p className='u-subtitle'>Once you sign up for Syncano, you have access to a Registry of hundreds of ready to use components and backend blueprints, all created by the community. You can start using these immediately to customize your dedicated backend.</p>
      </div>

      <div className='Hexagons'>
        <div className='Hexagons__bg'>
          <Hexagons />

          <a className='Socket' title='DB'>
            <div className='Socket__icon'><IconDB /></div>
            <Hexagon width={130} style={{fill: '#05b470', stroke: 'none'}} />
          </a>
          <a className='Socket' title='Facebook'>
            <div className='Socket__icon'><IconFacebook /></div>
            <Hexagon width={130} style={{fill: '#3B5998', stroke: 'none'}} />
          </a>
          <a className='Socket' title='Sentry'>
            <div className='Socket__icon'><IconSentry /></div>
            <Hexagon width={130} style={{fill: '#6c5bca', stroke: 'none'}} />
          </a>
          <a className='Socket' title='Twitter'>
            <div className='Socket__icon'><IconTwitter /></div>
            <Hexagon width={130} style={{fill: '#1da1f2', stroke: 'none'}} />
          </a>
          <a className='Socket' title='Stripe'>
            <div className='Socket__icon'><IconStripe /></div>
            <Hexagon width={130} style={{fill: '#00afe1', stroke: 'none'}} />
          </a>
        </div>
      </div>

      <Grid wrap>
        <div className='Section__column Section__column--primary'>
          <h2 className='u-title'>Building Syncano Sockets</h2>
          <p className='u-subtitle'>One of Syncano’s serverless platform’s core concepts is the standardized backend building blocks which we call <i>Syncano Sockets</i>.</p>
          <p>A Syncano Socket has one single and clear purpose —whether it’s to send an email, translate a text file, or analyze a web page. A Syncano Socket can be connected to any other Syncano Sockets, similar to how LEGOs work. Combining Syncano Sockets removes the hurdle of building pre-existing code on your own, enabling you to assemble ready made backends at lightning speed.</p>
        </div>

        <div className='Section__column Section__column--secondary'>
          <div className='Feature-list'>
            <div className='Feature Feature--full'>
              <h4 className='Feature__title'>Find reusable code in the Public Registry</h4>
              <p>Publicly available Syncano Sockets can be found in the Public Syncano Socket Registry, and are licensed under the MIT License.</p>
            </div>
            <div className='Feature Feature--full'>
              <h4 className='Feature__title'>Build your own reusable code in your Private Registry</h4>
              <p>Can’t find what you’re looking for in the Public Registry? Simply create your <a href='https://syncano.github.io/syncano-node-cli/#/building-sockets/basics'>own Syncano Sockets</a> in your very own Private Registry.</p>
              <p>Once you build your own custom made Syncano Sockets, they are automatically placed into your own Private Socket Registry that only you and your team have access to. Want to share your Sockets with the community? Simply use the Automation SDK and remove the private flag, and they’re now in the Public Socket Registry.</p>
              <p>Don’t have the bandwidth to build your own but need something immediately? Find developers to build Syncano Sockets for you in the <a onClick={() => window.Intercom('showNewMessage')}>Syncano Socket Marketplace</a>.</p>
            </div>
            <div className='Feature Feature--full'>
              <h4 className='Feature__title'>Using the registries</h4>
              {/* <p>Browse the existing public Syncano Sockets by the Public Socket Registry web interface.</p> */}
              <p>After signing up, you’ll automatically have access to both your Private Socket Registry and the Public Socket Registry. By leveraging the Automation SDK, you can easily list, search, submit and deploy Syncano Sockets to your dedicated backend.</p>
              <p>
                <Button secondary onClick={toggleSignUpModal}>Sign up</Button>
              </p>
            </div>
            {/* <div className='Feature'>
              <h4 className='Feature__title'>Public registry</h4>
              <p>The publicly available Syncano Sockets are listed in the <a href='#'>Public Syncano Socket Registry</a>, and licensed under the <a href='#'>Berkeley Standard Distribution license</a>.</p>
              <p>
                <Button secondary>
                  <a href='#'>Browse Syncano Sockets</a>
                </Button>
              </p>
              <p>There are more than 150 sockets available</p>
            </div> */}
          </div>
        </div>
      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        background: #0e0e2b;
        padding-top: 30px;
        padding-bottom: 30px;
        position: relative;
        z-index: 1;
      }

      .u-title {
        color: #ffffff;
      }

      p > a {
        color: #8B9CB6;
        text-decoration: underline;
      }

      p > a:hover {
        text-decoration: none;
      }

      /* ==================================================================== */

      .Section__column--header {
        position: relative;
        z-index: 1;
      }

      .Section__column--header .u-subtitle {
        color: #6382aa;
        font-weight: 400;
        line-height: 30px;
      }

      /* ==================================================================== */

      .Section__column--primary {
        margin-top: 30px;
        font-size: 20px;
        line-height: 30px;
        color: #6b7d95;
      }

      .Section__column--primary .u-subtitle {
        color: #b0bed0;
        margin-bottom: 20px;
      }

      .Section__column--primary p + p {
        margin-top: 20px;
      }

      /* ==================================================================== */

      .Section__column--secondary {
        margin-top: 30px;
        font-size: 20px;
        line-height: 30px;
        color: #6b7d95;
      }

      .Section__inner {
        max-width: 1230px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-bottom: 60px;
          padding-top: 60px;
        }

        .Section__column--header {
          text-align: center;
        }

        .u-subtitle {
          font-size: 20px;
        }
      }

      @media screen and (min-width: 970px) {
        .Section {
          padding-bottom: 0;
          padding-top: 100px;
          background:
            radial-gradient(1146.54px at 49.58% 17.9%, rgba(54, 55, 209, 0.25) 0%, rgba(54, 55, 209, 5e-05) 100%),
            linear-gradient(to bottom, #0B0F15 90%, rgba(11, 15, 21, 0.0001))
        }

        .Section__column--header {
          max-width: 530px;
          margin-left: auto;
          margin-right: auto;
        }

        .Section__column--primary,
        .Section__column--secondary {
          width: 50%;
        }
      }

      @media screen and (min-width: 1100px) {
        .Section__column--primary {
          flex-basis: 42%;
        }

        .Section__column--secondary {
          padding-left: 80px;
          margin-left: auto;
          flex-basis: 58%;
        }
      }

      /* = Sockets
       * ==================================================================== */
      .Hexagons {
        position: relative;
        display: none;
        transform-origin: top center;
      }

      @media screen and (min-width: 760px) {
        .Hexagons {
          display: block;
          transform: scale(.6);
          height: 230px;
        }
      }

      @media screen and (min-width: 970px) {
        .Hexagons {
          transform: scale(.8);
          height: 330px;
        }
      }

      @media screen and (min-width: 1100px) {
        .Hexagons {
          transform: scale(1);
          height: 400px;
        }
      }

      .Hexagons__bg {
        position: absolute;
        top: -60px;
        left: 50%;
        transform: translate(-770px, -190px);
        width: 1440px;
      }

      .Socket {
        font-size: 16px;
        display: inline-block;
        margin-bottom: 10px;
        position: absolute;
      }

      .Socket:nth-child(2) { top: 63.7%; left: 12.2%; }
      .Socket:nth-child(3) { top: 71.9%; left: 27.4%; }
      .Socket:nth-child(4) { top: 59.7%; left: 45.3%; }
      .Socket:nth-child(5) { top: 68.9%; left: 59.75%; }
      .Socket:nth-child(6) { top: 60.7%; left: 79.3%; }

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

      /* = Feature
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

      .Feature {
        color: #586983;
        margin-bottom: 30px;
        line-height: 24px;
        font-size: 14px;
      }

      .Feature a {
        margin-top: 10px;
      }

      .Feature p + p {
        margin-top: 10px;
      }

      .Feature__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        color: #ffffff;
        margin-bottom: 7px;
      }

      @media screen and (min-width: 630px) {
        .Feature-list {
          display: flex;
          flex-wrap: wrap;
          margin-left: -30px;
        }

        .Feature {
          width: 50%;
          padding-left: 30px;
        }

        .Feature--full {
          flex: 100%;
        }
      }

      @media screen and (min-width: 960px) {
        .Feature {
          flex-basis: 50%;
        }

        .Feature--full {
          flex: 100%;
        }

        .Feature:nth-child(4),
        .Feature:nth-child(5),
        .Feature:nth-child(7) {
          margin-top: -30px;
        }

        .Feature__inner {
          max-width: 460px;
        }
      }

      /* = Other
       * ==================================================================== */
      @media screen and (max-width: 780px) {
        .HiddenAtSm {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default RegistriesSection
