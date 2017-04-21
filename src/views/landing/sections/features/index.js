import AutomationSDKIcon from './icon-automation-sdk.svg'
import CommunityIcon from './icon-community.svg'
import SocketRegistryIcon from './icon-socket-registry.svg'
import CloudOSIcon from './icon-cloud-os.svg'
import Hexagon from '../../../../components/ui/hexagon'
import Link from '../../../../components/ui/link'
import Grid from '../../../../components/ui/grid'

const Features = () => (
  <div className='Section u-wrapper'>
    <Hexagon width={32} fill='#05A5B4' position={{top: '20px', right: '-20px'}} />

    <div className='Section__header u-ta-c'>
      <h2 className='u-title'>At Syncano, we want to help you build technology that matters, faster</h2>
      <p className='u-subtitle'>
        Syncano’s Serverless Platform and SDKs automatically assemble and deploy your backend to the cloud instantaneously - all while you build your app.
      </p>
    </div>

    <div className='Section__content'>
      <Grid wrap>
        <div className='Heading'>
          <p className='Heading__item Heading__item--important'>
            Use Syncano to experiment and test your product with real users on a live production platform until you achieve product/market fit. Get results faster than with any other solution. Adapt, tweak and deploy at blazing speed.
          </p>
          <p className='Heading__item'>
            Take the risk and friction out of application development.
            As you grow, Syncano grows with you - Syncano’s infrastructure will automatically scale to support your needs.
          </p>
        </div>
        <div className='Feature-list'>
          <div className='Feature'>
            <Link to={{
              pathname: '/features',
              hash: '#RegistriesSection'
            }}>
              <div className='Feature__inner'>
                <div className='Feature__icon'>
                  <SocketRegistryIcon />
                </div>
                <h4 className='Feature__title'>Syncano Registry</h4>
                <p>
                  Don’t rebuild what has already been built. The registry is your toolbox of reusable backend code.
                </p>
              </div>
            </Link>
          </div>
          <div className='Feature'>
            <Link to={{
              pathname: '/features',
              hash: '#AutomationSDKSection'
            }}>
              <div className='Feature__inner'>
                <div className='Feature__icon'>
                  <AutomationSDKIcon />
                </div>
                <h4 className='Feature__title'>Syncano Automation SDK</h4>
                <p>
                  Operate your backend directly from your local development environment. No, weird GUIs, no hassle, more efficiency!
                </p>
              </div>
            </Link>
          </div>
          <div className='Feature'>
            <Link to={{
              pathname: '/features',
              hash: '#CommunitySection'
            }}>
              <div className='Feature__inner'>
                <div className='Feature__icon'>
                  <CommunityIcon />
                </div>
                <h4 className='Feature__title'>Syncano Community</h4>
                <p>
                  Crowd + Cloud. Harness the power of our community, and give yourself more creative freedom. Share, build, collaborate.
                </p>
              </div>
            </Link>
          </div>
          <div className='Feature'>
            <Link to={{
              pathname: '/features',
              hash: '#CloudOsSection'
            }}>
              <div className='Feature__inner'>
                <div className='Feature__icon'>
                  <CloudOSIcon />
                </div>
                <h4 className='Feature__title'>Syncano Cloud OS</h4>
                <p>
                  Throw any Socket from the Registry into the Syncano Cloud OS, and its functionality becomes immediately available.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        margin-top: 30px;
        margin-bottom: 30px;
        max-width: 1080px;
        position: relative;
        z-index: 1;
      }

      .u-title {
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }

      .u-subtitle {
        max-width: 820px;
        margin-left: auto;
        margin-right: auto;
      }

      .Section__content {
        justify-content: space-between;
      }

      .Section__header {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          margin-top: 90px;
          margin-bottom: 90px;
        }

        .Section__content {
          justify-content: space-between;
        }

        .Section__header {
          margin-top: 90px;
          margin-bottom: 90px;
        }
      }

      @media screen and (min-width: 1080px) {
        .Section {
          margin-top: 140px;
          margin-bottom: 140px;
        }
      }

      /* = HEADING
       * ==================================================================== */
      .Heading {
        color: #8d9299;
        font-size: 20px;
        line-height: 30px;
      }

      @media screen and (min-width: 520px) and (max-width: 1079px) {
        .Heading {
          display: flex;
          margin-left: -30px;
        }

        .Heading__item {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 1080px) {
        .Heading {
          width: 420px;
        }
      }

      .Heading__item {
        margin-bottom: 30px;
      }

      .Heading__item--important {
        font-size: 24px;
        line-height: 36px;
        color: #0b0d11;
        font-weight: 300;
      }

      /* = FEATURE
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

      .Feature {
        width: 100%;
        display: inline-block;
        vertical-align: top;
      }

      .Feature:hover {
        text-decoration: none;
      }

      .Feature__inner {
        cursor: pointer;
        padding: 30px;
        color: rgba(255,255,255, .5);
        line-height: 24px;
        transition: all 0.2s cubic-bezier(0.94, 0.40, 0.62, 0.93);
        position: relative;
      }

      .Feature:nth-child(1) .Feature__inner {
        background-color: #3637d1;
        box-shadow: 0 10px 20px 0 rgba(54, 54, 209, 0.25);
      }

      .Feature:nth-child(2) .Feature__inner {
        background-color: #12a5b4;
        box-shadow: 0 10px 20px 0 rgba(25, 165, 179, 0.25);
      }

      .Feature:nth-child(3) .Feature__inner {
        background-color: #703ada;
        box-shadow: 0 10px 20px 0 rgba(112, 57, 218, 0.25);
      }

      .Feature:nth-child(4) .Feature__inner {
        background-color: #187eef;
        box-shadow: 0 10px 20px 0 rgba(24, 126, 239, 0.25);
      }

      .Feature__icon {
        opacity: .5;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 10px;
      }

      .Feature__title {
        display: inline-block;
        vertical-align: middle;
        color: #fff;
        font-size: 18px;
        line-height: 30px;
        font-weight: normal;
        margin-left: 20px;
        margin-bottom: 10px;
      }

      @media screen and (max-width: 519px) {
        .Feature-list {
          margin-left: -30px;
          margin-right: -30px;
        }
      }

      @media screen and (min-width: 520px) {
        .Feature-list {
          margin-left: -30px;

        }

        .Feature {
          max-width: 50%;
          padding-left: 30px;
          margin-bottom: 30px;
        }

        .Feature__inner {
          border-radius: 6px;
        }

        .Feature__icon {
          margin-bottom: 0;
          display: block;
        }

        .Feature__title {
          margin-left: 0;
          display: block;
        }
      }

      @media screen and (min-width: 1080px) {
        .Feature-list {
          width: 630px;
          margin-left: auto;
        }

        .Feature {
          max-width: 300px;
          float: none;
        }
      }

      @media screen and (min-width: 918px) {
        .Feature:nth-child(1),
        .Feature:nth-child(3) {
          float: left;
        }

        .Feature:nth-child(2),
        .Feature:nth-child(4) {
          float: right;
        }

        .Feature__inner::before {
          transition: all 0.2s cubic-bezier(0.94, 0.40, 0.62, 0.93);
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          border-radius: 6px;
          background: inherit;
          z-index: -1;
        }

        .Feature__inner:hover::before {
          transform: scale(1.1);
        }

        .Feature__inner:hover {
          transform: translateY(-5px);
        }

        .Feature__inner:hover::before {
          box-shadow: inherit;
          transform: scale(1.1);
        }
      }
    `}</style>
  </div>
)

export default Features
