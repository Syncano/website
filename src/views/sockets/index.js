import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import Grid from '../../components/ui/grid'
import Modal from '../../components/ui/modal'
import CTA from '../../components/shared/cta'
import Sidebar from './components/sidebar'
import List from './components/list'
import Details from './components/details'

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
        <div className='Section__sidebar'>
          <Sidebar />
        </div>
        <div className='Section__list'>
          <List />
        </div>
      </Grid>
    </div>

    <CTA />
    <Footer />

    <Modal noPadding name='socket-details'>
      <Details />
    </Modal>

    <style jsx>{`
      :global(.AppContainer) {
        background: rgba(244, 246, 248, 1) linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      .Section {
        max-width: 980px;
      }

      .Section__sidebar {
        flex: 1;
      }

      .Section__list {
        flex: 100%;
        margin-top: 30px;
      }

      @media screen and (min-width: 921px) {
        div :global(.Grid) {
          flex-wrap: nowrap;
        }

        .Section__sidebar {
          max-width: 270px;
        }

        .Section__list {
          margin-top: 0;
          flex: 1;
        }
      }
    `}</style>
  </Page>
)

Sockets.init = ({
  services: {
    sockets,
    ui: {toggleModal}
  }
}) => {
  sockets.fetch()

  return {toggleModal}
}

export default Sockets
