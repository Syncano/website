import Head from 'zefir/head'
import React from 'react'

export default ({children, opengraph}) => (
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' />
    {children}

    {opengraph === true ? (
      <div>
        <meta property='og:image' content='https://www.syncano.io/static/img/og-image.png' />
        <meta property='og:title' content='Syncano means accelerated software development' />
        <meta property='og:url' content='https://www.syncano.io/' />
        <meta property='og:site_name' content='Syncano' />
        <meta property='og:description' content='Don’t rebuild what has already been built. Syncano has hundreds of ready to use functions for your backend. Set up a scalable app in the cloud in just 45 seconds.' />
        <meta property='og:type' content='website' />
      </div>
    ) : ''}

    {React.Children.map(children, item => {
      if (item.type === 'title') {
        window.analytics.page('Website', {
          Page: item.props.children
        })
      }
    })}
  </Head>
)
