import React from 'react';
import Analytics from './components/Analytics';
import config from './config/';
import Helmet from 'react-helmet';

export default React.createClass({
  getDefaultProps() {
    return {
      body: '',
      title: 'Turning developers into superstars | Syncano.io'
    };
  },

  render() {
    let head = Helmet.rewind();
    let title = head && head.title ? head.title : this.props.title;

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
        <title>{title}</title>
        <link rel="stylesheet" href="/style.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.1.1/css/material-design-iconic-font.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
      </head>
      <body>
      <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}}></div>
      <Analytics writeKey={config.analytics_key}/>
      <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
      <script src="/bundle.js"></script>
      <script type="text/javascript" src="//magnetic.t.domdex.com/23448/pix.js?t=r&for=syncano"></script><noscript><img src="//magnetic.t.domdex.com/23448/pix.gif?t=r&for=syncano" width="1" height="1" style={{display: 'none'}}/></noscript>
      </body>
      </html>
    );
  }
});