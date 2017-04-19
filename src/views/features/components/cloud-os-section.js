import Grid from '../../../components/ui/grid'

const CloudOsSection = () => (
  <div className='Section'>
    <div className='Section__clouds' />
    <div className='Section__inner u-wrapper'>
      <Grid wrap>
        <div className='Section__column Section__column--primary'>
          <div className='Feature-list'>
            <div className='Feature Feature--important Feature--full'>
              <h2 className='u-title'>Cloud OS</h2>
              <p className='u-subtitle'>The Syncano Cloud OS is the core of the technical platform. It hosts and executes the Syncano Sockets that your dedicated backend consists of. It also ensures that your backend scales elastically to meets your front end’s needs.</p>
              <p>
                Today, Syncano Cloud OS runs on AWS but we ensured that it can be run on other cloud infrastructure providers like Google, Azure, IBM, et. al. We also ensured that it can be run on any private infrastructure, basically enabling the possibility run on-premise, and thus complying with <a href=''>European Safe Harbour regulations</a>, and <a href=''>EU’s Personal Data Act</a>.
              </p>
            </div>
            <div className='Feature Feature--important Feature--full'>
              <h4 className='Feature__title'>Core API</h4>
              <p>All the features of the Syncano Cloud OS can be managed through our Core API, enabling you to build powerful Syncano Sockets that have deep integrations with the Syncano Cloud OS.</p>
              <p>It reveals ways of using the underlying Cloud OS to power your own proprietary backend. This makes Syncano a safe bet, since you will never ever be stuck! Syncano is among the most mature in the serverless space. We are open-source advocates. Reach out to learn how you can contribute.</p>
            </div>
          </div>
        </div>
        <div className='Section__column Section__column--secondary'>
          <div className='Feature-list Feature-list--arrange'>
            <div className='Feature'>
              <h4 className='Feature__title'>DevOps Automation</h4>
              <p>This is the responsible part of the Cloud OS that sets up and scales the resources in the underlying infrastructure to meet your front end’s needs.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Project Sync</h4>
              <p>The backend functions you work on in your local development environment are continuously and automatically deployed to your dedicated backend running by the <a href=''>Automation SDK</a>. The Syncano Cloud OS will in turn configure the resources of the underlying infrastructure to support your front end’s needs.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>NoSQL storage</h4>
              <p>The Cloud OS provides its own built-in NoSQL solution that can be used by Syncano Sockets to store data. Syncano’s NoSQL storage can be used to store any data object types and lets you retrieve the data via built-in or customized fields for each of the objects stored. Our NoSQL storage service lets you build up advanced filtering and ordering so you can access the stored data in the way you need.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Real-time channels</h4>
              <p>The Cloud OS has a built-in publish-subscribe real-time solution that aims to support any Syncano Socket.</p>
              <p>Syncano’s real-time channels enables you to listen for changes in data, and to push real time messages to your front end or other subscriber of the data notification.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Cloud Functions</h4>
              <p>Cloud Functions are Syncano’s implementation of the server-side code and the core of Syncano Sockets. It’s the functionality that runs the code that is powering the sockets and makes sure they are executed at blazing speed with the right environment and runtime.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Web Hosting</h4>
              <p>Syncano supports production grade static hosting. It supports deploying web apps to a global CDN in a single command and deployed apps are secured by SSL certificate.</p>
            </div>
          </div>
        </div>

        <div className='Section__column Section__column--footer'>
          <div className='Feature-list'>
            <div className='Feature Feature--important Feature--full'>
              <h4 className='Feature__title'>Dashboard</h4>
              <p>The Syncano dashboard is where you can manage your account on Syncano, like billing,usage and a list of your various backend instances’ state. </p>
            </div>
          </div>

          <div>
            <div className='Browser'>
              <div className='Browser__header'><i /><i /><i /></div>
              <div className='Browser__content'>
                <img src='/static/features/dashboard.png' alt='' />
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </div>

    <style jsx>{`
      /* = SECTION
       * ==================================================================== */
      .Section {
        padding-bottom: 30px;
        padding-top: 30px;
        position: relative;
      }

      .Section__clouds {
        background-size: 100%;
        position: relative;
        padding-top: 700px;
        margin-bottom: -200px;
        background-image:  linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0) 80%, #ffffff), url(/static/features/clouds.jpg);
        background-position: top center;
        z-index: -1;
        margin-top: -350px;
        display: none;
      }

      .Section__inner {
        max-width: 1230px;
      }

      .Section__column--secondary {
        margin-top: 30px;
      }

      .Section__column--footer {
        width: 100%;
      }

      .Section__column--footer > :nth-child(2) {
        margin-top: 60px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 60px;
          padding-bottom: 60px;
        }

        .Section__column--footer > :nth-child(2) {
          margin-top: 30px;
        }
      }

      @media screen and (min-width: 970px) {
        .Section {
          padding-top: 100px;
          padding-bottom: 100px;
        }

        .Section__clouds {
          display: block;
        }

        .Section__column--primary,
        .Section__column--secondary {
          flex-basis: 50%;
        }

        .Section__column--secondary {
          margin-top: 240px;
        }

        .Section__column--footer {
          display: flex;
          align-items: flex-end;
          width: auto;
        }

        .Section__column--footer > :nth-child(1) {
          width: 400px;
        }

        .Section__column--footer > :nth-child(2) {
          margin-top: 0;
          transform: translate(80px, 0);
          margin-bottom: -260px;
        }
      }

      @media screen and (min-width: 1270px) {
        .Section__column--primary {
          flex-basis: 41.5%;
        }

        .Section__column--secondary {
          flex-basis: 58.5%;
          padding-left: 50px;
          margin-left: auto;
        }

        .Section__column--footer {
          margin-top: 80px;
        }
      }

      /* = Browser
       * ==================================================================== */
      .Browser {
        border-radius: 6px;
        background-color: #ffffff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        border: solid 1px #e5e5e5;
        overflow: hidden;
      }

      .Browser__header {
        line-height: 8px;
        background-color: #f5f5f5;
        padding: 15px 13px;
      }

      .Browser__header i {
        display: inline-block;
        margin-right: 3px;
        width: 8px;
        height: 8px;
        background-color: #d5d5d5;
        border-radius: 4px;
      }

      .Browser__content {
        height: 480px;
        width: 100%;
        overflow: hidden;
      }

      @media screen and (min-width: 960px) {
        .Browser {
         width: 1333px;
        }
      }

      /* = Feature
       * ==================================================================== */
      .Feature-list {
        margin-bottom: -30px;
      }

      .Feature {
        color: #8D9299;
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

      .Feature--important {
        font-size: 20px;
        line-height: 30px;
      }

      .Feature--important .Feature__title {
        font-size: 24px;
        margin-bottom: 15px;
      }

      .Feature--important p + p {
        margin-top: 30px;
      }

      @media screen and (min-width: 560px) {
        .Feature-list {
          margin-left: -30px;
        }

        .Feature {
          width: 50%;
          display: inline-block;
          vertical-align: top;
          padding-left: 30px;
        }

        .Feature--full {
          width: 100%;
        }
      }

      @media screen and (min-width: 960px) {
        .Feature__inner {
          max-width: 460px;
        }
      }

      .Feature-list--arrange .Feature:nth-child(2),
      .Feature-list--arrange .Feature:nth-child(4) {
        float: right;
      }

      .Feature-list--arrange .Feature:nth-child(3),
      .Feature-list--arrange .Feature:nth-child(5) {
        float: left;
      }

      /* = Other
       * ==================================================================== */
      @media screen and (max-width: 780px) {
        .HiddenAtSm {
          display: none;
        }
      }

      .u-subtitle {
        color: #3E434A;
      }
    `}</style>
  </div>
)

export default CloudOsSection
