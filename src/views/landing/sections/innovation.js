import Hexagon from '../../../components/ui/hexagon'
import Grid from '../../../components/ui/grid'

const Innovation = () => (
  <div className='Section'>
    <Hexagon width={64} fill='#b4f1d9' position={{top: '-50px', left: '-32px'}} />

    <div className='Section__inner u-wrapper HiddenAtMd'>
      <Hexagon width={32} fill='#b4f1d9' position={{top: '-30px', right: '0'}} />
      <Hexagon width={64} fill='#b4f2da' position={{top: '50px', left: '0'}} />
    </div>

    <div className='Heading u-wrapper'>
      <Grid wrap>
        <div className='Heading__item Heading__item--important'>
          <b>Syncano</b> is a development platform for building more, faster by leveraging existing backend code. Developers can finally spend their time solving app specific challenges.
        </div>
        <div className='Heading__item'>
          Technology transforms the unthinkable into reality. The Pacemaker saves millions from the grief of loss. There’s still abundant untapped opportunity to change the world through the apps you build. At Syncano, we want to help you build technology that matters, faster.
        </div>
      </Grid>
    </div>
    {/*
    <div className='Section__header u-wrapper u-ta-c'>
      <h2 className='u-title'>Speed of innovation matters</h2>
      <p className='u-subtitle'>Go build something amazing!</p>
    </div> */}

    {/* <div className='Video u-wrapper'>
      <div className='Video__inner' />

      <div className='HiddenAtSm'>
        <Hexagon width={64} fill='#b4f2da' position={{bottom: '-30px', left: '15%'}} />
        <Hexagon width={32} fill='#b4f2da' position={{bottom: '-60px', left: '25%'}} />
      </div>
    </div> */}

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        margin-top: 30px;
        position: relative;
      }

      .Section__inner {
        max-width: 1170px;
        position: relative;
      }

      @media screen and (min-width: 560px) {
        .Section {
          margin-top: 90px;
          margin-bottom: -45px;
        }

        .Section__header {
          margin-top: 90px;
        }
      }

      @media screen and (min-width: 960px) {
        .Section {
          margin-top: 140px;
          margin-bottom: -90px;
        }
      }


      /* = HEADING
       * ==================================================================== */
      .Heading {
        max-width: 830px;
        color: #8d9299;
        font-size: 20px;
        line-height: 30px;
      }

      .Heading__item {
        margin-bottom: 30px;
      }

      @media screen and (min-width: 560px) {
        .Heading__item {
          width: 50%;
        }
      }

      .Heading__item--important {
        font-size: 24px;
        line-height: 36px;
        color: #0b0d11;
        font-weight: 300;
      }

      /* = VIDEO
       * ==================================================================== */
      .Video {
        max-width: 1170px;
        margin-top: 30px;
        position: relative;
      }

      @media screen and (min-width: 560px) {
        .Video {
          margin-top: 90px;
        }
      }

      .Video__inner {
        border-radius: 8px;
        padding-top: 55.6%;
        background-image: linear-gradient(119deg, #0b0f15, #3e434a);
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

export default Innovation
