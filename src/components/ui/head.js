import Head from 'zefir/head'
import React from 'react'

export default ({children, opengraph}) => (
  <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' rel='stylesheet' />
    {children}

    {opengraph === true ? ([
      <meta key='og:image' property='og:image' content='https://www.syncano.io/static/img/og-image.png' />,
      <meta key='og:title' property='og:title' content='Syncano means accelerated software development' />,
      <meta key='og:url' property='og:url' content='https://www.syncano.io/' />,
      <meta key='og:site_name' property='og:site_name' content='Syncano' />,
      <meta key='og:description' property='og:description' content='Don’t rebuild what has already been built. Syncano has hundreds of ready to use functions for your backend. Set up a scalable app in the cloud in just 45 seconds.' />,
      <meta key='og:type' property='og:type' content='website' />
    ]) : ''}

    {React.Children.map(children, item => {
      if (item.type === 'title') {
        window.analytics.page('Website', {
          Page: item.props.children
        })
      }
    })}
  </Head>
)
