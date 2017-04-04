import Hexagon from '../../../../components/hexagon'
import Icon from './icon.svg'

const Testimonials = () => (
  <div className='Section u-wrapper'>
    <Hexagon width={64} fill='#05b470' position={{top: '-22px', left: '-50px'}} />
    <Hexagon width={42} fill='#b4f2da' position={{bottom: '-35px', left: '-40px'}} />

    <div className='Testimonial-list'>
      <blockquote className='Testimonial'>
        <div className='HiddenAtSm'>
          <Hexagon width={32} fill='#60e0ae' position={{bottom: '-15px', right: '20px'}} />
        </div>

        <div className='Testimonial__inner'>
          <Icon className='Testimonial__avatar' />
          <p className='Testimonial__content'>
            Syncano is among the most mature in the serverless space.
          </p>
          <footer>
            <div className='Testimonial__author'>The News Stack</div>
            <a href='' className='Testimonial__author-about'>
              TNS Guide to Serverless technologies
            </a>
          </footer>
        </div>
      </blockquote>
      <blockquote className='Testimonial'>
        <Hexagon width={42} fill='#60e0ae' position={{top: '-25px', right: '15px'}} />
        <Hexagon width={32} fill='#b4f2da' position={{bottom: '-45px', right: '20px'}} />

        <div className='Testimonial__inner'>
          <img
            src='/static/testimonials/nikolai-fasting.png'
            srcSet='/static/testimonials/nikolai-fasting.png 1x, /static/testimonials/nikolai-fasting@2x.png 2x'
            rel='presentation'
            className='Testimonial__avatar'
            />
          <p className='Testimonial__content'>
            We are entering an era where software builds software. Syncano is a pioneer in that evolution.
          </p>
          <footer>
            <div className='Testimonial__author'>Nikolai Fasting</div>
            <div className='Testimonial__author-about'>
              CEO & Founder, Syncano
            </div>
          </footer>
        </div>
      </blockquote>
      <blockquote className='Testimonial'>
        <div className='Testimonial__inner'>
          <img
            src='/static/testimonials/stale-husby.png'
            srcSet='/static/testimonials/stale-husby.png 1x, /static/testimonials/stale-husby@2x.png 2x'
            rel='presentation'
            className='Testimonial__avatar'
            />
          <p className='Testimonial__content'>
            If Syncano was around at the time we created our MVP, it would have saved us a full year to get into the market.
          </p>
          <footer>
            <div className='Testimonial__author'>Ståle Husby</div>
            <div className='Testimonial__author-about'>
              CEO, Relink
            </div>
          </footer>
        </div>
      </blockquote>
      <blockquote className='Testimonial'>
        <Hexagon width={52} fill='#b4f2da' position={{bottom: '-35px', right: '20px'}} />

        <div className='Testimonial__inner'>
          <img
            src='/static/testimonials/artur-czmiel.png'
            srcSet='/static/testimonials/artur-czmiel.png 1x, /static/testimonials/artur-czmiel@2x.png 2x'
            rel='presentation'
            className='Testimonial__avatar'
            />
          <p className='Testimonial__content'>
            We managed to build, launch and succeed with our Pokemon Go map app in just 48 hours of programming.
          </p>
          <footer>
            <div className='Testimonial__author'>Artur Czemiel</div>
            <div className='Testimonial__author-about'>
              Developer & Founder, Aexol
            </div>
          </footer>
        </div>
      </blockquote>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        padding-top: 30px;
        max-width: 1230px;
        position: relative;
      }

      /* = TESTIMONIAL
       * ==================================================================== */
      @media screen and (min-width: 560px) {
        .Testimonial-list {
          position: relative;
          z-index: 2;
          padding-top: 0;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-left: -30px;
          margin-bottom: -30px;
          margin-top: -90px;
        }

        .Testimonial {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 960px) {
        .Testimonial {
          width: 25%;
        }
      }

      .Testimonial {
        margin-bottom: 30px;
        position: relative;
      }

      .Testimonial__inner {
        border-radius: 6px;
        background-color: #ffffff;
        box-shadow: 0 10px 20px 0 rgba(11, 15, 21, 0.1);
        padding: 30px;
      }

      .Testimonial__avatar {
        border-radius: 50%;
      }

      .Testimonial__content {
        font-size: 18px;
        line-height: 1.44;
        color: #0b0d11;
        margin-top: 24px;
      }

      .Testimonial__author {
        opacity: 0.8;
        line-height: 1.13;
        color: #2f3339;
        margin-top: 15px;
      }

      .Testimonial__author-about {
        font-size: 12px;
        font-style: italic;
        color: #7a7f87;
        display: block;
        line-height: 20px;
      }

      a.Testimonial__author-about {
        color: #2c59c5;
        text-decoration: none;
      }

      a.Testimonial__author-about:hover {
        text-decoration: underline;
      }

      @media screen and (max-width: 780px) {
        .HiddenAtSm {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Testimonials
