import React from 'react';
import Prism from 'prismjs';
import { PrismCode } from 'react-prism';
import classNames  from 'classnames';

const CodePreviewItem = ({ code, languageClassName, isActive }, { codePreview }) => {
  const getCodePreviewItemClassName = () => {
    return classNames({
      'code-preview__content__item': true,
      'code-preview__content__item--is-active': (isActive)
    });
  };

  return (
    <div className={getCodePreviewItemClassName()}>
      <PrismCode className={`language-${languageClassName}`}>
        {code}
      </PrismCode>
    </div>
  );
};

CodePreviewItem.contextTypes = {
  codePreview: React.PropTypes.object
};

export default CodePreviewItem;
