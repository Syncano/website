import Link from '../../../components/ui/link'
import GitHubButton from '../../../components/ui/github-button'

const CommunitySection = () => (
  <div className='Section'>
    <div className='Section__header u-wrapper u-ta-c'>
      <h2 className='u-title'>Syncano Community</h2>
      <p>Syncano is a true multi-sided platform concept: The Syncano Core team builds a high-tech and high quality solution in the cloud, and powers it with the muscle of our growing community of Syncano users.</p>
      <div className='Section__definition'>Syncano = Cloud + Crowd!</div>
    </div>
    <div className='Section__content u-wrapper'>
      <div className='Feature-list'>
        <div className='Feature Feature--important'>
          <div className='Feature__inner'>
            <h4 className='Feature__title'>Support from Syncano and our community</h4>
            <p>If you get stuck and need some help you can reach out to our helpful community in our <Link to='/slack-invite'>Slack channel</Link>. We also have plenty of <a href='https://syncano.github.io/syncano-node-cli/'>documentation</a> on our web site and our <a href='https://www.syncano.io/blog/'>blog</a>.</p>
            <p>Come and join the Syncano community and chat with other developers. Share ideas, learn, build apps together or just ask us anything!</p>
          </div>
        </div>
        <div className='Feature'>
          <h4 className='Feature__title'>Developer Hub for more collaboration (coming soon)</h4>
          <p><a href=''>Our vision</a> is for developers to never have to build and scale backends again, and rather spend all their time solving app specific challenges.</p>
          <p>We know that unique, extremely skilled and autonomous developers exist, but we also believe that great minds are stronger together. That’s why we are building functionality into Syncano where users can find and get in touch with other Syncano users to join their projects, or to develop on demand for each other.</p>
          <p>Below, you will find the our current projects that are present in the developer hub.</p>
        </div>
        <div className='Feature'>
          <h4 className='Feature__title'>Join our Machine Learning & AI Project to make Syncano even more powerful</h4>
          <p>The current generation of Syncano is only the beginning. Our vision is that developers won’t have to build and scale backends ever again. </p>
          <p>By leveraging Machine Learning and Artificial Intelligence we are working on making the backend assembling process even more automated! We believe that we are entering a world where software builds software, where building and operating backends will become obsolete. <a href=''>Apply to join our Syncano ML and AI project</a>!</p>
        </div>
        <div className='Feature'>
          <h4 className='Feature__title'>Join our Cloud OS Project</h4>
          <p>Our powerful Cloud OS software is infrastructure agnostic which means that it can run on any cloud computing provider, as well as on bare-metal. We haven’t open sourced the Cloud OS yet, but it is our plan to gradually move in that direction. <a href=''>Sign up here</a> to get in touch with us. We will gladly share our plans, progress and how you potentially can contribute.</p>
        </div>
        <div className='Feature'>
          <h4 className='Feature__title'>Socket Marketplace to expand Syncano faster (coming soon)</h4>
          <p>We are currently working on making it even easier for you to get the backend functions you need for your projects. If the functionality you need is not already available in the <a href=''>Public Socket Registry</a>, you can use the Syncano Marketplace to specify the Syncano Socket you need, and get help from other users to build it.</p>
        </div>
        <div className='Feature'>
          <h4 className='Feature__title'><Link to='https://github.com/syncano/syncano-dashboard'>Join our ReactJS Dashboard Project</Link></h4>
          <p>The Syncano Dashboard on the web is the largest ReactJS Open Source project. <a href='https://github.com/syncano/syncano-dashboard'>Check it out on GitHub</a>, where you can contribute, or fork it and tailor it to make your own Syncano web dashboard.</p>
          <p><GitHubButton type='stargazers' namespace='syncano' repo='syncano-dashboard' /></p>
        </div>
        <div className='Feature'>
          <h4 className='Feature__title'><a href='https://github.com/syncano/syncano-node-cli'>Join our Automation SDK Project</a></h4>
          <p>Our Syncano-CLI is an open source (OSS) project, released under the BSD license. Our framework has been developed to integrate the Automation SDK with any IDE by building plugins for that particular IDE. <a href=''>Join our Automation SDK project</a> to influence which IDEs we will prioritize!</p>
        </div>
      </div>
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

      .Section__header {
        max-width: 735px;
        font-size: 20px;
        line-height: 1.5;
        text-align: center;
        color: #8d9299;
      }

      .Section__header .u-title {
        margin-bottom: 30px;
      }

      .Section__definition {
        font-size: 24px;
        color: #3e434a;
        margin-top: 40px;
      }

      .Section__content {
        justify-content: space-between;
        max-width: 1230px;
        margin-top: 30px;
      }

      @media screen and (min-width: 560px) {
        .Section {
          padding-top: 60px;
          margin-bottom: 60px;
        }

        .Section__content {
          margin-top: 90px;
        }
      }

      @media screen and (min-width: 960px) {
        .Section {
          padding-top: 100px;
          margin-bottom: 100px;
        }
      }

      /* = Feature
       * ==================================================================== */
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

      .Feature--important p + p {
        margin-top: 20px
      }

      .Feature__title {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        color: #2f3339;
        margin-bottom: 10px;
      }

      .Feature--important {
        font-size: 20px;
        line-height: 30px;
        flex: 100%;
      }

      .Feature--important .Feature__title {
        font-size: 24px;
      }

      @media screen and (min-width: 560px) {
        .Feature-list {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -30px;
          margin-left: -30px;
        }

        .Feature {
          width: 50%;
          padding-left: 30px;
        }
      }

      @media screen and (min-width: 960px) {
        .Feature {
          flex-basis: 25%;
        }

        .Feature:nth-child(4),
        .Feature:nth-child(5),
        .Feature:nth-child(7) {
          margin-top: -30px;
        }

        .Feature__inner {
          max-width: 460px;
        }

        .Feature--important {
          flex-basis: 50%;
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

export default CommunitySection
