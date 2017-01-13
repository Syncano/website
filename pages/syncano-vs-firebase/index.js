import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
  BrowserWindow,
  CardTestimonials,
  Check,
  ContentSection,
  CTASection,
  Footer,
  LabelWithIconColumnHeader,
  PageHeader,
  PageHelmet,
  ParagraphDivider,
  Table,
  TextWithBottomImage,
  TextWithImage
} from '../../components';

const SyncanoVsFirebasePage = (props) => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Syncano vs Firebase Comparison - The Alternative to Firebase"
        mixpanelTitle="Syncano vs Firebase"
        description={`Syncano is a developer platform for rapid backend development. See how it compares to Google’s
          Firebase.`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        iconSrc={require('./syncano-vs-firebase.svg')}
        iconAlt="Syncano vs Firebase"
        headline="Syncano vs Firebase"
        textline={`Syncano is a developer platform for rapid backend development. See how it compares to Google’s
          Firebase.`}
      />
      <TextWithBottomImage
        theme="gray"
        headline="Syncano offers server-side code. No outsourcing required."
        textline={`Syncano allows you to build custom functions and micro-services with cloud server-side Scripts,
          enabling you keep your resources in one place. Firebase would prefer that you outsource those resources to AWS
          or Google Cloud Platform.`}
        image={
          <BrowserWindow variant="large">
            <picture>
              <source
                media="(min-width: 321px)"
                srcSet={`${require('./syncano-offers-server-side-code-no-outsourcing-required-small.png')} 1x, ${require('./syncano-offers-server-side-code-no-outsourcing-required-small@2x.png')} 2x`}
              />
              <source srcSet={`${require('./syncano-offers-server-side-code-no-outsourcing-required.png')} 1x, ${require('./syncano-offers-server-side-code-no-outsourcing-required@2x.png')} 2x`} />
              <img
                src={require('./syncano-offers-server-side-code-no-outsourcing-required-small@2x.png')}
                alt="Collaborate better with our Dashboard"
              />
            </picture>
          </BrowserWindow>
        }
      />
      <TextWithBottomImage
        headline="With Syncano you can schedule or trigger tasks"
        textline={<span>Syncano gives you the tools to set a specific function or service to run on a custom schedule
          set by you. In addition, you can create custom functions that are triggered based on changes in your data such
          as <em>create</em>, <em>update</em>, or <em>delete</em>!</span>}
        image={
          <BrowserWindow variant="large">
            <picture>
              <source
                media="(min-width: 321px)"
                srcSet={`${require('./with-syncano-you-can-schedule-or-trigger-tasks-small.png')} 1x, ${require('./with-syncano-you-can-schedule-or-trigger-tasks-small@2x.png')} 2x`}
              />
              <source srcSet={`${require('./with-syncano-you-can-schedule-or-trigger-tasks.png')} 1x, ${require('./with-syncano-you-can-schedule-or-trigger-tasks@2x.png')} 2x`} />
              <img
                src={require('./with-syncano-you-can-schedule-or-trigger-tasks-small@2x.png')}
                alt="With Syncano you can schedule or trigger tasks"
              />
            </picture>
          </BrowserWindow>
        }
      />
      <TextWithBottomImage
        theme="gray"
        headline="Data Management with Syncano is easier"
        textline={`Managing a database as a large JSON can be quite overwhelming, which is why we decided to focus on
          your productivity. With Syncano, the database consists of typed fields and data rows, similar to most other
          traditional databases. Get going fast without needing documentation.`}
        image={
          <BrowserWindow variant="large">
            <picture>
              <source
                media="(min-width: 321px)"
                srcSet={`${require('./data-management-with-syncano-is-easier-small.png')} 1x, ${require('./data-management-with-syncano-is-easier-small@2x.png')} 2x`}
              />
              <source srcSet={`${require('./data-management-with-syncano-is-easier.png')} 1x, ${require('./data-management-with-syncano-is-easier@2x.png')} 2x`} />
              <img
                src={require('./data-management-with-syncano-is-easier-small@2x.png')}
                alt="Data Management with Syncano is easier"
              />
            </picture>
          </BrowserWindow>
        }
      />
      <TextWithBottomImage
        headline="Syncano has better data query functionalities"
        textline={`Syncano gives you access to multi-field data queries and the freedom to define which fields are
          searchable. Unlike Firebase, Syncano gives you precision without building any of the sorting algorithms
          yourself.`}
        image={
          <BrowserWindow variant="large">
            <picture>
              <source
                media="(min-width: 321px)"
                srcSet={`${require('./syncano-has-better-data-query-functionalities-small.png')} 1x, ${require('./syncano-has-better-data-query-functionalities-small@2x.png')} 2x`}
              />
              <source srcSet={`${require('./syncano-has-better-data-query-functionalities.png')} 1x, ${require('./syncano-has-better-data-query-functionalities@2x.png')} 2x`} />
              <img
                src={require('./syncano-has-better-data-query-functionalities-small@2x.png')}
                alt="Syncano has better data query functionalities"
              />
            </picture>
          </BrowserWindow>
        }
      />
      <CardTestimonials>
        <CardTestimonials.Card
          headline="For business developers:"
          textline="Scale your venture faster."
          link1To="/enterprises/"
          link1Text="Enterprise"
          link2To="/startups/"
          link2Text="Startup"
          authorImgSrc={require('./stale-husby@2x.jpg')}
          quote={`If Syncano was around at the time we created our MVP, it would have saved us a full year to get into
            the market.`}
          author="Ståle Husby, CEO, Relinklabs"
        />
        <CardTestimonials.Card
          headline="For software developers:"
          textline="Build more code faster."
          link1To="/mobile-developers/"
          link1Text="Mobile"
          link2To="/full-stack-developers/"
          link2Text="Full stack"
          authorImgSrc={require('./artur-czemiel@2x.jpg')}
          quote="We managed to build, launch and succeed with our Pokemon Go map app in just 48 hours of programming."
          author="Artur Czemiel, developer & founder, Aexol"
        />
      </CardTestimonials>
      <ContentSection headline="See how Syncano services compare to Firebase">
        <Table>
          <tr>
            <th>Features</th>
            <th className="txt-center">
              <LabelWithIconColumnHeader
                label="Syncano"
                imgSrc={require('./syncano.svg')}
              />
            </th>
            <th className="txt-center">
              <LabelWithIconColumnHeader
                label="Firebase"
                imgSrc={require('./firebase.svg')}
              />
            </th>
          </tr>
          <tr>
            <td>Cloud Server-side Scripts</td>
            <td><Check /></td>
            <td><Check is={false} /></td>
          </tr>
          <tr>
            <td>Quick User Authentication and Management</td>
            <td><Check /></td>
            <td><Check /></td>
          </tr>
          <tr>
            <td>Reliable Database Storage and Management</td>
            <td><Check /></td>
            <td><Check /></td>
          </tr>
          <tr>
            <td>Real-time messaging and Push Notifications</td>
            <td><Check /></td>
            <td><Check /></td>
          </tr>
          <tr>
            <td>Production-grade web hosting</td>
            <td><Check /></td>
            <td><Check /></td>
          </tr>
          <tr>
            <td>Trigger and schedule tasks</td>
            <td><Check /></td>
            <td><Check is={false} /></td>
          </tr>
        </Table>
      </ContentSection>
      <TextWithImage
        theme="gray"
        headline="Syncano is available on-premise"
        textline={`The entire Syncano platform is available to be installed on-premise, and the process is simple and
          stress-free. On-premise installation will give you all of the following benefits:`}
        image={
          <img
            src={require('./syncano-is-available-on-premise.svg')}
            alt="Syncano is available on-premise"
          />
        }
      >
        <div className="text-with-image__text__list">
          <ul>
            <li>Complete control and regulation of your data</li>
            <li>Decreased latency with an on-site server</li>
            <li>Increased visibility of your data and it’s location</li>
          </ul>
        </div>
      </TextWithImage>
      <ContentSection
        variant="narrow"
        headline="One last thing you should know about Syncano"
      >
        <p>
          The Syncano community is one of the greatest benefits for new users. Our users share information with each
          other, offer help, and provide one of the greatest resources a developer can ask for - usable code examples.
        </p>
        <p>
          When creating custom functions using Syncano, you can easily share this code with developers in the community,
          as well as use code made by other community members as a catalyst for your own!
        </p>
        <p>
          In addition to sharing resources and code, Syncano
          has <a href="http://docs.syncano.io/docs/syncano-libraries/" target="_blank">open-sourced all libraries</a> and
          the <a href="https://www.syncano.io/blog/open-source-dashboard/" target="_blank">Dashboard</a>. This makes it
          easier to have your ideas heard, and to give back to the community.
        </p>
        <ParagraphDivider />
        <p>
          You now know the difference between Syncano and Firebase! Hopefully this short guide was useful and gives you
          a general overview of how Syncano compares to Firebase.
        </p>
        <p>
          Switching to Syncano is easy, and we have a dedicated support team to give you a hand with migrating your
          data. If you still have
          questions, <a href="https://www.syncano.io/slack-invite/" target="_blank">join the Syncano community on Slack</a> to
          get instant answers!
        </p>
        <p>
          Hit the button below to give Syncano a try. It’s completely free for 30 days, no obligation or credit cards
          required.
        </p>
      </ContentSection>
      <CTASection
        headline="Ready to give Syncano a try?"
        textline="Start a free trial and build your app!"
      />
      <Footer />
    </div>
  );
};

export default SyncanoVsFirebasePage;
