import Hexagon from '../../../components/ui/hexagon'
import Grid from '../../../components/ui/grid'
import PricingEstimate from '../components/pricing-estimate'

const Scaling = () => (
  <div className='Section u-wrapper'>
    <div className='HiddenAtSm'>
      <Hexagon width={32} fill='#05A5B4' position={{top: '20px', right: '70px'}} />
    </div>

    <div className='Section__header u-ta-c'>
      <h2 className='u-title'>Syncano scales with you</h2>
      <p className='u-subtitle'>
        Your app will always get the capacity it needs - and you only pay for what you use.
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
            Pay fair overage rates when you see the number of app users skyrocket and exceed the limits of your current plan. We give a progressive discount, so bigger volume means lower unit prices.
          </p>
        </div>
        <div className='PricingEstimate'>
          <PricingEstimate />

          <a className='PricingEstimate__contact' href='mailto:hello@syncano.com'>Contact us for enterprise pricing</a>
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

      .Section__header .u-subtitle {
        max-width: 480px;
        margin-left: auto;
        margin-right: auto;
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

      @media screen and (max-width: 935px) {
        .Heading__title {
          display: none;
        }
      }

      @media screen and (min-width: 520px) and (max-width: 935px) {
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

      @media screen and (min-width: 936px) {
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

      .PricingEstimate__contact {
        margin-top: 30px;
        display: inline-block;
        font-size: 20px;
        line-height: 30px;
      }

      @media screen and (max-width: 935px) {
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
