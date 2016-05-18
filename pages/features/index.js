import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, ColumnParagraphs, Footer, PageHeader, ScreenDescriptions } from '../../components';

export default () => {
  return (
    <DocumentTitle title="Features">
      <div>
        <PageHeader
          headline="Features"
          textline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ScreenDescriptions headline="Data Management">
          <ScreenDescriptions.Screen
            imageSrc={require('./screen-1.jpg')}
            image2xSrc={require('./screen-1@2x.jpg')}
            imageSmallSrc={require('./screen-1-small.jpg')}
            imageSmall2xSrc={require('./screen-1-small@2x.jpg')}
            headline="Define Your Classes"
            text={`Control how you define the templates for each of your data objects. Every data object you create will
              be defined by your own customized class.`}
          />
          <ScreenDescriptions.Screen
            variant="image-right"
            imageSrc={require('./screen-2.jpg')}
            image2xSrc={require('./screen-2@2x.jpg')}
            imageSmallSrc={require('./screen-2-small.jpg')}
            imageSmall2xSrc={require('./screen-2-small@2x.jpg')}
            headline="Customize Class Schemas"
            text={`Create fields with specific types to give you complete flexibility with no loss in complexity. Our
              pre-set custom fields supporting several different data types include string, text, integer, float,
              boolean, datetime, file and reference. Arrays are coming soon!`}
          />
          <ScreenDescriptions.Screen
            imageSrc={require('./screen-3.jpg')}
            image2xSrc={require('./screen-3@2x.jpg')}
            imageSmallSrc={require('./screen-3-small.jpg')}
            imageSmall2xSrc={require('./screen-3-small@2x.jpg')}
            headline="Objects"
            text={`Store your data on Syncano’s relational database as JSON objects that contain key-value pairs that
              you define. Control what your users have access to. Define your own data views on the backend instead of
              updating every client-side application.`}
          />
          <ScreenDescriptions.Screen
            variant="image-right"
            imageSrc={require('./screen-4.jpg')}
            image2xSrc={require('./screen-4@2x.jpg')}
            imageSmallSrc={require('./screen-4-small.jpg')}
            imageSmall2xSrc={require('./screen-4-small@2x.jpg')}
            headline="Query Away!"
            text={`Query your data based on any existing field or customized field for each of your objects. Get back
              the data you need with complex filtering and ordering! `}
          />
        </ScreenDescriptions>
        <ColumnParagraphs headline="Server-side Code">
          <ColumnParagraphs.Paragraph
            iconSrc={require('./snippets.svg')}
            headline="Snippets (Scripts)"
            text={`Scripts are snippets of code that allow you to run complex code on Syncano’s servers. We support a
              wide range of languages including NodeJS, Python, Swift, Golang, PHP or Ruby. Learn about all the ways you
              can run them under Automations.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./snippet-endpoint.svg')}
            headline="Snippet Endpoint"
            text={`Each Snippet comes with the ability to enable or disable their public endpoint. Make POST or GET
              requests to your Snippet and open up the possibility of how and where to run your Snippet Script.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./cloud-code-editor.svg')}
            headline="Cloud Code Editor"
            text={`Edit your Snippet Script with our Dashboard. Our code editor allows you to write, run and trace your
              code right inside our Dashboard. Now you can work on your app all in one place.`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./environmental-variables.svg')}
            headline="Environmental Variables"
            text={`Each Snippet can be set to environmental variables stored in your configuration settings. Store API
              keys and frequently used variables in a more permanent way!`}
          />
          <ColumnParagraphs.Paragraph
            iconSrc={require('./integrate.svg')}
            headline="Integrate"
            text={`Connect your app with our constantly updating list of integrations. We’ll help you stay up-to-date
              with new integrations, keeping your app up-to-speed with the rest of the world.`}
          />
        </ColumnParagraphs>
        <CTASection>
          <h2>Set up your backend in minutes</h2>
          <Link
            className="button button--large button--featured"
            to="/about/"
          >
            Get Started for Free
          </Link>
          <p className="cta-section__button-description">
            6 months free &bull; No credit card required
          </p>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
