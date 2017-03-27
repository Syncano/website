import React from 'react';

const CloseButton = (props, context) => {
  return (
    <div
      className="close-button"
      style={{ ...props.style }}
      onClick={() => context.closeBanner()}
    >
      X
    </div>
  );
};

CloseButton.contextTypes = {
  closeBanner: React.PropTypes.func
};

export default CloseButton;
