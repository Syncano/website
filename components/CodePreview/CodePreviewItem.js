import React from 'react';
import { PrismCode } from 'react-prism';
import classNames from 'classnames';

const CodePreviewItem = ({ code, languageClassName, isActive }) => {
  const getCodePreviewItemClassName = () => {
    return classNames({
      'code-preview__content__item': true,
      'code-preview__content__item--is-active': (isActive)
    });
  };

  return (
    <div className={getCodePreviewItemClassName()}>
      <pre className="line-numbers">
        <PrismCode className={`language-${languageClassName}`}>
          {code}
        </PrismCode>
      </pre>
    </div>
  );
};

export default CodePreviewItem;
