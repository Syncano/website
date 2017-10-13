import {Match} from '../../components/ui/router'
import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import EnterpriseCTA from './components/enterpriseCta'
import EnterpriseTestimonials from './components/enterpriseTestimonials'
import EnterpriseFeatures from './components/enterpriseFeatures'
import EnterpriseComponents from './components/EnterpriseComponents'
import EnterpriseGraph from './components/enterpriseGraph'
import Hexagon from '../../components/ui/hexagon'

const Enterprise = ({
  router: {history: {push}}
}) => (
  <Page>
    <Head>
      <title>Syncano Scalable Community</title>
      <meta name="description">Tomorrow’s market is not won with yesterday’s services. Innovate at the speed of a startup.</meta>
    </Head>
    <div className='Header'>
      <Header
        title='Increase software development speed in your organization'
        subtitle="Tomorrow’s market is not won with yesterday’s services. Innovate at the speed of a startup."
      >

      <div className='HiddenAtSm'>
        <Hexagon width={32} fill='#60e0ae' position={{top: '40%', left: '-100px'}} />
        <Hexagon width={32} fill='#60e0ae' position={{top: '44%', right: '-27px'}} />
        <Hexagon width={24} fill='#60e0ae' position={{bottom: '-22px', left: '-17px'}} />
      </div>
      <div className="HiddenAtMd">
        <Hexagon width={42} fill='#4597f2' position={{bottom: '-46px', right: '18%'}} />
        <Hexagon width={24} fill='#20a5b4' position={{bottom: '42px', right: '7%'}} />
        <Hexagon width={42} fill='#05a5b4' position={{bottom: '15%', left: '150px'}} />
      </div>
      </Header>
    </div>
    <h3 className="Customers">Our customers and partners include</h3>
    <div className="Logos">
      <img src="../../static/img/enterprise/aws_logo.png" height="64px" />
      <img src="../../static/img/enterprise/dnb_logo.jpg" height="64px" />
      <img src="../../static/img/enterprise/altibox_logo.png" height="64px" />
      <img src="../../static/img/enterprise/afm_logo.png" height="64px" />
    </div>
    <EnterpriseGraph />
    <EnterpriseComponents />
    <EnterpriseFeatures />
    <EnterpriseTestimonials />
    <EnterpriseCTA />
    <Footer />

    <style jsx>{`
      .Header {
        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
      }

      .Header :global(.PageHead) {
        max-width: 526px;
      }

      .Customers {
        height: 28px;
        font-size: 24px;
	      text-align: center;
	      color: #3e434a;
        font-weight: normal;
      }

      .Logos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 14px 0 90px;
      }

      .Logos img {
        margin: 30px;
      }

      @media screen and (max-width: 560px) {
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
  </Page>
)

Enterprise.init = ({
  router
}) => ({router})

export default Enterprise
