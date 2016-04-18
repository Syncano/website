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
          href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700"
          rel="stylesheet"
        />
      </head>
      <body>
        <div
          id="react-mount"
          dangerouslySetInnerHTML={{ __html: this.props.body }}
        />
        <Analytics writeKey={config.analyticsKey} />
        <script src="/bundle.js" />
      </body>
      </html>
    );
  }
});
