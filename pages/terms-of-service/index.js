import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, Footer, PageHeader, TermsAndLegal } from '../../components';

export default () => {
  return (
    <DocumentTitle title="Terms and Legal">
      <div>
        <PageHeader
          headline="Terms and Legal"
          textline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <TermsAndLegal>
          <TermsAndLegal.Item title="Terms of Service">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
            lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci
            orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin lorem
            eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.</p>
            <h4>Lorem ipsum dolor sit consectetur</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
            lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.</p>
          </TermsAndLegal.Item>
          <TermsAndLegal.Item title="Acceptable Use Policy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
            lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci
            orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin lorem
            eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.</p>
          </TermsAndLegal.Item>
          <TermsAndLegal.Item title="General Terms and Conditions">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
            lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci
            orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin lorem
            eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.</p>
          </TermsAndLegal.Item>
          <TermsAndLegal.Item title="Privacy Policy">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique,
            lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos.</p> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci
            orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin lorem
            eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.</p>
          </TermsAndLegal.Item>
        </TermsAndLegal>
        <CTASection>
          <h2>Rethink how you build apps. Go serverless!</h2>
          <Link
            to="/about/"
            className="button button--large button--featured"
          >
            Get Started for Free
          </Link>
          <p className="cta-section__button-description">
            (6 months free &bull; No credit card required)
          </p>
        </CTASection>
        <Footer />
      </div>
    </DocumentTitle>
  );
};
