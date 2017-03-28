import React from 'react';

const SocialButton = (props) => {
  const style = {
    button: {
      cursor: 'pointer'
    }
  };

  return (
    <div style={props.style}>
      <button
        className="social-button"
        style={{ ...props.style, ...style.button }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default SocialButton;
