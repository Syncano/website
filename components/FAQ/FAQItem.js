import React from 'react';

export default ({ question, answerHTML }) => {
  return (
    <div className="faq-item">
      <h3 className="faq-item__title">{question}</h3>
      <div
        className="faq-item__content"
        dangerouslySetInnerHTML={{__html: answerHTML}}
      />
    </div>
  );
}
