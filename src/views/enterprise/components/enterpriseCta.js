import {connect} from 'zefir/utils'
import Button from '../../../components/ui/button'
import Hexagon from '../../../components/ui/hexagon'
import {MatchAsGuest} from '../../../components/ui/router'

const EnterpriseCTA = ({toggleBookMeetingModal}) => (
  <MatchAsGuest component={() => (
    <div className='Section u-wrapper u-ta-c'>
      <h3 className='u-title'>Let&#8217;s talk</h3>
      <p className='u-subtitle'>We’d love to have a chat about how your organization can leverage the power of Syncano</p>

      <div className='Split'>
        <Button primary onClick={toggleBookMeetingModal}>Book a meeting now</Button>
      </div>

      <div className='HiddenAtSm'>
        <Hexagon width={100} fill='#b4f1d9' position={{top: '-80px', left: '-60px'}} opacity='.25' />
        <Hexagon width={24} fill='#60e0ae' position={{top: '0px', left: '150px'}} />
        <Hexagon width={42} fill='#b4f1d9' position={{top: '-70px', left: '23%'}} />
        <Hexagon width={32} fill='#05a5b4' position={{top: '90px', left: '18%'}} />
        <Hexagon width={32} fill='#b4f1d9' position={{top: '-140px', right: '45%'}} opacity='.5' />
        <Hexagon width={24} fill='#60e0ae' position={{top: '-70px', right: '20%'}} />
        <Hexagon width={42} fill='#b4f2da' position={{top: '-40px', right: '16%'}} />
        <Hexagon width={64} fill='#b4f1d9' position={{top: '-140px', right: '6%'}} opacity='.5' />
        <Hexagon width={24} fill='#05a5b4' position={{bottom: '20px', right: '5%'}} />
        <Hexagon width={14} fill='#60e0ae' position={{bottom: '-95px', left: '41%'}} />
        <Hexagon width={32} fill='#b4f1d9' position={{bottom: '-120px', left: '44%'}} opacity='.5' />
        <Hexagon width={24} fill='#60e0ae' position={{bottom: '-90px', right: '40%'}} />
      </div>

      <style jsx>{`
        /* = SECTION
         * ==================================================================== */
        .Section {
          margin-top: 60px;
          margin-bottom: 60px;
          position: relative;
        }

        @media screen and (min-width: 560px) {
          .Section {
            margin-top: 90px;
            margin-bottom: 90px;
          }
        }

        @media screen and (min-width: 960px) {
          .Section {
            margin-top: 190px;
            margin-bottom: 190px;
          }
        }

        /* = SPLIT
         * ==================================================================== */
        .Split {
          margin-top: 30px;
          margin-left: -10px;
          margin-bottom: -15px;
        }

        .Split :global(*) {
          margin-bottom: 15px;
          margin-left: 10px;
        }

        @media screen and (max-width: 960px) {
          .HiddenAtSm {
            display: none;
          }
        }
      `}</style>
    </div>
  )} />
)

EnterpriseCTA.init = ({
  services: {ui: {toggleModal}}
}) => ({
  toggleBookMeetingModal: e => {
    window.analytics.track('Book Meeting Modal Opened')
    toggleModal('meeting')
  }
})

export default connect(EnterpriseCTA)
