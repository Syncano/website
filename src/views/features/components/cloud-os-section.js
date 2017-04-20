import Grid from '../../../components/ui/grid'

const CloudOsSection = ({toggleSignUpModal}) => (
  <div className='Section'>
    <div className='Section__clouds' />
    <div className='Section__inner u-wrapper'>
      <Grid wrap>
        <div className='Section__column Section__column--primary'>
          <div className='Feature-list'>
            <div className='Feature Feature--important Feature--full'>
              <h2 className='u-title'>Syncano Cloud OS</h2>
              <p className='u-subtitle'>The Syncano Cloud OS is the core of the Syncano platform. It hosts and executes all Syncano Sockets that make up your dedicated backend, and ensures that your backend elastically scales to meet your frontend’s needs.</p>
              <p>
                The Syncano Cloud OS currently runs on AWS, but we've ensured that it can run on any private infrastructure, including running on-premise, and subsequently complying with <a href='https://en.wikipedia.org/wiki/International_Safe_Harbor_Privacy_Principles'>European Safe Harbour regulations</a>, and <a href='http://ec.europa.eu/justice/data-protection/'>EU’s Personal Data Act</a>.
              </p>
            </div>
            <div className='Feature Feature--important Feature--full'>
              <h4 className='Feature__title'>Leverage the Core APIs for deeper integration</h4>
              <p>All the features of the Syncano Cloud OS can be managed through the Syncano Core API, enabling you to build powerful Syncano Sockets with deep integrations to the Syncano Cloud OS.</p>
              <p>The Core API’s exposes the underlying Cloud OS to power your own proprietary backend. This makes Syncano a safe bet, since you will never ever be stuck! Syncano is among the <a href='http://thenewstack.io/tns-guide-serverless-technologies-best-frameworks-platforms-tools/'>most mature in the serverless space</a>. We are opensource advocates. <a href=''>Reach out to learn how you can contribute</a>.</p>
            </div>
          </div>
        </div>
        <div className='Section__column Section__column--secondary'>
          <div className='Feature-list Feature-list--arrange'>
            <div className='Feature'>
              <h4 className='Feature__title'>Executing Syncano Cloud Functions</h4>
              <p>Cloud Functions serve as Syncano's implementation of the server-side code, becoming the core of Syncano Sockets. These functions run the code that powers Syncano Sockets, executing at blazing speed with the right environment and runtime.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Always up to date with real-time channels</h4>
              <p>The Cloud OS has a built-in publish-subscribe real-time solution that that can support any Syncano Socket.</p>
              <p>Syncano’s real-time channels enable you to listen for changes in data, and to push real-time messages to your frontend or other subscribers of your data notifications.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Powerful NoSQL storage</h4>
              <p>The Syncano Cloud OS can be used by Syncano Sockets to store data through its built in NoSQL solution. Syncano's NoSQL storage creates data classes where you can store any data object type using built in or customized fields. Easily order and filter your data so you can easily retrieve it in the exact form your app needs.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>Integrate Web hosting into your solution</h4>
              <p>Syncano supports production grade static hosting. The platform deploys web apps to a global CDN in a single command, and deployed apps are secured by SSL certificates.</p>
            </div>
            <div className='Feature'>
              <h4 className='Feature__title'>DevOps automation scales your backend</h4>
              <p>The DevOps automation function is responsible for the set up and scaling of resources in the underlying infrastructure, meeting your front end's capacity needs. You have entered the era of NoOps!</p>
            </div>
          </div>
        </div>

        <div className='Section__column Section__column--footer'>
          <div className='Feature-list'>
            <div className='Feature Feature--important Feature--full'>
              <h4 className='Feature__title'>Your own web dashboard</h4>
              <p>Use your Syncano Dashboard to manage all things specific to your account, such as billing and usage. You can also access your dashboard for details specific to your instance, such as a detailed list of their various state.</p>
              <p>
                <a onClick={toggleSignUpModal}>Go to dashboard <i className='fa fa-arrow-right' /></a>
              </p>
            </div>
          </div>

          <div>
            <div className='Browser'>
              <div className='Browser__header'><i /><i /><i /></div>
              <div className='Browser__content'>
                <img src='/static/img/features/dashboard.png' alt='' />
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
        padding-top: 30px;
        padding-bottom: 30px;
        position: relative;
      }

      .Section__inner {
        max-width: 1230px;
      }

      .Section__column--primary .u-title {
        padding-top: 90px;
        margin-top: -90px;
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
          padding-top: 300px;
          padding-bottom: 100px;
        }

        .Section__clouds {
          background-size: 100%;
          position: relative;
          height: 1218px;
          background-image:url(/static/img/features/clouds.jpg);
          position: absolute;
          top: 0;
          width: 100%;
          z-index: -1;
          transform: translateY(-250px);
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
        .Section {
          padding-top: 300px;
        }

        .Section__clouds {
          transform: translateY(-250px);
        }

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

      @media screen and (max-width: 1440px) {
        .Section__clouds {
          background-size: 1440px;
        }
      }

      @media screen and (min-width: 1650px) {
        .Section__clouds {
          transform: translateY(-30%);
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

export default CloudOsSection
