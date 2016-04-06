import React from 'react';
import DocumentTitle from 'react-document-title';

module.exports = React.createClass({
  propTypes() {
    return {
      title: React.PropTypes.string,
    }
  },

  render() {
    const title = DocumentTitle.rewind();

    let cssLink;
    if (process.env.NODE_ENV === 'production') {
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
          href="https://fonts.googleapis.com/css?family=Roboto:400,700"
          rel="stylesheet"
        />
      </head>
      <body>
        <div
          id="react-mount"
          dangerouslySetInnerHTML={{ __html: this.props.body }}
        />
        <script src="/bundle.js" />
      </body>
      </html>
    );
  }
});
