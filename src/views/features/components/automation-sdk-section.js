import CLI from '../../../components/shared/cli'
import Grid from '../../../components/ui/grid'

const AutomationSDKSection = () => (
  <div className='Section'>
    <div className='Section__inner u-wrapper'>
      <Grid wrap>
        <div className='Section__cli'>
          <CLI />
        </div>

        <div className='Section__cli-about'>
          <h3>The Syncano CLI</h3>
          <p>Manage the entire process of building and deploying from a simple, powerful and local tool on your computer. With the Syncano Command Line Interface (CLI), you never have to leave your local working environment, and the synchronization and deployment process dynamically occurs in the background. Save time and build more, faster.</p>
          <p><a href='https://syncano.github.io/syncano-node-cli/'>Syncano CLI in the docs <i className='fa fa-arrow-right' /></a></p>
          <div><a href='https://github.com/Syncano/syncano-node-cli/'>Join CLI project on GitHub <i className='fa fa-arrow-right' /></a></div>
          <div><a href='https://www.npmjs.com/package/syncano-cli'>Download CLI now <i className='fa fa-arrow-right' /></a></div>
        </div>

        <div className='Section__sdk'>
          <h2 className='u-title'>Syncano Automation SDK</h2>
          <p className='u-subtitle'>Syncano's serverless platform and your development environment (through SDKs) dynamically  assembles and deploys your app’s backend to the cloud, all while you build your app.
The technology accelerates the software development process by greatly reducing time spent deploying DevOps and managing your backend through a leaner and more dynamic building phase.</p>
          <p>
            <a href='https://syncano.github.io/syncano-node-cli/#/'>
              Automation SDK docs <i className='fa fa-arrow-right' />
            </a>
          </p>
        </div>

        <div className='Section__sdk-about'>
          <div className='Feature-list'>
            <div className='Feature Feature--full'>
              <h4 className='Feature__title'>Assembling your Syncano backend instance</h4>
              <p>Assemble functions called Syncano Sockets to customize your backend through the Automation SDK. This process happens locally, on your computer, and the Syncano Automation SDK dynamically and continuously synchronises and deploys your changes to the <a onClick={() => {
                window.scroll(0, document.getElementById('CloudOsSection').offsetTop)
              }}>Syncano Cloud OS</a>. Your customized backend lives inside your private and unique instance of the Syncano Platform, runs on the Syncano Cloud OS.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Building more IDE plugins</h4>
              <p>We want to bring the Automation SDK into your IDE on more platforms and technologies, and you’re our best advocate. <a onClick={() => window.Intercom('showNewMessage')}>Join our Automation SDK project</a> to influence what we prioritize, or to simply learn more about our roadmap.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Wouldn't AI powered backends be great?</h4>
              <p>We’re just getting started on making the development process automated and autonomous, and we’re eager to leverage Artificial Intelligence to make it even more efficient. <a onClick={() => window.Intercom('showNewMessage')}>Join our AI and Machine Learning project</a> to learn more about our software development roadmap.</p>
            </div>
          </div>
        </div>
      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
        margin-bottom: 30px;
        padding-top: 30px;
        position: relative;
      }

      .Section__inner {
        max-width: 1230px;
      }

      .Section__sdk {
        color: #8D9299;
        font-size: 20px;
        line-height: 30px;
        order: -2;
        margin-bottom: 30px;
      }

      .Section__sdk .u-subtitle {
        color: #3E434A;
      }

      .Section__sdk p + p {
        margin-top: 30px;
      }

      .Section__sdk-about {
        order: -1;
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
      }

      .Section__cli {
        display: none;
        min-height: 330px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 60px;
          margin-bottom: 60px;
        }

        .Section__cli {
          display: block;
          width: 100%;
          margin-top: 30px;
        }
      }

      @media screen and (max-width: 969px) {
        .Section__cli {
          max-width: 570px;
          margin-left: auto;
          margin-right: auto;
          min-height: 320px;
        }
      }

      @media screen and (min-width: 970px) {
        .Section {
          padding-top: 100px;
          margin-bottom: 100px;
        }

        .Section__sdk,
        .Section__sdk-about {
          order: 1;
          margin-top: 60px;
          margin-bottom: 0;
        }

        .Section__cli,
        .Section__sdk,
        .Section__cli-about,
        .Section__sdk-about {
          flex-basis: 50%;
        }

        .Section__sdk-about {
          padding-top: 30px;
        }
      }

      @media screen and (min-width: 1270px) {
        .Section__cli,
        .Section__sdk {
          flex-basis: 48%;
        }

        .Section__cli-about,
        .Section__sdk-about {
          flex-basis: 52%;
          margin-left: auto;
        }

        .Section__cli-about,
        .Section__sdk-about {
          padding-left: 80px;
        }
      }

      /* = Feature
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

      .Feature {
        color: #7a7f87;
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
        color: #2f3339;
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

export default AutomationSDKSection
