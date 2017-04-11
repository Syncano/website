import {connect} from 'zefir/utils'
import Slider from '../../../components/ui/slider'
import Arrow from './arrow.svg'

const SECONDS_MAX = 20000000
const SECONDS_MIN = 270000

const CALLS_MAX = 100000000
const CALLS_MIN = 1000000

const PricingEstimate = ({
  calls, seconds, handleCallsChange, handleSecondsChange, price
}) => (
  <div className='Estimate'>
    {(() => {
      const secondsPrice = Math.floor(
        seconds.value / SECONDS_MIN * 5 - // calculate base price
        ((seconds.value - SECONDS_MIN) * 122 / SECONDS_MAX) // calculate discount
      )

      const callsPrice = Math.floor(
        calls.value / CALLS_MIN * 20 - // calculate base price
        ((calls.value - CALLS_MIN) * 757 / CALLS_MAX) // calculate discount
      )

      price = callsPrice + secondsPrice
      // price = -14 + Math.floor(seconds.value / 100000 + calls.value / 5 / 2700)
    })()}
    <div className='Estimate__group'>
      {/* TODO: Handle max value */}
      <div className='Estimate__title'>API calls per month</div>
      <div className='Estimate__value'>{calls.value.toLocaleString()}</div>
      <div className='Estimate__slider'>
        <Slider {...calls} onChange={handleCallsChange} />
      </div>
    </div>

    <div className='Estimate__group'>
      <div className='Estimate__title'>Script seconds per month</div>
      <div className='Estimate__value'>{seconds.value.toLocaleString()}</div>
      <div className='Estimate__slider'>
        <Slider {...seconds} onChange={handleSecondsChange} />
      </div>

      <div className='Estimate__footer'>
        <div>
          <div className='Estimate__footer-meta'>Your pricing plan</div>
          <div className='Estimate__footer-value'>{
            price === 25 ? 'Base' : 'Growth'
          }</div>
        </div>
        <div className='Estimate__footer-arrow'>
          <Arrow />
        </div>
        <div>
          <div className='Estimate__footer-meta'>Monthly price</div>
          <div className='Estimate__footer-value u-ta-r'>${price}</div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .Estimate {
        border-radius: 6px;
        background-color: #ffffff;
        box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
        border: solid 1px rgba(11, 15, 21, 0.05);
        padding: 30px;
      }

      .Estimate__group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }

      .Estimate__group + .Estimate__group {
        margin-top: 25px;
      }

      .Estimate__title {
        font-size: 16px;
        color: #2f3339;
        padding-right: 15px;
      }

      .Estimate__help {
        font-size: 12px;
        color: #3871d0;
      }

      .Estimate__value {
        margin-left: auto;
        font-weight: 500;
        color: #0b0f15;
      }

      .Estimate__slider {
        flex: 100%;
        margin-top: 8px;
      }

      .Estimate__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
      }

      .Estimate__footer-meta {
        font-size: 12px;
        color: #7a7f87;
      }

      @media screen and (max-width: 450px) {
        .Estimate__footer-arrow {
          display: none;
        }
      }


      .Estimate__footer-value {
        font-size: 24px;
        font-weight: bold;
        color: #0b0d11;
        margin-top: 5px;
      }
    `}</style>
  </div>
)

PricingEstimate.init = ({
  form: {fields: {calls, seconds}, setValue}
}) => {
  return {
    calls,
    seconds,
    handleCallsChange: value => setValue('calls', value),
    handleSecondsChange: value => setValue('seconds', value)
  }
}

PricingEstimate.form = {
  formName: 'PricingEstimateForm',
  fields: {
    calls: {
      min: CALLS_MIN,
      step: 1000000,
      max: CALLS_MAX,
      value: CALLS_MIN * 10
    },
    seconds: {
      min: SECONDS_MIN,
      step: 10000,
      max: SECONDS_MAX,
      value: SECONDS_MIN * 5
    }
  }
}

export default connect(PricingEstimate)
