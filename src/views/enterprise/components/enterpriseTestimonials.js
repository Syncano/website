import Hexagon from '../../../components/ui/hexagon'
import Avatar from '../../../components/ui/avatar'

const EnterpriseTestimonials = () => (
  <div className='Section u-wrapper'>
    <div className="HiddenAtMd">
      <Hexagon width={62} fill='#adcdf0' position={{top: '80px', right: '0px'}} />
      <Hexagon width={52} fill='#4597f2' position={{top: '55%', left: '-124px'}} />
      <Hexagon width={32} fill='#6345f2' position={{bottom: '-14%', left: '300px'}} />
    </div>
    <div className='Testimonial-list'>
    <blockquote className='Testimonial'>
      <div className='Testimonial__inner'>
        <Avatar
          src='/static/img/testimonials/sven-sunde.png'
          srcSet='/static/img/testimonials/sven-sunde.png 1x, /static/img/testimonials/sven-sunde@2x.png 2x'
          />
        <p className='Testimonial__content'>
          Syncano Sockets can greatly increase speed of configuring cloud infrastructure.
        </p>
        <footer>
          <div className='Testimonial__author'>Sven Sunde</div>
          <div className='Testimonial__author-about'>
            Country Manager AWS
          </div>
        </footer>
      </div>
    </blockquote>
      <blockquote className='Testimonial'>
        <div className='Testimonial__inner'>
          <Avatar
            src='/static/img/testimonials/halvor-lande.png'
            srcSet='/static/img/testimonials/halvor-lande.png 1x, /static/img/testimonials/halvor-lande@2x.png 2x'
            />
          <p className='Testimonial__content'>
            We chose to work with Syncano to create MVPs faster, and to increase the speed of experimentation with Fintech.
          </p>
          <footer>
            <div className='Testimonial__author'>Halvor Lande</div>
            <div className='Testimonial__author-about'>
              Head of Business Development Innovation and Digitization at DNB
            </div>
          </footer>
        </div>
      </blockquote>
      <blockquote className='Testimonial'>
        <div className='Testimonial__inner'>
          <Avatar
            src='/static/img/testimonials/ingar-bentzen.png'
            srcSet='/static/img/testimonials/ingar-bentzen.png 1x, /static/img/testimonials/ingar-bentzen@2x.png 2x'
            />
          <p className='Testimonial__content'>
            Syncano helps the startups in our Fintech and Insurtech accelerator programs to reach product market fit faster.
          </p>
          <footer>
            <div className='Testimonial__author'>Ingar S. Bentzen</div>
            <div className='Testimonial__author-about'>
              CEO, The Factory
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
        margin: 0 auto;
      }

      /* = TESTIMONIAL
       * ==================================================================== */

      @media screen and (min-width: 1280px) {
        .Testimonial-list {
          margin-top: -90px;
        }
      }

      @media screen and (max-width: 1279px) {
        .Testimonial-list {
          margin-top: 36px;
        }
      }

      @media screen and (min-width: 560px) {
        .Testimonial-list {
          position: relative;
          z-index: 2;
          padding-top: 0;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          margin-left: -30px;
          margin-bottom: -30px;
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
        box-shadow: 0 10px 20px 8px rgba(11, 15, 21, 0.1);
        padding: 30px;
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

      @media screen and (max-width: 960px) {
        .HiddenAtMd {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default EnterpriseTestimonials
