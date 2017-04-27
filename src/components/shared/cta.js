import {connect} from 'zefir/utils'
import Button from '../ui/button'
import Hexagon from '../ui/hexagon'
import {MatchAsGuest} from '../ui/router'

const CTA = ({toggleSignUpModal}) => (
  <MatchAsGuest component={() => (
    <div className='Section u-wrapper u-ta-c'>
      <h3 className='u-title'>Ready to get started?</h3>
      <p className='u-subtitle'>Try Syncano for free for 30 days. No credit card required.</p>

      <div className='Split'>
        <Button primary onClick={toggleSignUpModal}>Start free trial</Button>
        {/* TODO: Will be replaced with modal form */}
        {/* <Button outline onClick={() => hj('trigger', 'notConvinced')}>I'm not convinced</Button> */}
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

CTA.init = ({
  services: {ui: {toggleModal}}
}) => ({
  toggleSignUpModal: () => {
    window.analytics.track('Guest clicked CTA button')

    toggleModal('signup')
  }
})

export default connect(CTA)
