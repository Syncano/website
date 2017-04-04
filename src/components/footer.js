import Nav from './nav'
import Hexagon from '../components/hexagon'

const Footer = () => (
  <footer className='Footer u-wrapper'>
    <div className='HiddenAtSm'>
      <Hexagon width={18} fill='#05a5b4' position={{bottom: '90px', left: '-40px'}} />
      <Hexagon width={48} fill='#b4f1d9' position={{bottom: '90px', right: '15%'}} />
      <Hexagon width={78} fill='#b4f1d9' position={{bottom: '-20px', left: '20%'}} />
      <Hexagon width={32} fill='#b4f1d9' position={{top: '40px', right: '-5%'}} />
      <Hexagon width={32} fill='#05a5b4' position={{bottom: '-20px', right: '-8%'}} />
    </div>

    <div className='Navigation u-grid'>
      <div className='Navigation__column'>
        <h5 className='Navigation__head'>Company</h5>
        <Nav stack>
          <a className='Navigation__link' href='#'>About us</a>
          <a className='Navigation__link' href='#'>Jobs</a>
          <a className='Navigation__link' href='#'>Terms of Service</a>
          <a className='Navigation__link' href='#'>Privacy Policy</a>
          <a className='Navigation__link' href='#'>Privacy Shield</a>
        </Nav>
      </div>
      <div className='Navigation__column'>
        <h5 className='Navigation__head'>Product</h5>
        <Nav stack>
          <a className='Navigation__link' href='#'>Features</a>
          <a className='Navigation__link' href='#'>Plans &amp; Pricing</a>
          <a className='Navigation__link' href='#'>Customers</a>
          <a className='Navigation__link' href='#'>Help &amp; Status</a>
          <a className='Navigation__link' href='#'>Blog</a>
        </Nav>
      </div>
      <div className='Navigation__column'>
        <h5 className='Navigation__head'>Resources</h5>
        <Nav stack>
          <a className='Navigation__link' href='#'>Getting Started</a>
          <a className='Navigation__link' href='#'>Documentation</a>
          <a className='Navigation__link' href='#'>Libraries</a>
          <a className='Navigation__link' href='#'>Turorials</a>
          <a className='Navigation__link' href='#'>API Reference</a>
        </Nav>
      </div>
      <div className='Navigation__column'>
        <h5 className='Navigation__head'>For developers</h5>
        <Nav stack>
          <a className='Navigation__link' href='#'>iOS developers</a>
          <a className='Navigation__link' href='#'>Android developers</a>
          <a className='Navigation__link' href='#'>Web developers</a>
          <a className='Navigation__link' href='#'>React developers</a>
        </Nav>
      </div>
      <div className='Navigation__column'>
        <h5 className='Navigation__head'>More</h5>
        <Nav stack>
          <a className='Navigation__link' href='#'>For Investors</a>
          <a className='Navigation__link' href='#'>For Enterprise</a>
          <a className='Navigation__link' href='#'>Our team</a>
          <a className='Navigation__link' href='#'>Case studies</a>
        </Nav>
      </div>
      <div className='Navigation__column'>
        <h5 className='Navigation__head'>Connect</h5>
        <Nav stack>
          <a className='Navigation__link' href='#'>Twitter</a>
          <a className='Navigation__link' href='#'>Github</a>
          <a className='Navigation__link' href='#'>Facebook</a>
          <a className='Navigation__link' href='#'>LinkedIn</a>
          <a className='Navigation__link' href='#'>Contact us</a>
        </Nav>
      </div>
    </div>

    <div className='Copyrights'>&copy; 2017 by Syncano. All rights reserved.</div>

    <style jsx>{`
      .Footer {
        max-width: 1240px;
        padding-bottom: 30px;
        position: relative;
      }

      @media screen and (min-width: 560px) {
        .Footer {
          padding-bottom: 60px;
        }
      }

      .Navigation {
        justify-content: space-between;
      }

      .Navigation__column {
        margin-bottom: 30px;
      }

      .Navigation__head {
        color: #2f3339;
        font-weight: 500;
        line-height: 36px;
        font-size: 16px;
      }

      .Navigation__link {
        text-decoration: none;
        line-height: 28px;
        color: #7a7f87;
      }

      .Navigation__link:hover {
        text-decoration: underline;
      }

      .Copyrights {
        text-align: center;
        margin-top: 30px;
        color: rgba(141, 146, 153, .5);
      }

      @media screen and (max-width: 960px) {
        .HiddenAtSm {
          display: none;
        }
      }
    `}</style>
  </footer>
)

export default Footer
