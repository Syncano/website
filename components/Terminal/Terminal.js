import React from 'react';
import { PrismCode } from 'react-prism';
import TerminalHeaderButtons from './TerminalHeaderButtons';

const Terminal = ({ title = 'bash', languageClassName = 'bash', code }) => (
  <div className="terminal">
    <header className="terminal__header">
      <TerminalHeaderButtons />
      <div className="terminal__header__title">
        {title}
      </div>
    </header>
    <div className="terminal__content">
      <pre>
        <PrismCode className={`language-${languageClassName}`}>
          {code}
        </PrismCode>
      </pre>
    </div>
  </div>
);

export default Terminal;
