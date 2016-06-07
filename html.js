import React from 'react';
import Helmet from 'react-helmet';
import { Analytics } from './components/';

const BUILD_TIME = new Date().getTime();

export default React.createClass({
  render() {
    const head = Helmet.rewind();
    const attrs = head.htmlAttributes.toComponent();
    const { redirect_uri } = APP_CONFIG;

    let css;
    if (process.env.NODE_ENV !== 'development') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />;
    }

    return (
      <html
        lang="en"
        {...attrs}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
          <meta httpEquiv="Cache-Control" content="private" />
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {css}
          <link rel="preload" href={require('./components/Modals/images/close.svg')} as="image" />
          <link rel="preload" href={require('./components/Modals/images/close-small.svg')} as="image" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/plugins/line-numbers/prism-line-numbers.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.4.1/themes/prism-twilight.min.css" />
          <link rel="apple-touch-icon" sizes="57x57" href={require('./images/favicons/apple-touch-icon-57x57.png')} />
          <link rel="apple-touch-icon" sizes="60x60" href={require('./images/favicons/apple-touch-icon-60x60.png')} />
          <link rel="apple-touch-icon" sizes="72x72" href={require('./images/favicons/apple-touch-icon-72x72.png')} />
          <link rel="apple-touch-icon" sizes="76x76" href={require('./images/favicons/apple-touch-icon-76x76.png')} />
          <link rel="apple-touch-icon" sizes="114x114" href={require('./images/favicons/apple-touch-icon-114x114.png')} />
          <link rel="apple-touch-icon" sizes="120x120" href={require('./images/favicons/apple-touch-icon-120x120.png')} />
          <link rel="apple-touch-icon" sizes="144x144" href={require('./images/favicons/apple-touch-icon-144x144.png')} />
          <link rel="apple-touch-icon" sizes="152x152" href={require('./images/favicons/apple-touch-icon-152x152.png')} />
          <link rel="apple-touch-icon" sizes="180x180" href={require('./images/favicons/apple-touch-icon-180x180.png')} />
          <link rel="icon" type="image/png" href={require('./images/favicons/favicon-32x32.png')} sizes="32x32" />
          <link rel="icon" type="image/png" href={require('./images/favicons/android-chrome-192x192.png')} sizes="192x192" />
          <link rel="icon" type="image/png" href={require('./images/favicons/favicon-96x96.png')} sizes="96x96" />
          <link rel="icon" type="image/png" href={require('./images/favicons/favicon-16x16.png')} sizes="16x16" />
          <link rel="manifest" href={require('!file-loader?name=/[hash].[ext]!./images/favicons/manifest.json')} />
          <link rel="mask-icon" href={require('./images/favicons/safari-pinned-tab.svg')} color="#0070d3" />
          <meta name="msapplication-TileColor" content="#0070d3" />
          <meta name="msapplication-TileImage" content={require('./images/favicons/mstile-144x144.png')} />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:image" content={`${redirect_uri}${require('./images/og-image.png')}`} />
          <meta property="og:site_name" content="Syncano" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@syncano" />
          <meta name="twitter:image" content={`${redirect_uri}${require('./images/twitter-image.png')}`} />

          {head.link.toComponent()}
          <script src="https://cdn.optimizely.com/js/3962180131.js"></script>
          <script dangerouslySetInnerHTML={{__html: `
            (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:108213,hjsv:5};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
          `}} />
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <Analytics writeKey={APP_CONFIG.analyticsKey} />
          <script src="https://cdn.jsdelivr.net/g/prism@1.5.0(prism.js+components/prism-clike.min.js+components/prism-c.min.js+components/prism-objectivec.min.js+components/prism-java.min.js+components/prism-javascript.min.js+components/prism-swift.min.js+components/prism-cpp.min.js+components/prism-python.min.js+components/prism-ruby.min.js+plugins/line-numbers/prism-line-numbers.min.js)" />
          <script src={`/bundle.js?t=${BUILD_TIME}`} />
        </body>
      </html>
    );
  }
});
