import Header from '../../../components/shared/header'
import IconServer from '../../../static/img/enterprise/server-check.svg'
import IconIntegrations from '../../../static/img/enterprise/code-1.svg'
import IconDevelopment from '../../../static/img/enterprise/window-code.svg'
import IconTraining from '../../../static/img/enterprise/graduation-cap.svg'
import Hexagon from '../../../components/ui/hexagon'

const EnterpriseFeatures = () => (
  <div className='Section u-wrapper'>
    <div className='Section__header u-ta-c'>
      <h2 className='u-title'>Get access to exclusive enterprise features</h2>
    </div>
    <div className="Feature-list">
      <div className="Feature">
        <div className="Feature__icon Feature__icon-server">
          <IconServer />
        </div>
        <div className="Feature__header">
          <span>Self-hosted</span>
        </div>
        <div className="Feature__text">
          Host Syncano on your infrastructure and get maximum control and security combined with the scalability of your solution.
        </div>
      </div>
      <div className="Feature">
        <div className="Feature__icon">
          <IconIntegrations />
        </div>
        <div className="Feature__header">
          <span>Custom integrations</span>
        </div>
        <div className="Feature__text">
          Easily connect your existing API’s and databases with Syncano through Sockets - scripts that execute code in the cloud and make it simple to write any integration.
        </div>
      </div>
      <div className="Feature">
        <div className="Feature__icon">
          <IconDevelopment />
        </div>
        <div className="Feature__header">
          <span>Development</span>
        </div>
        <div className="Feature__text">
          No resources? Get access to our crowd of developers who already use Syncano. They will help you build your next killer service on request.
        </div>
      </div>
      <div className="Feature">
        <div className="Feature__icon">
          <IconTraining />
        </div>
        <div className="Feature__header">
          <span>Support & Training</span>
        </div>
        <div className="Feature__text">
          Receive first-class training and support from a dedicated team of Syncano specialists working for you on-site.
        </div>
      </div>
      <div className="HiddenAtMd">
        <Hexagon width={38} fill='#4597f2' position={{bottom: '-215%', right: '24%'}} />
        <Hexagon width={28} fill='#3cdd9e' position={{bottom: '-220%', left: '18%'}} />
      </div>
      <div className="HiddenAtLg">
        <Hexagon width={26} fill='#45c5f2' position={{bottom: '-190%', right: '260px'}} />
      </div>  
    </div>
    <style jsx>{`
      .Section {
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
      }

      .Section__header {
        padding-top: 111px;
        margin-bottom: 100px;
      }

      .Section__header .u-title {
        max-width: 526px;
        margin: 0 auto;
      }

      .Feature-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        min-height: 500px;
      }

      @media screen and (min-width: 760px) and (max-width: 1280px) {
        .Feature {
          flex-basis: 40%;
        }
      }

      @media screen and (max-width: 759px) {
        .Feature {
          flex-basis: 70%;
        }
      }

      .Feature {
        max-width: 273px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 13px;
      }

      .Feature__header {
        font-weight: normal;
        font-size: 24px;
        color: #0b0f15;
        margin: 13px 0;
      }

      .Feature__icon {
        fill: #8d9299;
        font-size: 72px;
        opacity: 0.5;
      }

      .Feature__icon-server {
        font-size: 46px;
      }

      .Feature__text {
        font-size: 20px;
        line-height: 30px;
        color: #8d9299;
        text-align: center;

      }

      @media screen and (max-width: 960px) {
        .HiddenAtMd {
          display: none;
        }
      }

      @media screen and (max-width: 1280px) {
        .HiddenAtLg {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default EnterpriseFeatures
