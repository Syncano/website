import Header from '../../components/shared/header'
import Footer from '../../components/shared/footer'
import CTA from '../../components/shared/cta'
import Head from '../../components/ui/head'
import Link from '../../components/ui/link'
import Page from '../../components/ui/page'
import Text from '../../components/ui/text'
import Grid from '../../components/ui/grid'
import TermsSidebar from './components/sidebar'

const PrivacyPolicy = () => (
  <Page>
    <Head>
      <title>Privacy Policy - Syncano</title>
    </Head>

    <Header
      title='Privacy Policy'
      subtitle='Learn more about our terms and policies'
      />

    <div className='Section u-wrapper'>
      <Grid>
        <div className='Section__sidebar'>
          <TermsSidebar />
        </div>

        <div className='Section__content'>
          <Text>
            <p>Your privacy is important, so Syncano has created the following Privacy Policy to let you know what information we collect when you visit our website, why we collect it and how it is used.</p>
            <p>This Privacy Policy is governed by our <Link to='/terms-of-service'>Terms of Service</Link>. By using the Syncano Website, you consent to the data practices described in this statement. We may periodically make changes to this Privacy Policy that we will include on this page. It is Your responsibility to review this Privacy Policy frequently and remain informed about any changes to it, so we encourage You to visit this page often.</p>

            <h3>What Information Is Collected?</h3>
            <p>“Personally identifiable information” means any information that may be used to identify an individual, including, but not limited to, a first and last name, home or other physical address, an email address, phone number or other contact information, whether at work or at home. When You use the Syncano Website or Services Syncano may collect from You the following personally identifiable information: first and last name, city, state and zip code, email address, birthday and phone number. Syncano also automatically receives and records information on our server logs from your browser, including your IP address, cookie information and the page You request. You can choose not to provide us with certain information, but then You might not be able to take advantage of many of the Services’ features.</p>
            <p>Syncano may keep a cached copy of the content You serve us as a part of your use of the service for an indeterminate amount of time, including media files and XML files. To assist in development, we may keep copies of HTTP requests and responses in your notification log, available only to You.</p>

            <h3>How Is Such Information Used?</h3>
            <p>Syncano uses the personally identifiable and other collected information in a manner that is consistent with this Privacy Policy. If You provide personally identifiable information for a certain reason, we may use the personally identifiable information in connection with the reason for which it was provided. For instance, if You contact us by e-mail, we will use the personally identifiable information you provide to answer Your question or resolve Your problem. Also, if You provide personally identifiable information in order to obtain access to the Syncano Website or Services, we will use such information to provide You with access to such services and to monitor Your use of such services. Your personally identifiable information may be used to provide You with new product information and support services offered on the Syncano Website, to notify you of technical updates or changes in policy, to improve the content and functionality of the Syncano Website and Services, to help us better understand our users, or to deliver other services.</p>

            <h3>Is The Information Shared or Disclosed?</h3>
            <p>Syncano is not in the business of selling your information. We consider this information to be a vital part of our relationship with You. There are, however, certain circumstances in which we may share your personally identifiable information with certain third parties without further notice to You, as set forth below:</p>
            <ul>
              <li>Third Party Applications and Services: If You elect to use one or more third party applications that interoperate with the Service, those applications may upon Your election be given access to data (which may include personally identifiable information) on Syncano's systems generated in connection with Your use of the Service. Please remember that Syncano is not responsible for the policies and practices of third party application providers, and Syncano shall have no liability arising from any action of any such provider as it concerns Your data or information or otherwise. In connection with your use of any such third party applications, please review carefully the applicable privacy policies each such third party application provider to become familiar with their policies and practices as it concerns your data and information.</li>
              <li>Business Transfers: As we develop our business, we might sell or buy businesses or assets. In the event of a corporate sale, merger, reorganization, dissolution or similar event, personally identifiable information may be part of the transferred assets. You acknowledge that such transfers may occur, and that any acquirer or successor of Syncano may continue to use Your information as set forth in this policy.</li>
              <li>Related Companies: We may also share your personally identifiable information with any entity that is affiliated with us for purposes consistent with this Privacy Policy.</li>
              <li>Agents, Consultants and Related Third Parties: Syncano, like many businesses, sometimes uses other companies to perform certain business-related functions. Examples of such functions include mailing information, maintaining databases and processing payments. When we employ another company to perform a function of this nature, we only provide them with the information that they need to perform their specific function.</li>
              <li>Legal Requirements and Other Circumstances: Syncano may disclose Your personally identifiable information if required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, (ii) protect and defend the rights or property of Syncano, (iii) act in urgent circumstances to protect the personal safety of users of the Syncano Website or Services or the public, or (iv) protect against legal liability.</li>
              <li>The Security of Your Information</li>
              <li>We will take reasonable precautions to protect personally identifiable information in our possession from loss, misuse, and unauthorized access, disclosure, alteration, and destruction. We follow generally accepted industry standards to protect the personally identifiable information submitted to us, both during transmission and once we receive it. No method of transmission over the Internet or method of electronic storage is, however, 100% secure. Therefore, while we strive to use commercially acceptable means to protect Your personally identifiable information, we cannot guarantee its absolute security.</li>
            </ul>

            <h3>Cookies</h3>
            <p>Cookies are small text files stored by Your browser in Your computer when you visit the Syncano Website. Cookies permit us to recognize users and avoid repetitive requests for the same information. Most browsers will accept cookies until you change your browser settings to refuse them. This privacy statement covers the use of cookies by Syncano and does not cover the use of cookies by any other third party.</p>

            <h3>Forums and Comments</h3>
            <p>If You use the forum or post comments on the Syncano Website, You should be aware that any personally identifiable information You submit there can be read, collected, or used by other users of these forums, and could be used to send You unsolicited messages. Syncano is not responsible for any personally identifiable information you choose to submit in that context or anything arising from such submissions.</p>

            <h3>Links to Other Sites</h3>
            <p>This website may contain links to other sites that are not owned or controlled by us. Please be aware that Syncano is not responsible for the privacy policies of such other sites. We encourage You to be aware when You leave our site and to read the privacy statements of each and every website that collects personally identifiable information. This privacy policy applies only to information collected by this website.</p>

            <h3>Your Consent To This Privacy Policy</h3>
            <p>By using Syncano, You agree to this Privacy Policy. This is our entire and exclusive Privacy Policy and it supersedes any earlier version. Our <Link to='/terms-of-service'>Terms of Service</Link> take precedence over any conflicting Privacy Policy provision. We may change this Privacy Policy by posting a new version of this Privacy Policy on this website which it is your responsibility to review. We encourage You to periodically review this Privacy Policy to stay informed about how we are protecting the personally identifiable information we collect. Your continued use of the Syncano Website or Services constitutes Your agreement to this Privacy Policy and any updates.</p>

            <h3>Legal Disclaimer</h3>
            <p>Syncano operates “AS-IS” and “AS-AVAILABLE,” without liability of any kind. Syncano is not responsible for events beyond our direct control.</p>

            <p><i>Last updated April 9th 2017</i></p>
          </Text>
        </div>
      </Grid>
    </div>

    <CTA />
    <Footer />

    <style jsx>{`
      :global(.AppContainer) {
        background: rgba(244, 246, 248, 1) linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
      }

      .Section {
        max-width: 1040px;
      }

      @media screen and (max-width: 740px) {
        .Section > :global(*) {
          flex-wrap: wrap;
        }

        .Section__sidebar {
          margin-bottom: 30px;
          width: 100%;
        }
      }
    `}</style>
  </Page>
)

export default PrivacyPolicy
