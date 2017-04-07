import Hexagon from '../../../components/ui/hexagon'
import Testimonials from '../../../components/shared/testimonials'

const FAQ = () => (
  <div className='Section'>
    <Testimonials />

    <div className='HiddenAtSm'>
      <Hexagon width={100} fill='#b4f1d9' position={{top: '60%', right: '-70px'}} />
      <Hexagon width={24} fill='#05a5b4' position={{bottom: '30px', left: '30px'}} />
    </div>

    <div className='Section__content u-wrapper'>
      <div className='FAQ-list'>
        <div className='FAQ'>
          <h4 className='FAQ__title'>What happens if I exceed my usage?</h4>
          <p>When you log into your Dashboard, you can set hard limits (absolute) and soft limits (warnings/notifications issued). If you actually exceed your usage, overage fees will appear as a separate bill at the end of the month (billing period). You can change your plan and limits at any time.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>What kind of metrics will I have access to?</h4>
          <p>Usage is accessible in your Dashboard. Easily track the number of API calls and Script executions per each Instance (app) on Syncano.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>When will I be billed?</h4>
          <p>As soon as you're ready to switch to a paid account, choose your plan and simply enter your credit card. The bill for the first month is prorated but we still give you the full month’s usage. On the 1st of every month, you are billed up front for that entire month's usage. Should you exceed your usage, you can always change your plan and/or pay the overage. Your overage will appear as a separate bill at the end of that month.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>How is a Script second measured?</h4>
          <p>A Script is measured by a Webhook, Schedule, Trigger, and automation. You’re billed for each second a Script is run. These are all explained in detail here.</p>
        </div>
      </div>

      <div className='CTA'>
        <a href=''>See complete FAQ</a> or <a href=''>ask your own question</a>.
      </div>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        margin-bottom: 30px;
        position: relative;
      }

      .Section__content {
        justify-content: space-between;
      }

      @media screen and (min-width: 560px) {
        .Section {
          margin-bottom: 60px;
        }
      }

      @media screen and (min-width: 960px) {
        .Section {
          margin-bottom: 100px;
        }
      }

      .Section__content {
        max-width: 770px;
      }

      @media screen and (min-width: 560px) {
        .Section__content {
          margin-top: 90px;
        }
      }

      /* = FAQ
       * ==================================================================== */
      .FAQ {
        color: #7a7f87;
        margin-bottom: 30px;
        line-height: 24px;
      }

      .FAQ__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        color: #2f3339;
        margin-bottom: 7px;
      }

      @media screen and (min-width: 560px) {
        .FAQ-list {
          /*display: flex;*/
          flex-wrap: wrap;
          margin-bottom: -30px;
          margin-left: -30px;
        }

        .FAQ-list::after {
          content: '';
          display: table;
          clear: both;
        }

        .FAQ {
          width: 50%;
          padding-left: 30px;
          float: left;
        }

        .FAQ:nth-child(2) {float: right;}
        .FAQ:nth-child(3) {float: right;}
      }

      /* = CTA
       * ==================================================================== */
      .CTA {
        color: #7a7f87;
        font-size: 18px;
        text-align: center;
        margin-top: 30px;
      }

      .CTA a {
        color: #2c59c5;
        text-decoration: none;
        font-weight: 500;
        line-height: 28px;
      }

      .CTA a:hover {
        text-decoration: underline;
      }

      @media screen and (min-width: 960px) {
        .CTA {
          margin-top: 70px;
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

export default FAQ
