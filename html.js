import React from 'react';
import DocumentTitle from 'react-document-title';

import { prefixLink } from 'gatsby-helpers';

module.exports = React.createClass({
  propTypes () {
    return {
     title: React.PropTypes.string,
    }
  },

  render () {
    const title = DocumentTitle.rewind();

    let cssLink;
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />;
    }

    return (
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        <title>{title}</title>
        {cssLink}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        <script src={prefixLink('/bundle.js')} />
      </body>
      </html>
    );
  }
});