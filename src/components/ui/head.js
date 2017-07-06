import Head from 'zefir/head'
import React from 'react'

const {OPTIMIZELY_KEY} = process.env

export default ({children}) => (
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/css?family=PT+Mono' rel='stylesheet' />
    <script src={`https://cdn.optimizely.com/js/${OPTIMIZELY_KEY}.js`}></script>
    {children}

    {React.Children.map(children, item => {
      if (item.type === 'title') {
        window.analytics.page('Website', {
          Page: item.props.children
        })
      }
    })}
  </Head>
)
