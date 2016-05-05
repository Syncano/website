import React from 'react';
import DocumentTitle from 'react-document-title';
import config from './config/';
import { Analytics } from './components/';

export default React.createClass({
  propTypes() {
    return {
      title: React.PropTypes.string
    }
  },

  render() {
    const title = DocumentTitle.rewind();

    let cssLink;
    if (process.env.NODE_ENV !== 'development') {
      cssLink = <link rel="stylesheet" href="/styles.css" />;
    }

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, user-scalable=no"
        />
        <title>{title}</title>
        {cssLink}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={require('./images/favicons/apple-touch-icon-57x57.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={require('./images/favicons/apple-touch-icon-60x60.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={require('./images/favicons/apple-touch-icon-72x72.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={require('./images/favicons/apple-touch-icon-76x76.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={require('./images/favicons/apple-touch-icon-114x114.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={require('./images/favicons/apple-touch-icon-120x120.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={require('./images/favicons/apple-touch-icon-144x144.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={require('./images/favicons/apple-touch-icon-152x152.png')}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={require('./images/favicons/apple-touch-icon-180x180.png')}
        />
        <link
          rel="icon"
          type="image/png"
          href={require('./images/favicons/favicon-32x32.png')} sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={require('./images/favicons/android-chrome-192x192.png')} sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href={require('./images/favicons/favicon-96x96.png')} sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href={require('./images/favicons/favicon-16x16.png')} sizes="16x16"
        />
        <link
          rel="manifest"
          href={require('./images/favicons/manifest.json')}
        />
        <link
          rel="mask-icon"
          href={require('./images/favicons/safari-pinned-tab.svg')} color="#0070d3"
        />
        <meta
          name="msapplication-TileColor"
          content="#0070d3"/>
        <meta
          name="msapplication-TileImage"
          content={require('./images/favicons/mstile-144x144.png')}
        />
        <meta
          name="theme-color"
          content="#ffffff"
        />
      </head>
      <body>
        <div
          id="react-mount"
          dangerouslySetInnerHTML={{ __html: this.props.body }}
        />
        <Analytics writeKey={config.analyticsKey} />
        <script src="/bundle.js" />
        <script async src="//platform.twitter.com/widgets.js" charSet="utf-8" />
      </body>
      </html>
    );
  }
});
