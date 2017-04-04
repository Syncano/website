import AutomationSDKIcon from './icon-automation-sdk.svg'
import CommunityIcon from './icon-community.svg'
import SocketRegistryIcon from './icon-socket-registry.svg'
import CloudOSIcon from './icon-cloud-os.svg'
import Hexagon from '../../../../components/hexagon'

const Innovation = () => (
  <div className='Section u-wrapper'>
    <Hexagon width={32} fill='#05A5B4' position={{top: '20px', right: '70px'}} />

    <div className='Section__header u-ta-c'>
      <h2 className='u-title'>Meet Syncano</h2>
      <p className='u-subtitle'>
        A complete solution for faster software development
      </p>
    </div>

    <div className='Section__content u-grid'>
      <div className='Heading'>
        <p className='Heading__item Heading__item--important'>
          Syncano is a platform where you solve problems quickly by reusing and reconfiguring pieces of existing code.
        </p>
        <p className='Heading__item'>
          You can continuously deliver, rapidly experiment and test your product with the real users until you get the market approval. Once your product hits off, it will scale unlimitedly with no extra effort on Syncano's infrastructure.
        </p>
      </div>
      <div className='Feature-list'>
        <a className='Feature'>
          <div className='Feature__inner'>
            <div className='Feature__icon'>
              <SocketRegistryIcon />
            </div>
            <h4 className='Feature__title'>Syncano Registry</h4>
            <p>
              Assemble your project from reusable, existing components and backend blueprints created by the community.
            </p>
          </div>
        </a>
        <a className='Feature'>
          <div className='Feature__inner'>
            <div className='Feature__icon'>
              <AutomationSDKIcon />
            </div>
            <h4 className='Feature__title'>Automation SDK</h4>
            <p>
              Automatically build and sync your project into the cloud.
            </p>
          </div>
        </a>
        <a className='Feature'>
          <div className='Feature__inner'>
            <div className='Feature__icon'>
              <CommunityIcon />
            </div>
            <h4 className='Feature__title'>Community</h4>
            <p>
              Reach the community to build missing project pieces at massive scale.
            </p>
          </div>
        </a>
        <a className='Feature'>
          <div className='Feature__inner'>
            <div className='Feature__icon'>
              <CloudOSIcon />
            </div>
            <h4 className='Feature__title'>Cloud OS</h4>
            <p>
              Scale unlimitedly and pay only for what you really use.
            </p>
          </div>
        </a>
      </div>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        margin-top: 30px;
        margin-bottom: 30px;
        max-width: 980px;
        position: relative;
        z-index: 1;
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

      @media screen and (min-width: 960px) {
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

      @media screen and (min-width: 520px) and (max-width: 917px) {
        .Heading {
          display: flex;
          margin-left: -30px;
        }

        .Heading__item {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 918px) {
        .Heading {
          width: 340px;
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

      @media screen and (min-width: 918px) {
        .Feature-list {
          width: 530px;
        }

        .Feature {
          max-width: 250px;
          float: none;
        }
      }

      @media screen and (min-width: 918px) {
        .Feature:nth-child(1),
        .Feature:nth-child(4) {
          float: left;
        }

        .Feature:nth-child(2),
        .Feature:nth-child(3) {
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

export default Innovation
