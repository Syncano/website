import React from 'react';

const SocialButton = (props) => {

  return (
    <div
      style={{ ...props.style }}
    >
      <button
        className="social-button"
        style={{ ...props.style }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default SocialButton;
