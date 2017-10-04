import {Match} from '../../components/ui/router'
import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'

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

    <Footer />

    <style jsx>{`
      :global(.AppContainer) {
        background: rgba(244, 246, 248, 1) linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      .Section {
        max-width: 660px;
      }

      .Section__list {
        margin-top: 30px;
      }
    `}</style>
  </Page>
)

Enterprise.init = ({
  router
}) => ({router})

export default Enterprise
