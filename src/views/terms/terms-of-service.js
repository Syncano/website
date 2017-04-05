import Head from '../../components/head'
import Page from '../../components/page'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Text from '../../components/text'
import Grid from '../../components/grid'
import TermsSidebar from './sidebar'
import CTA from '../../components/cta'

const Landing = ({
  stores: {ui: {flags}},
  services: {ui: {toggleFlag}}
}) => (
  <Page>
    <Head>
      <title>Terms and Legal - Syncano</title>
    </Head>

    <Header
      title='Terms and Legal'
      subtitle='Learn more about our terms and policies'
      />

    <div className='Section u-wrapper'>
      <Grid>
        <div>
          <TermsSidebar />
        </div>

        <Text>
          <h2>Terms of Service</h2>
          <p>In order to use the Syncano API (the “Syncano API” or “API”), access the information contained on the Syncano website (the “Website”) or make use of the services provided by Syncano (the “Service” or “Services”), you (hereinafter referred to as “You”) must first read this agreement (the “Agreement”) and accept it. You may not make use of the Syncano API, Website or Services if You do not accept this Agreement and the terms therein. You accept the terms of the Agreement by clicking accept, by agreeing to the terms of the Agreement in the user interface for any Syncano Service, or by using the Syncano API or Services. In the latter case, You understand and agree that we will treat Your use of the Services as acceptance of the terms from that point onwards. BY USING THE SERVICE AND THE WEBSITE, YOU CONSENT TO THE TERMS AND CONDITIONS OF THESE TERMS OF SERVICE. IF YOU DO NOT AGREE TO THESE TERMS OF SERVICE PLEASE DO NOT USE THE WEBSITE AND/OR SERVICES. By putting a check mark next to I AGREE and clicking on SUBMIT or using the API or Services, You represent that You have read and agree to the terms and conditions of this Agreement which also include and incorporate Syncano’s Acceptable Use Policy, General Terms and Conditions and Privacy Policy.</p>
          <p>These terms and conditions will remain in effect throughout Your use of the Services and continue after this Agreement expires, cancels or is terminated. These terms and conditions are legally binding should You choose to register for the Service. You may not use the API or Services and may not accept the terms if (a) You are not of legal age to form a binding contract with us, or (b) You are a person barred from receiving the Services under the laws of the United States or other countries including the country in which You are resident or from which You use the Services.</p>

          <h3>H3 heading should look like this</h3>
          <p>These terms and conditions will remain in effect throughout Your use of the Services and continue after this Agreement expires, cancels or is terminated. These terms and conditions are legally binding should You choose to register for the Service. You may not use the API or Services and may not accept the terms if (a) You are not of legal age to form a binding contract with us, or (b) You are a person barred from receiving the Services under the laws of the United States or other countries including the country in which You are resident or from which You use the Services.</p>

          <ul>
            <li>These terms and conditions will remain in effect throughout Your use of the Services</li>
            <li>and continue after this Agreement expires, cancels or is terminated.</li>
            <li>These terms and conditions are legally binding should</li>
            <li>You choose to register for the Service.</li>
            <li>You may not use the API or Services and may not accept the terms if</li>
          </ul>

          <p>These terms and conditions will remain in effect throughout Your use of the Services and continue after this Agreement expires, cancels or is terminated. These terms and conditions are legally binding should You choose to register for the Service. You may not use the API or Services and may not accept the terms if (a) You are not of legal age to form a binding contract with us, or (b) You are a person barred from receiving the Services under the laws of the United States or other countries including the country in which You are resident or from which You use the Services.</p>

          <h4>H4 heading should look like this</h4>
          <p>These terms and conditions will remain in effect throughout Your use of the Services and continue after this Agreement expires, cancels or is terminated. These terms and conditions are legally binding should You choose to register for the Service. You may not use the API or Services and may not accept the terms if (a) You are not of legal age to form a binding contract with us, or (b) You are a person barred from receiving the Services under the laws of the United States or other countries including the country in which You are resident or from which You use the Services.</p>

          <h5>H5 & H6 headings should look like this</h5>
          <p>These terms and conditions will remain in effect throughout Your use of the Services and continue after this Agreement expires, cancels or is terminated. These terms and conditions are legally binding should You choose to register for the Service. You may not use the API or Services and may not accept the terms if (a) You are not of legal age to form a binding contract with us, or (b) You are a person barred from receiving the Services under the laws of the United States or other countries including the country in which You are resident or from which You use the Services.</p>
        </Text>
      </Grid>
    </div>

    <CTA />
    <Footer />

    <style jsx>{`
      .Section {
        max-width: 940px;
      }
    `}</style>
  </Page>
)

export default Landing
