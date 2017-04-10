import Grid from '../../../components/ui/grid'

const RegistriesSection = () => (
  <div className='Section'>
    <div className='Section__inner u-wrapper'>
      <div className='Section__column Section__column--header'>
        <h2 className='u-title'>Socket Registries</h2>
        <p className='u-subtitle'>We have a registry with 100s of ready to use components and backend blueprints, all created by the community, and that you can immediately start using to compose your dedicated and customized backend.</p>
      </div>

      <Grid wrap>
        <div className='Section__column Section__column--primary'>
          <h2 className='u-title'>Syncano Sockets</h2>
          <p className='u-subtitle'>One of core concepts of the Syncano serverless cloud platform is the standardised backend building blocks which we call Syncano Sockets.</p>
          <p>A Syncano Socket has one single and clear purpose —whether it is sending an email, translating a text file, or analysing a web page.</p>
          <p>A Syncano Socket is defined in such a way that it can be connected to any other Syncano Socket, kinda the way LEGO works. Combining Syncano Sockets enables you to assemble tailor-made backends at lightning speed.</p>
        </div>

        <div className='Section__column Section__column--secondary Feature-list'>
          <div className='Feature Feature--full'>
            <h4 className='Feature__title'>Assembling your backend instance</h4>
            <p>Through the Automation SDK you assemble the functions we call Syncano Sockets for your customized backend. You do the assembling process locally on your computer and the Syncano Automation SDK synchronises and deploys your changes to the Syncano cloud OS automatically -and continuously. Your customized backend lives inside your private and unique instance of the Syncano platform, held by the Syncano OS.</p>
          </div>
          <div className='Feature'>
            <h4 className='Feature__title'>IDE plugins</h4>
            <p>We are working on bringing the Automation SDK all the way into your IDE on more platforms and technologies, and we would appreciate your help. Join our Automation SDK project to influence which IDE to prioritize or just to get to know more about our plans by <a href=''>sending us an email</a>.</p>
          </div>
          <div className='Feature'>
            <h4 className='Feature__title'>Automatic backend</h4>
            <p>We are also working on making the building process even smarter and more automated by the usage of Artificial Intelligence. <a href=''>Join our AI and Machine Learning project</a> to know more about our software building software plans.</p>
          </div>
        </div>
      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        /*background:
          radial-gradient(1336.54px at 49.58% 17.9%, rgba(54, 55, 209, 0.25) 0%, rgba(54, 55, 209, 5e-05) 100%),
          linear-gradient(0deg, rgba(11, 15, 21, 0.0001) 10.07%, #0B0F15 29.24%);*/
        background: #101038;
        margin-bottom: 30px;
        padding-top: 30px;
        position: relative;
      }

      .u-title {
        color: #ffffff;
      }

      /* ==================================================================== */

      .Section__column--header .u-subtitle {
        color: #6382aa;
        font-weight: 400;
        line-height: 30px;
      }

      /* ==================================================================== */

      .Section__column--primary {
        margin-top: 30px;
        font-size: 20px;
        line-height: 30px;
        color: #6b7d95;
      }

      .Section__column--primary .u-subtitle {
        color: #b0bed0;
        margin-bottom: 20px;
      }

      .Section__column--primary p + p {
        margin-top: 20px;
      }

      /* ==================================================================== */

      .Section__column--secondary {
        margin-top: 30px;
        font-size: 20px;
        line-height: 30px;
        color: #6b7d95;
      }

      /*.Section__inner {
        max-width: 1230px;
      }*/

      /*.Section__sdk {
        color: #8D9299;
        font-size: 20px;
        line-height: 30px;
        margin-bottom: 30px;
      }

      .Section__sdk .u-subtitle {
        color: #3E434A;
      }

      .Section__sdk p + p {
        margin-top: 30px;
      }

      .Section__cli-about {
        flex: 1;
        font-size: 20px;
        line-height: 30px;
        flex: 100%;
        color: #8d9299;
        margin-top: 30px;
      }

      .Section__cli-about p + p {
        margin-top: 20px
      }

      .Section__cli-about h3 {
        font-size: 24px;
        font-weight: 400;
        color: #2f3339;
        margin-bottom: 15px;
      }*/

      .Section__cli {
        display: none;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 60px;
          margin-bottom: 60px;
        }
      }

      @media screen and (min-width: 970px) {
        .Section {
          padding-top: 100px;
          margin-bottom: 100px;
        }
      }

      @media screen and (min-width: 1100px) {
        /*.Section__cli,
        .Section__sdk {
          flex-basis: 42%;
        }

        .Section__cli-about,
        .Section__sdk-about {
          flex-basis: 58%;
        }

        .Section__cli-about,
        .Section__sdk-about {
          padding-left: 130px;
        }*/
      }

      /* = Feature
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

      .Feature {
        color: #8b9cb5;
        margin-bottom: 30px;
        line-height: 24px;
        font-size: 14px;
      }

      .Feature a {
        margin-top: 10px;
      }

      .Feature p + p {
        margin-top: 10px;
      }

      .Feature__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67;
        color: #ffffff;
        margin-bottom: 7px;
      }

      @media screen and (min-width: 560px) {
        .Feature-list {
          display: flex;
          flex-wrap: wrap;
          margin-left: -30px;
        }

        .Feature {
          width: 50%;
          padding-left: 30px;
        }

        .Feature--full {
          flex: 100%;
        }
      }

      @media screen and (min-width: 960px) {
        .Feature {
          flex-basis: 50%;
        }

        .Feature--full {
          flex: 100%;
        }

        .Feature:nth-child(4),
        .Feature:nth-child(5),
        .Feature:nth-child(7) {
          margin-top: -30px;
        }

        .Feature__inner {
          max-width: 460px;
        }
      }

      /* = Other
       * ==================================================================== */
      @media screen and (max-width: 780px) {
        .HiddenAtSm {
          display: none;
        }
      }

      .fa-arrow-right {
        font-size: 12px;
        top: -2px;
        position: relative;
        transform: translateX(3px);
        transition: transform .25s;
      }

      a:hover .fa-arrow-right {
        transform: translateX(5px);
      }
    `}</style>
  </div>
)

export default RegistriesSection
