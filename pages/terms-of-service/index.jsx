import React from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { CTASection, Footer, PageHeader, TermsAndLegal } from '../../components';

export default () => (
  <DocumentTitle title="Terms and Legal">
    <div>
      <PageHeader
        headline="Terms and Legal"
        textlineHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <TermsAndLegal
        items={[
          {
            'key': 'terms-of-service',
            'title': 'Terms of Service',
            'contentHTML': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique, lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin lorem eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.</p><h4>Lorem ipsum dolor sit consectetur</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique, lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>'
          },
          {
            'key': 'acceptable-use-policy',
            'title': 'Acceptable Use Policy',
            'contentHTML': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique, lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin lorem eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.</p>'
          },
          {
            'key': 'general-terms-and-conditions',
            'title': 'General Terms and Conditions',
            'contentHTML': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique, lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin lorem eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.</p>'
          },
          {
            'key': 'privacy-policy',
            'title': 'Privacy Policy',
            'contentHTML': '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, nisi vel molestie tristique, lorem nisi faucibus metus, tincidunt vestibulum purus nibh at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam, diam a consectetur congue, orci orci tincidunt risus, in mattis ipsum justo at ipsum. Donec luctus bibendum dictum. Donec sollicitudin lorem eget iaculis dapibus. Vivamus lectus ipsum, sodales sed luctus feugiat, dictum et est.</p>'
          }
        ]}
      />
      <CTASection>
        <Link
          to="/terms-of-service/"
          className="button button--large button--featured"
        >
          Get Started for Free
        </Link>
      </CTASection>
      <Footer />
    </div>
  </DocumentTitle>
);
