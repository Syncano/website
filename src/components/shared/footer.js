import Nav from '../ui/nav'
import Link from '../ui/link'
import Grid from '../ui/grid'
import Hexagon from '../ui/hexagon'

const Footer = () => (
  <footer className='Footer u-wrapper'>
    <div className='HiddenAtSm'>
      <Hexagon width={18} fill='#05a5b4' position={{bottom: '90px', left: '-40px'}} />
      <Hexagon width={48} fill='#b4f1d9' position={{bottom: '90px', right: '15%'}} />
      <Hexagon width={78} fill='#b4f1d9' position={{bottom: '-20px', left: '20%'}} opacity='.5' />
      <Hexagon width={32} fill='#b4f1d9' position={{top: '40px', right: '-5%'}} />
      <Hexagon width={32} fill='#05a5b4' position={{bottom: '-20px', right: '-8%'}} />
    </div>

    <div className='Navigation'>
      <Grid wrap>
        <div className='Navigation__column'>
          <h5 className='Navigation__head'>Company</h5>
          <Nav stack>
            <Link to='/terms-of-service'>
              <span className='Navigation__link'>Terms of Service</span>
            </Link>
            <Link to='/privacy-policy'>
              <span className='Navigation__link'>Privacy Policy</span>
            </Link>
            <a href='https://www.privacyshield.gov/participant?id=a2zt0000000GnAKAA0'>
              <span className='Navigation__link'>Privacy Shield</span>
            </a>
          </Nav>
        </div>
        <div className='Navigation__column'>
          <h5 className='Navigation__head'>Product</h5>
          <Nav stack>
            <Link to='/features'>
              <span className='Navigation__link'>Features</span>
            </Link>
            <Link to='/pricing'>
              <span className='Navigation__link'>Plans &amp; Pricing</span>
            </Link>
            <a className='Navigation__link' href='http://status.syncano.com/'>Help &amp; Status</a>
          </Nav>
        </div>
        <div className='Navigation__column'>
          <h5 className='Navigation__head'>Resources</h5>
          <Nav stack>
            <a className='Navigation__link' href='https://syncano.github.io/syncano-node-cli/#/getting-started/quickstart'>Quickstart</a>
            <a className='Navigation__link' href='https://syncano.github.io/syncano-node-cli/#/'>Documentation</a>
            <a className='Navigation__link' href='https://syncano.github.io/syncano-node-cli/#/client-lib-reference/installation'>Libraries</a>
          </Nav>
        </div>
        {/* <div className='Navigation__column'>
          <h5 className='Navigation__head'>For developers</h5>
          <Nav stack>
            <a className='Navigation__link' href='#'>iOS developers</a>
            <a className='Navigation__link' href='#'>Android developers</a>
            <a className='Navigation__link' href='#'>Web developers</a>
            <a className='Navigation__link' href='#'>React developers</a>
          </Nav>
        </div> */}
        {/* <div className='Navigation__column'>
          <h5 className='Navigation__head'>More</h5>
          <Nav stack>
            <a className='Navigation__link' href='#'>For Investors</a>
            <a className='Navigation__link' href='#'>For Enterprise</a>
            <a className='Navigation__link' href='#'>Our team</a>
            <a className='Navigation__link' href='#'>Case studies</a>
          </Nav>
        </div> */}
        <div className='Navigation__column Navigation__column--split'>
          <h5 className='Navigation__head'>Connect</h5>
          <Nav stack>
            <a className='Navigation__link' href='https://twitter.com/Syncano/'>Twitter</a>
            <a className='Navigation__link' href='https://github.com/Syncano/'>Github</a>
            <a className='Navigation__link' href='https://www.facebook.com/syncano/'>Facebook</a>
            <a className='Navigation__link' href='https://www.linkedin.com/company/syncano/'>LinkedIn</a>
            <a className='Navigation__link' href='https://dribbble.com/syncano'>Dribbble</a>
            <a className='Navigation__link' href='mailto:hello@syncano.com'>Contact us</a>
          </Nav>
        </div>
      </Grid>
    </div>

    <div className='Copyrights'>&copy; 2017 by Syncano. All rights reserved.</div>

    <style jsx>{`
      .Footer {
        max-width: 880px;
        margin-top: 30px;
        padding-bottom: 30px;
        position: relative;
      }

      @media screen and (min-width: 560px) {
        .Footer {
          margin-top: 60px;
          padding-bottom: 60px;
        }
      }

      @media screen and (min-width: 960px) {
        .Footer {
          margin-top: 90px;
        }
      }

      .Navigation {
        justify-content: space-between;
      }

      .Navigation__column {
        margin-bottom: 30px;
        flex: 1;
      }

      .Navigation__column--split :global(ul) {
        width: 230px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      .Navigation__column--split :global(li) {
        flex-basis: 50%;
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
