import Footer from '../../components/shared/footer'
import Header from '../../components/shared/header'
import CTA from '../../components/shared/cta'
import Head from '../../components/ui/head'
import Link from '../../components/ui/link'
import Page from '../../components/ui/page'
import Text from '../../components/ui/text'
import Grid from '../../components/ui/grid'
import TermsSidebar from './components/sidebar'

const TermsOfService = () => (
  <Page>
    <Head>
      <title>Acceptable Use Policy - Syncano</title>
    </Head>

    <Header
      title='Acceptable Use Policy'
      subtitle='Learn more about our terms and policies'
      />

    <div className='Section u-wrapper'>
      <Grid>
        <div className='Section__sidebar'>
          <TermsSidebar />
        </div>

        <div className='Section__content'>
          <Text>
            <p>This Acceptable Use Policy describes actions that Syncano prohibits when You use its Services. The Acceptable Use Policy is governed by our <Link to='/terms-of-service'>Terms of Service</Link>. Our <Link to='/terms-of-service'>Terms of Service</Link> take precedence over any conflicting Acceptable Use Policy provision. BY USING SYNCANO AND THE SYNCANO WEBSITE, YOU CONSENT TO THE TERMS AND CONDITIONS OF THIS ACCEPTABLE USE POLICY. IF YOU DO NOT AGREE TO THIS ACCEPTABLE USE POLICY PLEASE DO NOT USE THE WEBSITE AND/OR SERVICES.</p>
            <p>Syncano may in its sole discretion determine whether You are in violation of this Acceptable Use Policy. The Services may be used only for lawful purposes and may not be used for any illegal activities. Using the Services in an illegal, abusive or any other manner that interferes with or diminishes others’ use and enjoyment of the Services is prohibited.</p>
            <p>The following list gives examples of illegal, abusive, interfering or otherwise unacceptable or inappropriate behavior while using the Services. This list is provided by way of example and shall not be considered exhaustive.</p>

            <ul>
              <li>Adversely impacting the availability, reliability, or stability of Syncano's Services.</li>
              <li>Launching or facilitating, whether intentionally or unintentionally, a denial of service attack on any of Syncano's Services.</li>
              <li>Attempting to bypass or break any security mechanism on any of the Services or using the Services in any other manner that poses a security or service risk to Syncano, to any user of our Services, or to any of our or their respective customers.</li>
              <li>Testing or reverse-engineering the Services in order to find limitations, vulnerabilities or evade filtering capabilities.</li>
              <li>Using the Services in any manner that may subject Syncano or any third party to liability, damages or danger.</li>
              <li>Using the Services in any manner that violates any applicable third party policies or requirements that Syncano has communicated to the customer.</li>
              <li>Engaging in fraud with respect to Your account.</li>
              <li>Using Your account to engage in fraudulent activity with respect to third parties or otherwise.</li>
              <li>Using any of the Syncano Properties or Syncano Marks other than as expressly permitted in the Terms of Service</li>
              <li>Transmitting any material that may infringe the intellectual property rights or other rights of third parties, including but not limited to trademark, copyright or rights of publicity or otherwise violating, infringing, or misappropriating the rights of any third party.</li>
              <li>Engaging in spamming or other unsolicited advertising, marketing or other activities,.</li>
              <li>Using the Services in connection with any unsolicited or harassing messages (commercial or otherwise).</li>
              <li>Promoting or engaging in illegal activities.</li>
              <li>Engaging in activities or transmitting through the Services any information that may be libelous or defamatory or otherwise malicious or harmful to any person or entity, or discriminatory based on race, sex, religion, nationality, disability, sexual orientation, or age.</li>
              <li>Harvesting or otherwise collecting information about others, including email addresses or phone numbers, from Syncano's Website without their express consent.</li>
              <li>Creating a false identity or forged email address or header, or phone number, or otherwise attempting to mislead others as to the identity of the sender using Your account.</li>
              <li>Transmitting any material that contains viruses, trojan horses, worms or any other malicious, harmful, or deleterious programs.</li>
              <li>Violating or facilitating the violation of any U.S. or foreign law regarding the transmission of technical data or software.</li>
            </ul>

            <p>Using the Services, or a component of the Services, in a manner not authorized by Syncano.</p>

            <h3>Remedies</h3>

            <p>Violation of this Acceptable Use Policy may result in the immediate suspension or termination of Your account, civil and/or criminal liability, and Syncano may, in addition to any remedy that it may have at law or in equity, terminate permission for You to use the Services. In such event, You are still liable for any and all outstanding charges accumulated through Your use of the Services, including uses in violation of this Acceptable Use Policy or the laws of any jurisdiction. In addition, Syncano may investigate incidents that are contrary to this Acceptable Use Policy and provide requested information to third parties who have provided notice to Syncano stating that they have been harmed by Your failure to abide by this Acceptable Use Policy. Syncano’s failure to enforce this policy in each and every instance in which it might have application does not amount to a waiver of Syncano’s rights hereunder.</p>

            <h3>Changes To The Acceptable Use Policy</h3>

            <p>We reserve the right to change the Acceptable Use Policy from time to time without notice by posting changes to Syncano’s website. When we do, we will also revise the “last update” date of the Acceptable Use Policy.</p>

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

export default TermsOfService
