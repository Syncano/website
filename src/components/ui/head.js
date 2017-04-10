import Head from 'zefir/head'

export default ({children}) => (
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
    {children}
  </Head>
)
