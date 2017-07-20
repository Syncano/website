import {Match} from '../../components/ui/router'
import Head from '../../components/ui/head'
import Page from '../../components/ui/page'
import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import Grid from '../../components/ui/grid'
import Modal from '../../components/ui/modal'
import CTA from '../../components/shared/cta'
import List from './components/list'
import Details from './components/details'
import Search from './components/search'

const Sockets = ({
  router: {history: {push}}
}) => (
  <Page>
    <Head>
      <title>Syncano - Sockets Registry</title>
      <meta name="description">Sockets Registry is a collection of reusable backend components and integrations built by the Syncano community.</meta>
    </Head>

    <Header
      title='Syncano Sockets Registry'
      subtitle="Don't build what was already built. Stand on shoulders of giants. Use Sockets."
      />

    <div className='Section u-wrapper'>
      <div className="Seciton__search">
        <Search />
      </div>

      <div className='Section__list'>
        <List />
      </div>
    </div>

    <CTA />
    <Footer />

    <Match path='/sockets/:socketName' component={() => (
      <Modal noPadding full visible name='socket-details' toggle={() => {
        push('/sockets')
      }}>
        <Details />
      </Modal>
    )} />

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

Sockets.init = ({
  services: {ui: {toggleModal}},
  router
}) => ({toggleModal, router})

export default Sockets
