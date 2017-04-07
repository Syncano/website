import Footer from '../components/shared/footer'
import Header from '../components/shared/header'
import CTA from '../components/shared/cta'
import Head from '../components/ui/head'
import Page from '../components/ui/page'
import Text from '../components/ui/text'

const Landing = () => (
  <Page>
    <Head>
      <title>Syncano</title>
    </Head>

    <Header
      title='FAQ'
      subtitle='Frequently Asked Questions about Syncano'
      />

    <div className='Section u-wrapper'>
      <Text>
        <h3>How is Syncano different from other cloud backend products?</h3>
        <p>Syncano has been created with developers in mind; built for engineers by engineers. During the development of the latest version, we carefully listened to the feedback and learned our lessons. The outcome is a tool that seamlessly integrates with your workflow and takes it to the next level. With Syncano, working with the backend feels like http://locallhost.</p>

        <h3>How does your pricing model work?</h3>
        <p>Operations on Syncano are based on the number of API calls and the time it takes to execute the backend script code inside of the sockets you use. We have monthly pricing plans that include a fixed amount of API calls and script execution time. The basic plan of USD 25 includes 1 million API calls and 270k script seconds, which should usually cover around 1000 daily users making several requests through your frontend.</p>

        <h3>What happens if I exceed my usage?</h3>
        <p>Your application will continue to work without any interruptions, regardless of the usage of the backend. If you exceed your usage, overage fees will appear as a separate bill at the end of the month, which is our billing period. You can change your plan at any time and set limits to notify you in the event of getting close to exceeding your current plan.</p>

        <h3>What will happen if my app gets popular and attracts millions of users?</h3>
        <p>Will be as excited as you! You don’t need to worry about scaling issues, as our infrastructure will scale along with the load of your users. We have a proven track record of handling millions of API requests daily.</p>

        <h3>Where are the libraries for iOS and Android?</h3>
        <p>Syncano is currently in beta and we provide a client library for JavaScript. We are also working on the iOS, Android and Unity libraries and they will be released very soon. <a href='https://www.syncano.io/slack-invite/'>Ask us on Slack</a> to get the ETAs.</p>

        <h3>How can I get support?</h3>
        <p>You can join our <a href='https://www.syncano.io/slack-invite/'>Slack channel</a> for community support, talk to us via the messenger in the <a href='https://dashboard.syncano.io/'>Dashboard</a> after you log in, or simply <a href='mailto:support@syncano.io'>send us an email</a>. You can also browse through our documentation.</p>
      </Text>
    </div>

    <CTA />
    <Footer />

    <style jsx>{`
      .Section {
        max-width: 670px;
      }
    `}</style>
  </Page>
)

export default Landing
