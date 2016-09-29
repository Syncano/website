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
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Customers’ apps made with Syncano"
        mixpanelTitle="Customers"
        description={`Helping people build successful apps for the web, mobile and IoT. See what developers are building
          with Syncano.`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
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
          and available on AT\u0026T U-verse, Frontier Cable and other domestic and international affiliates.`}
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
        url="http://www.multilot-live.com/product/"
        buttonText="Check Out PIX2WIN"
      />
      <CustomerSection
        theme="gray"
        headline={`ehco\u2122 - Mobile payments for nonprofits`}
        textline={`The ehco\u2122 Giving app is the easiest way to give to your favorite causes. Add a payment method,
          discover worthy local causes, and give in seconds to help a cause meet a specific need. All of your giving,
          one simple app.`}
        imageSrc={require('./ehco-give-to-your-favorite-causes.png')}
        image2xSrc={require('./ehco-give-to-your-favorite-causes@2x.png')}
        imageSmallSrc={require('./ehco-give-to-your-favorite-causes-small.png')}
        imageSmall2xSrc={require('./ehco-give-to-your-favorite-causes-small@2x.png')}
        url="http://ehco.us/"
        buttonText="Check Out ehco"
      />
      <CustomerSection
        headline="ArtAttack - Share Sell Network"
        textline={`ArtAttack is a mobile art marketplace and social network that gives artists and art lovers the
          ability to view, buy and sell artwork. It exists to give artists a safe and invigorating space in which to
          exhibit and sell their work, as well as document their development over time.`}
        imageSrc={require('./artattack-share-sell-network.png')}
        image2xSrc={require('./artattack-share-sell-network@2x.png')}
        imageSmallSrc={require('./artattack-share-sell-network-small.png')}
        imageSmall2xSrc={require('./artattack-share-sell-network-small@2x.png')}
        url="http://artattackapp.com/"
        buttonText="Check Out ArtAttack"
      />
      <CustomerSection
        theme="gray"
        headline="HelloHome ­- Connecting soulmates"
        textline={`HelloHome provides a fast, easy and fun alternative to traditional flat searches. Create a profile,
          swipe through potential flat/flatmate profiles and start a conversation if there is interest from both sides.
          Your flat search does not have to be a pain. Join the revolution!`}
        imageSrc={require('./helloHome-connecting-soulmates.png')}
        image2xSrc={require('./helloHome-connecting-soulmates@2x.png')}
        imageSmallSrc={require('./helloHome-connecting-soulmates-small.png')}
        imageSmall2xSrc={require('./helloHome-connecting-soulmates-small@2x.png')}
        url="http://www.hellohome.io/"
        buttonText="Check Out HelloHome"
      />
      <CustomerSection
        headline="Ordego - Online Convenience Store"
        textline={`Ordego is striving to create an extensive network that delivers convenience items to you, based on
          your location, in a matter of minutes. By letting you have access to your own online bodega, Ordego is
          redefining the way New York City interacts with convenience.`}
        imageClassName="browser-image"
        imageSrc={require('./ordego-online-convenience-store.png')}
        image2xSrc={require('./ordego-online-convenience-store@2x.png')}
        imageSmallSrc={require('./ordego-online-convenience-store-small.png')}
        imageSmall2xSrc={require('./ordego-online-convenience-store-small@2x.png')}
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
      <CustomerSection
        headline="C More Snack"
        textline={`With C More Snack, you can make your voice heard by participating in polls about Allsvenskan (Swedish
          football) match events. Together with all the other fans, your voices will be echoed in our tv broadcasts.`}
        imageSrc={require('./c-more-snack.png')}
        image2xSrc={require('./c-more-snack@2x.png')}
        imageSmallSrc={require('./c-more-snack-small.png')}
        imageSmall2xSrc={require('./c-more-snack-small@2x.png')}
        googlePlayUrl="https://play.google.com/store/apps/details?id=se.cmore.arcticfalcon"
      />
      <CustomerSection
        theme="gray"
        headline="Save The Planet"
        textline={`Stop the asteroids from destroying earth with a simple touch, and overcome the unknown variable of
          time and space in this casual game of planetary defense. Remember, the universe isn't perfect.`}
        imageSrc={require('./save-the-planet.png')}
        image2xSrc={require('./save-the-planet@2x.png')}
        imageSmallSrc={require('./save-the-planet-small.png')}
        imageSmall2xSrc={require('./save-the-planet-small@2x.png')}
        itunesUrl="https://itunes.apple.com/us/app/save-the-planet/id1096968741"
      />
      <CustomerSection
        headline="Forest Treasures"
        textline={`The Forest Treasures app is the perfect tool for mushroom hunters. It contains delicious mushrooms
          recipes, a book of mushrooms with species details and pictures, along with a mushroom scanner to help you
          identify a species easily!`}
        imageSrc={require('./forest-treasures.png')}
        image2xSrc={require('./forest-treasures@2x.png')}
        imageSmallSrc={require('./forest-treasures-small.png')}
        imageSmall2xSrc={require('./forest-treasures-small@2x.png')}
        googlePlayUrl="https://play.google.com/store/apps/details?id=com.kasol.foresttreasures"
        itunesUrl="https://itunes.apple.com/pl/app/forest-treasures/id1104922162"
      />
      <CustomerSection
        theme="gray"
        headline="Health.Er ­- Food Scanner"
        textline={<span>What is really in your food? „E number” is often used informally as a negative term for
          artificial food additives. The foods on supermarket shelves have more health information on their labels than
          ever before and it is now even more confusing.<span className="extended-description"> Health.Er analyzes food labels
          for you and provides information about E numbers found on the label, so that you can know whether particular E
          numbers are good, bad or neutral for your health!</span></span>}
        imageSrc={require('./healther-food-scanner.png')}
        image2xSrc={require('./healther-food-scanner@2x.png')}
        imageSmallSrc={require('./healther-food-scanner-small.png')}
        imageSmall2xSrc={require('./healther-food-scanner-small@2x.png')}
        googlePlayUrl="https://play.google.com/store/apps/details?id=com.aexol.healther"
        itunesUrl="https://itunes.apple.com/us/app/health.er-food-scanner/id1068474907"
      />
      <CustomerSection
        headline="YOSO - Collect moments"
        textline={<span>YOSO was created to bring the magic back to taking pictures, as it used to be when they were
          taken with a photographic film.<span className="extended-description"> Do you remember that excitement while
          triggering the shutter? We wanted you to experience the sensation of surprise again, while taking photos with
          a smartphone. With YOSO, you can take 24 or 36 pictures with a smartphone, without immediately seeing each
          picture, but only once you use up the whole virtual roll of film.</span></span>}
        imageSrc={require('./yoso-collect-moments.png')}
        image2xSrc={require('./yoso-collect-moments@2x.png')}
        imageSmallSrc={require('./yoso-collect-moments-small.png')}
        imageSmall2xSrc={require('./yoso-collect-moments-small@2x.png')}
        url="http://yosoapp.com/en/"
        buttonText="Check Out YOSO"
      />
      <CustomerSection
        theme="gray"
        headline="Victorio - Custom Shirts in 3D"
        textline={`Victorio offers rotatable 3D shirt models, so you can preview your shirt design from all angles.
          Handmade and custom-tailored dress shirts of the highest quality, designed by you.`}
        imageClassName="browser-image"
        imageSrc={require('./victorio-custom-shirts-in-3d.png')}
        image2xSrc={require('./victorio-custom-shirts-in-3d@2x.png')}
        imageSmallSrc={require('./victorio-custom-shirts-in-3d-small.png')}
        imageSmall2xSrc={require('./victorio-custom-shirts-in-3d-small@2x.png')}
        url="http://tailorvictorio.pl/generator/"
        buttonText="Check Out Victorio"
      />
      <CustomerSection
        headline="DashFlow - Track All Your Money Goals"
        textline={`Stay on top of your budget, organize your bills, get reminders, and achieve your goals for savings,
          budget, debt, and net worth. DashFlow makes it easy to track all of your financial goals on a customizable
          dashboard.`}
        imageSrc={require('./dashflow-track-all-your-money-goals.png')}
        image2xSrc={require('./dashflow-track-all-your-money-goals@2x.png')}
        imageSmallSrc={require('./dashflow-track-all-your-money-goals-small.png')}
        imageSmall2xSrc={require('./dashflow-track-all-your-money-goals-small@2x.png')}
        url="http://dashflow.co/"
        buttonText="Check Out DashFlow"
      />
      <CustomerSection
        theme="gray"
        headline="Laundry Guide"
        textline={`Forget about lengthy searching for the meaning of clothing labels. With Laundry Guide, you can scan
          your label to get all the necessary wash and care instructions in seconds.`}
        imageSrc={require('./laundry-guide.png')}
        image2xSrc={require('./laundry-guide@2x.png')}
        imageSmallSrc={require('./laundry-guide-small.png')}
        imageSmall2xSrc={require('./laundry-guide-small@2x.png')}
        googlePlayUrl="https://play.google.com/store/apps/details?id=com.aexol.laundryapp"
        itunesUrl="https://itunes.apple.com/us/app/laundry-guide-care-symbols/id1091572208"
      />
      <CTASection />
      <Footer />
    </div>
  );
};
