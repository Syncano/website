import Hexagon from '../../../components/hexagon'
import Grid from '../../../components/grid'
import PricingEstimate from '../components/pricing-estimate'

const Scaling = () => (
  <div className='Section u-wrapper'>
    <div className='HiddenAtSm'>
      <Hexagon width={32} fill='#05A5B4' position={{top: '20px', right: '70px'}} />
    </div>

    <div className='Section__header u-ta-c'>
      <h2 className='u-title'>Syncano scales with you</h2>
      <p className='u-subtitle'>
        Don’t worry about scaling. It’ll be done automatically.
      </p>
    </div>

    <div className='Section__content'>
      <Grid wrap>
        <div className='Heading'>
          <h3 className='Heading__title'>Estimated monthly cost</h3>
          <p className='Heading__item Heading__item--important'>
            Apps come in different shapes and sizes. As you grow, you can adjust your plan based on your needs.
          </p>
          <p className='Heading__item'>
            Pay fair overage rates when you see the number of your users skyrocket and exceed the limits of your current plan.
          </p>
        </div>
        <div className='PricingEstimate'>
          <PricingEstimate />
        </div>
      </Grid>
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

      .Heading__title {
        font-size: 16px;
        color: #0b0d11;
        font-weight: 400;
        margin-bottom: 20px;
      }

      @media screen and (max-width: 917px) {
        .Heading__title {
          display: none;
        }
      }

      @media screen and (min-width: 520px) and (max-width: 917px) {
        .Heading {
          display: flex;
          flex-wrap: wrap;
          margin-left: -30px;
        }

        .Heading__item {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 918px) {
        .Heading {
          width: 400px;
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

      .PricingEstimate {
        width: 55%;
        margin-left: auto;
      }

      @media screen and (max-width: 917px) {
        .PricingEstimate {
          width: 100%;
        }
      }

      @media screen and (max-width: 780px) {
        .HiddenAtSm {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Scaling