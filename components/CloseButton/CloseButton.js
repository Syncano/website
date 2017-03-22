import React from 'react';

const CloseButton = (props, context) => {
  const styles = {
    button: {
      position: 'absolute',
      top: 5,
      right: 10,
      width: 48,
      height: 48,
      padding: 12,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
  console.log('context', context);
  return (
    <div
      style={{ ...props.style, ...styles.button }}
      onClick={() => context.closeBanner()}
    >
      x
    </div>
  );
};

CloseButton.contextTypes = {
  closeBanner: React.PropTypes.func
};

export default CloseButton;
