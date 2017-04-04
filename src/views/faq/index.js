import Head from '../../components/head'
import Page from '../../components/page'
import Footer from '../../components/footer'
import Header from '../../components/header'
import CTA from '../../components/cta'

const Landing = ({
  stores: {ui: {flags}},
  services: {ui: {toggleFlag}}
}) => (
  <Page>
    <Head>
      <title>Syncano</title>
    </Head>

    <Header
      isSiteNavOpen={flags.has('site-nav.open')}
      toggleNav={() => toggleFlag('site-nav.open')}
      />
    <CTA />
    <Footer />
  </Page>
)

export default Landing
