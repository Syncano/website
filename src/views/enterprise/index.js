import {Match} from '../../components/ui/router'
import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import EnterpriseCTA from './components/enterpriseCta'

const Enterprise = ({
  router: {history: {push}}
}) => (
  <Page>
    <Head>
      <title>Syncano Scalable Community</title>
      <meta name="description">Tomorrow’s market is not won with yesterday’s services. Innovate at the speed of a startup.</meta>
    </Head>

    <Header
      title='Increase software development speed in your organization'
      subtitle="Tomorrow’s market is not won with yesterday’s services. Innovate at the speed of a startup."
      />
    <EnterpriseCTA />
    <Footer />

    <style jsx>{`
    `}</style>
  </Page>
)

Enterprise.init = ({
  router
}) => ({router})

export default Enterprise
