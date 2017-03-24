import React from 'react';

const SocialButton = (props) => {
  const styles = {
    button: {
      border: '10px',
      boxSizing: 'border-box',
      fontFamily: 'Avenir, sans-serif',
      cursor: 'pointer',
      textDecoration: 'none',
      outline: 'none',
      transform: 'translate(0px, 0px)',
      position: 'relative',
      width: '100%',
      height: 40,
      borderRadius: '2px',
      transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      textAlign: 'center'
    },
    onHover: {
      backgroundColor: '#ddd'
    }
  };

  return (
    <div
      style={{ ...props.style }}
    >
      <button
        style={{ ...styles.button, ...props.style }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default SocialButton;
