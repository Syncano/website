import Head from '../../components/head'
import Page from '../../components/page'
import Footer from '../../components/footer'
import Header from '../../components/header'
import CTA from '../../components/cta'
import CLI from '../../components/cli'
import FAQ from './sections/faq'
import Scaling from './sections/scaling'
import PricingTable from './components/pricing-table'

const Pricing = () => (
  <Page>
    <Head>
      <title>Pricing - Syncano</title>
    </Head>

    <Header theme='dark'>
      <div className='Header'>
        <h1 className='Header_title'>Build secure, scalable apps in half the time</h1>
        <h2 className='Header_subtitle'>30-day money back guarantee. No contracts. Upgrade, downgrade, or cancel at any time.</h2>
      </div>

      <div className='Pricing'>
        <PricingTable />
      </div>
    </Header>

    <div className='Section'>
      <Scaling />
      <FAQ />
      <CTA />
      <Footer />
    </div>

    <style jsx>{`
      .Section {
        padding-top: 1px;
        background-image: linear-gradient(to top, rgba(255, 255, 255, 0), #ffffff), linear-gradient(#f5f6f9, #f5f6f9);
      }

      /* = Header
       * ==================================================================== */
      .Header {
        text-align: center;
        margin-top: 30px;
        padding-bottom: 1px;
      }

      .Header_title,
      .Header_subtitle {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
      }

      .Header_subtitle {
        font-size: 24px;
        font-weight: 300;
        margin-top: 15px;
        margin-bottom: 30px;
        color: rgba(255,255,255, .5);
      }

      @media screen and (min-width: 980px) {
        .Header {
          margin-top: 90px;
        }

        .Header_title {
          font-size: 48px;
          line-height: 56px;
        }
      }

      .Pricing {
        margin-top: 40px;
        padding-bottom: 10px;
        max-width: 370px;
        margin-left: -20px;
        margin-right: -20px;
      }

      @media screen and (min-width: 400px) {
        .Pricing {
          margin-left: auto;
          margin-right: auto;
          padding-bottom: 30px;
        }
      }

      @media screen and (min-width: 560px) {
        .Pricing :global(>) :global(*) {
           margin-bottom: -80px;
        }
      }
    `}</style>
  </Page>
)

export default Pricing
