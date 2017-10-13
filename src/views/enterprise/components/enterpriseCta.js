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
        <Hexagon width={36} fill='#b4f1d9' position={{bottom: '-40px', left: '32%'}} />
        <Hexagon width={24} fill='#6345f2' position={{bottom: '10px', right: '30%'}} />
        <Hexagon width={80} fill='#4597f2' position={{bottom: '-140px', right: '-36px'}} />
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
