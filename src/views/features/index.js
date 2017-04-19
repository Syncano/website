import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import CTA from '../../components/shared/cta'

import Head from '../../components/ui/head'
import Page from '../../components/ui/page'

import ContentNav from './components/content-nav'
import CommunitySection from './components/community-section'
import AutomationSDKSection from './components/automation-sdk-section'
import CloudOsSection from './components/cloud-os-section'
import RegistriesSection from './components/registries-section'

const Landing = () => (
  <Page>
    <Head>
      <title>Syncano</title>
    </Head>

    <Header
      title='Product features'
      subtitle='Lorem ipsum dolor sit amet curabitur'
      />

    <ContentNav />
    <AutomationSDKSection />
    <RegistriesSection />
    <CloudOsSection />
    <CommunitySection />
    <CTA />
    <Footer />

    <style jsx>{``}</style>
  </Page>
)

export default Landing
