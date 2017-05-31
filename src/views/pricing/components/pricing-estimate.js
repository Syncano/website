import {connect} from 'zefir/utils'
import Slider from '../../../components/ui/slider'
import Arrow from './arrow.svg'

const SECONDS_PRICE = 5
const SECONDS_MAX = 20000000
const SECONDS_MIN = 270000

const CALLS_PRICE = 20
const CALLS_MAX = 100000000
const CALLS_MIN = 1000000

const PricingEstimate = ({
  calls, seconds, handleCallsChange, handleSecondsChange, price
}) => (
  <div className='Estimate'>
    {(() => {
      const callsPrice = Math.floor(
        calls.value / CALLS_MIN * CALLS_PRICE - // calculate base price
        ((calls.value - CALLS_MIN) * 757 / CALLS_MAX) // calculate discount
      )

      const secondsPrice = Math.floor(
        seconds.value / SECONDS_MIN * SECONDS_PRICE - // calculate base price
        ((seconds.value - SECONDS_MIN) * 122 / SECONDS_MAX) // calculate discount
      )

      price = callsPrice + secondsPrice
    })()}
    <div className='Estimate__group'>
      {/* TODO: Handle max value */}
      <div className='Estimate__title'>API calls per month <a className='Estimate__help' data-title='A request from your solution to a Syncano Socket hosted on the Syncano Cloud OS'>What is an API call?</a></div>
      <div className='Estimate__value'>{calls.value.toLocaleString()}</div>
      <div className='Estimate__slider'>
        <Slider {...calls} onChange={handleCallsChange} />
      </div>
    </div>

    <div className='Estimate__group'>
      <div className='Estimate__title'>Script seconds per month <a className='Estimate__help' data-title='The time it takes to execute the script held by a Syncano Socket on the Syncano Cloud OS'>What is a script second?</a></div>
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
        position: relative;
      }

      .Estimate__help::after {
        content: attr(data-title);
        position: absolute;
        min-width: 200px;
        bottom: 100%;
        z-index: 1;
        background-color: rgba(0,0,0, .9);
        border-radius: 6px;
        color: rgba(255,255,255, .9);
        padding: 10px 15px;
        line-height: 18px;
        left: 50%;
        transition-property: visibility, opacity, transform;
        visibility: hidden;
        opacity: 0;
        transition-duration: .25s;
        transform: translate(-50%, -10px);
      }

      .Estimate__help:focus:after,
      .Estimate__help:active:after,
      .Estimate__help:hover::after {
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -6px);
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
      value: CALLS_MIN
    },
    seconds: {
      min: SECONDS_MIN,
      step: 10000,
      max: SECONDS_MAX,
      value: SECONDS_MIN
    }
  }
}

export default connect(PricingEstimate)
