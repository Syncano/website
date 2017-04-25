import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import Grid from '../../components/ui/grid'
import CTA from '../../components/shared/cta'
import Sidebar from './components/sidebar'
import List from './components/list'

const Sockets = () => (
  <Page>
    <Head>
      <title>Sockets Registry - Syncano</title>
    </Head>

    <Header
      title='Sockets Registry'
      subtitle='Don’t build what’s already been built. Use sockets.'
      />

    <div className='Section u-wrapper'>
      <Grid wrap>
        <Sidebar />
        <List />
      </Grid>
    </div>

    <CTA />
    <Footer />

    <style jsx>{`
      :global(.AppContainer) {
        background: rgba(244, 246, 248, 1) linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      .Section {
        max-width: 980px;
      }
    `}</style>
  </Page>
)

Sockets.init = ({
  services: {sockets}
}) => {
  sockets.fetch()
}

export default Sockets
