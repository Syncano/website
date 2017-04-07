import {connect} from 'zefir/utils'
import Slider from '../../../components/ui/slider'
import Arrow from './arrow.svg'

const PricingEstimate = ({
  calls, seconds, handleCallsChange, handleSecondsChange
}) => (
  <div className='Estimate'>
    <div className='Estimate__group'>
      <div className='Estimate__title'>API calls per month</div>
      <div className='Estimate__help'>What is an API call?</div>
      <div className='Estimate__value'>{calls.value.toLocaleString()}</div>
      <div className='Estimate__slider'>
        <Slider {...calls} onChange={handleCallsChange} />
      </div>
    </div>

    <div className='Estimate__group'>
      <div className='Estimate__title'>Script seconds per month</div>
      <div className='Estimate__help'>What is a script second?</div>
      <div className='Estimate__value'>{seconds.value.toLocaleString()}</div>
      <div className='Estimate__slider'>
        <Slider {...seconds} onChange={handleSecondsChange} />
      </div>

      <div className='Estimate__footer'>
        <div>
          <div className='Estimate__footer-meta'>Your pricing plan</div>
          <div className='Estimate__footer-value'>Growth</div>
        </div>
        <div className='Estimate__footer-arrow'>
          <Arrow />
        </div>
        <div>
          <div className='Estimate__footer-meta'>Monthly price</div>
          <div className='Estimate__footer-value u-ta-r'>${5 + Math.floor(seconds.value / 1000 + calls.value / 1000)}</div>
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
      min: 10000,
      step: 10000,
      max: 5000000,
      value: 1000000
    },
    seconds: {
      min: 10000,
      step: 10000,
      max: 5000000,
      value: 600000
    }
  }
}

export default connect(PricingEstimate)
