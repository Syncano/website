import React from 'react';
import { Adwords, Analytics } from './components/';
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
    let favicon = require('./syncano_favicon.png');

    return (
      <html lang="en">
      <head>
        <script src="//cdn.optimizely.com/js/3962180131.js"></script>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name='viewport' content='user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
        {title.toComponent()}
        <link rel="icon" type="image/png" href={favicon} />
        <link rel="stylesheet" href="/style.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.1.1/css/material-design-iconic-font.min.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
        <script dangerouslySetInnerHTML={{__html:`
          (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:108213,hjsv:5};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
        `}}></script>
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}}></div>
        <Analytics writeKey={config.analyticsKey}/>
        <script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
        <script src="/bundle.js"></script>
        <script type="text/javascript" src="//magnetic.t.domdex.com/23448/pix.js?t=r&for=syncano"></script>
        <Adwords.Remarketing/>
      </body>
      </html>
    );
  }
});
