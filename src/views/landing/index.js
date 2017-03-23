import Head from '../../components/head'
import Page from '../../components/page'
import Header from './header'
import Innovation from './innovation'
import Features from './features'
import Sockets from './sockets'
import FAQ from './faq'
import CTA from './cta'
import Footer from './footer'

const Landing = () => (
  <Page>
    <Head>
      <title>Syncano</title>
    </Head>

    <Header />
    <Innovation />
    <Features />
    <Sockets />
    <FAQ />
    <CTA />
    <Footer />
  </Page>
)

export default Landing
