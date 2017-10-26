import IconTransformation from '../../../static/img/enterprise/transformation.svg'
import Hexagon from '../../../components/ui/hexagon'


const EnterpriseGraph = () => (
  <div className='Section u-wrapper'>
    <div className="EnterpriseGraph">
      <div className='Section__header u-ta-c'>
        <h2 className='u-title'>Lead the digital transformation and become a disruptor in your market.</h2>
        <h3 className='u-subtitle'>Leave the hard part to Syncano.</h3>
      </div>
      <div className="EnterpriseGraph__image">
        <IconTransformation />
      </div>
      <div className='HiddenAtSm'>
        <Hexagon width={42} fill='#4597f2' position={{bottom: '-6%', left: '-18px'}} />
      </div>
      <div className="HiddenAtMd">
        <Hexagon width={32} fill='#2699cb' position={{bottom: '-20%', right: '150px'}} />
        <Hexagon width={32} fill='#6345f2' position={{bottom: '-38%', left: '180px'}} />
        <Hexagon width={52} fill='#4597f2' position={{bottom: '-68%', right: '-1%'}} />
      </div>
    </div>
    <style jsx>{`
      .Section {
        background-image: radial-gradient(circle at 50% 50%, rgba(0, 100, 255, 0.3), rgba(0, 100, 255, 0.0)), linear-gradient(#0b0f15, #0b0f15);
      }

      .Section__header {
        padding-top: 112px;
        margin-bottom: 70px;
      }

      @media screen and (max-width: 760px) {
        .Section__header {
          margin-bottom: 20px;
        }
      }

      .Section__header .u-title {
        max-width: 754px;
        margin: 0 auto;
        color: #ffffff;
      }

      .Section__header .u-subtitle {
        color: #ffffff;
        opacity: 0.5;
      }

      .EnterpriseGraph__image {
        display: flex;
        justify-content: center;
        padding-bottom: 120px;
      }

      @media screen and (max-width: 760px) {
        .EnterpriseGraph__image {
          padding-bottom: 60px;
        }
      }

      @media screen and (max-width: 560px) {
        .HiddenAtSm {
          display: none;
        }
      }

      @media screen and (max-width: 960px) {
        .HiddenAtMd {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default EnterpriseGraph
