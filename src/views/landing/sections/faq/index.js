import Hexagon from '../../../../components/hexagon'
import Testimonials from '../testimonials'

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
          <h4 className='FAQ__title'>How is Syncano different from Heroku?</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>How does Syncano scale with my app?</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>Can I cancel my subscription any time?</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>What payment options do you offer?</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>What if I use up all my account limits?</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
        </div>
        <div className='FAQ'>
          <h4 className='FAQ__title'>What if 30 days of trial is not enough?</h4>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>
        </div>
      </div>

      <div className='CTA'>
        <a href=''>See complete FAQ</a>, <a href=''>ask your own question</a>, <a href=''>read the docs</a> or <a href=''>join our Slack channel</a> to get instant answers.
      </div>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
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
        max-width: 1230px;
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
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -30px;
          margin-left: -30px;
        }

        .FAQ {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 960px) {
        .FAQ {
          width: 33.33333%;
        }
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
