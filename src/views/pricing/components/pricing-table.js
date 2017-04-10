import Button from '../../../components/ui/button'
import Hexagon from '../../../components/ui/hexagon'

const PricingTable = () => (
  <div className='Pricing'>
    <div className='HiddenAtSm'>
      <Hexagon width={30} fill='#7c50cd' position={{top: '10px', right: '-17px'}} />
      <Hexagon width={30} fill='#60e0ae' position={{top: '70px', left: '-17px'}} />
      <Hexagon width={45} fill='#197eee' position={{top: '50%', right: '-25px'}} />
      <Hexagon width={30} fill='#05a5b4' position={{bottom: '70px', left: '-17px'}} />
      <Hexagon width={30} fill='#3cdd9e' position={{bottom: '-13px', right: '20px'}} />
    </div>

    <div className='Pricing__header'>
      <span className='Pricing__title'>Base price</span>
      <span className='Pricing__price'>
        $25
        <span className='Pricing__price-time'>/mo</span>
      </span>
    </div>

    <ul className='Pricing__features'>
      <li>Full access to all features</li>
      <li>60 requests per second</li>
      <li>Unlimited storage</li>
      <li>16 instances (apps)</li>
      <li>8 concurrent scripts</li>
      <li>Unlimited users</li>
      <li>1,000,000 API calls</li>
      <li>270,000 Script seconds</li>
    </ul>

    <div className='Pricing__footer'>
      <Button primary full>Try free for 30 days</Button>
      <div className='Pricing__meta'>
        No credit card required
      </div>
    </div>

    <style jsx>{`
      .Pricing {
        border-radius: 6px;
        background-color: #ffffff;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
        border: solid 1px rgba(11, 15, 21, 0.05);
        padding: 25px 30px;
        position: relative;
      }

      @media screen and (max-width: 400px) {
        .HiddenAtSm {
          display: none;
        }
      }

      @media screen and (min-width: 400px) {
        .Pricing {
          padding: 40px 50px;
        }
      }

      .Pricing__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .Pricing__title {
        font-size: 24px;
        color: #7a7f87;
        vertical-align: middle;
      }

      .Pricing__price {
        font-size: 48px;
        font-weight: bold;
        color: #0b0d11;
        vertical-align: middle;
      }

      .Pricing__price-time {
        font-size: 24px;
        font-weight: normal;
      }

      .Pricing__features {
        list-style: none;
        font-size: 18px;
        color: #0b0d11;
        margin-top: 30px;
      }

      .Pricing__features li::before {
        content: '\\f00c';
        margin-right: 10px;
        font-family: FontAwesome;
        font-size: 14px;
        color: #2c59c5;
      }

      .Pricing__features li + li {
        margin-top: 16px;
      }

      .Pricing__footer {
        margin-top: 40px;
        text-align: center;
      }

      .Pricing__meta {
        margin-top: 20px;
        font-size: 14px;
        color: #7a7f87;
      }
    `}</style>
  </div>
)

export default PricingTable
