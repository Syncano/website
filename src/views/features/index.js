import {Component} from 'react'
import {StickyContainer, Sticky} from 'react-sticky'

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

class Features extends Component {
  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  render () {
    const {featuresPage} = this.props

    return (
      <Page>
        <Head>
          <title>Syncano</title>
        </Head>

        <StickyContainer>
          <div className='Header'>
            <Header
              title='Product features'
              subtitle='Syncano’s Serverless Platform and SDKs automatically assemble and deploy your backend to the cloud instantaneously - all while you build your app.'
            />
          </div>
          <Sticky className='sticky-element'>
            <ContentNav active={featuresPage.activeSection} />
          </Sticky>

          <div ref={component => { Features.section0 = component }} id='AutomationSDKSection'>
            <AutomationSDKSection />
          </div>

          <div ref={component => { Features.section1 = component }} id='RegistriesSection'>
            <RegistriesSection />
          </div>

          <div ref={component => { Features.section2 = component }} id='CloudOsSection'>
            <CloudOsSection />
          </div>

          <div ref={component => { Features.section3 = component }} id='CommunitySection'>
            <CommunitySection />
          </div>
          <CTA />
          <Footer />
        </StickyContainer>

        <style jsx>{`
          :global(.sticky-element) {
            position: relative;
            z-index: 20;
          }

          .Header :global(.PageHead__subtitle) {
            max-width: 860px;
            margin-left: auto;
            margin-right: auto;
          }
        `}</style>
      </Page>
    )
  }

  handleScroll = () => {
    const {scrollTop} = document.body
    let value = 0
    let i = -1

    while (i++ < 3) {
      if (Features[`section${i}`].offsetTop <= scrollTop + 55) {
        value = i
      }
    }

    this.props.setActiveSection(value)
  }
}

Features.init = ({
  stores: {featuresPage},
  services: {featuresPage: {setActiveSection}}
}) => ({
  featuresPage, setActiveSection
})

export default Features
