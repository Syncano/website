import React from 'react';
import classNames from 'classnames';
import { PrismCode } from 'react-prism';
import TerminalHeaderButtons from './TerminalHeaderButtons';

const Terminal = ({ title = 'bash', languageClassName = 'bash', code, bottomShadow }) => {
  const className = classNames({
    'terminal': true,
    'terminal--bottom-shadow': bottomShadow
  });

  return (
    <div className={className}>
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
};

export default Terminal;
