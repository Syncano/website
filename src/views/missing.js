import Head from '../components/head'
import Page from '../components/page'
import Link from '../components/link'

const Missing = () => (
  <Page>
    <Head>
      <title>Not Found - Syncano</title>
    </Head>

    <div className='page'>
      <h1>Page was not found</h1>
      <Link to='/'>Back to home</Link>
    </div>

    <style jsx>{`
      .page {
        text-align: center;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      h1 {
        color: #333;
        font-weight: 300;
      }
    `}</style>
  </Page>
)

export default Missing
