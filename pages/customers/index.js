import React from 'react';
import {
  CustomerSection,
  CTASection,
  Footer,
  PageHeader,
  PageHelmet,
  TextWithImage
} from '../../components';

export default () => {
  // const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Customers’ apps made with Syncano"
        mixpanelTitle="Customers"
        description={`Helping people build successful apps for the web, mobile and IoT. See what developers are building
          with Syncano.`}
      />
      <PageHeader
        headline="Customers’ apps made with Syncano"
        textline="Helping people build amazing apps for the web, mobile and IoT."
      />
      <CustomerSection
        theme="gray"
        headline="Havoc TV"
        textline={`Havoc TV is the only exclusive multi-platform network dedicated to action sports and independent
          music. Havoc TV also operates a 24/7 interactive and social TV channel, offered in both English and Spanish,
          and available on AT&T U-verse, Frontier Cable and other domestic and international affiliates.`}
        imageClassName="browser-image"
        imageSrc={require('./havoc-tv.png')}
        image2xSrc={require('./havoc-tv@2x.png')}
        imageSmallSrc={require('./havoc-tv-small.png')}
        imageSmall2xSrc={require('./havoc-tv-small@2x.png')}
        url="http://havoc.tv/"
        buttonText="Check Out Havoc TV"
      />
      <CustomerSection
        headline="PIX2WIN"
        textline={`PIX2WIN is a fan engagement platform designed for live events and broadcasts. PIX2WIN encourages fans
          to send in photos from their mobile devices for a chance to be entered into a LIVE video sweepstakes. The
          PIX2WIN real-time broadcast graphics engine allows thousands of fans to see themselves on event big screens or
          on television.`}
        imageClassName="browser-image"
        imageSrc={require('./pix2win.png')}
        image2xSrc={require('./pix2win@2x.png')}
        imageSmallSrc={require('./pix2win-small.png')}
        imageSmall2xSrc={require('./pix2win-small@2x.png')}
        url="http://www.multilot.net/"
        buttonText="Check Out PIX2WIN"
      />
      <CustomerSection
        theme="gray"
        headline="ehco"
        textline={`The ehco&#8482; Giving app is the easiest way to give to your favorite causes. Add a payment method,
          discover worthy local causes, and give in seconds to help a cause meet a specific need. All of your giving,
          one simple app.`}
        imageSrc={require('./ehco.png')}
        image2xSrc={require('./ehco@2x.png')}
        imageSmallSrc={require('./ehco-small.png')}
        imageSmall2xSrc={require('./ehco-small@2x.png')}
        url="http://www.multilot.net/"
        buttonText="Check Out ehco"
      />
      <CustomerSection
        headline="ArtAttack - Share Sell Network"
        textline={`ArtAttack is a mobile art marketplace and social network that gives artists and art lovers the
          ability to view, buy and sell artwork. It exists to give artists a safe and invigorating space in which to
          exhibit and sell their work, as well as document their development over time.`}
        imageSrc={require('./artattack.png')}
        image2xSrc={require('./artattack@2x.png')}
        imageSmallSrc={require('./artattack-small.png')}
        imageSmall2xSrc={require('./artattack-small@2x.png')}
        url="http://artattackapp.com/"
        buttonText="Check Out ArtAttack"
      />
      <CustomerSection
        theme="gray"
        headline="HelloHome"
        textline={`HelloHome provides a fast, easy and fun alternative to traditional flat searches. Create a profile,
          swipe through potential flat/flatmate profiles and start a conversation if there is interest from both sides.
          Your flat search does not have to be a pain. Join the revolution!`}
        imageSrc={require('./hellohome.png')}
        image2xSrc={require('./hellohome@2x.png')}
        imageSmallSrc={require('./hellohome-small.png')}
        imageSmall2xSrc={require('./hellohome-small@2x.png')}
        url="http://www.hellohome.io/"
        buttonText="Check Out HelloHome"
      />
      <CustomerSection
        headline="Ordego"
        textline={`Ordego is striving to create an extensive network that delivers convenience items to you, based on
          your location, in a matter of minutes. By letting you have access to your own online bodega, Ordego is
          redefining the way New York City interacts with convenience.`}
        imageClassName="browser-image"
        imageSrc={require('./ordego.png')}
        image2xSrc={require('./ordego@2x.png')}
        imageSmallSrc={require('./ordego-small.png')}
        imageSmall2xSrc={require('./ordego-small@2x.png')}
        url="https://www.ordego.com/"
        buttonText="Check Out Ordego"
      />
      <CustomerSection
        theme="gray"
        headline="Viking Zombie Apocalypse"
        textline={`Embark on an endless quest for survival against the hands of time as you pace through the dark, cold,
          heartless night - slashing, hacking and burning your way past infinite waves of restless zombies.`}
        imageSrc={require('./viking-zombie-apocalypse.png')}
        image2xSrc={require('./viking-zombie-apocalypse@2x.png')}
        imageSmallSrc={require('./viking-zombie-apocalypse-small.png')}
        imageSmall2xSrc={require('./viking-zombie-apocalypse-small@2x.png')}
        itunesUrl="https://itunes.apple.com/us/app/viking-zombie-apocalypse/id1090697288"
      />
      <CTASection />
      <Footer />
    </div>
  );
};
