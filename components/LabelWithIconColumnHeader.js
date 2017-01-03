import React from 'react';

const LabelWithIconColumnHeader = ({ label, imgSrc }) => (
  <div className="label-with-icon-column-header">
    <div className="label-with-icon-column-header__label">
      {label}
    </div>
    <div className="label-with-icon-column-header__image">
      <img
        src={imgSrc}
        alt={label}
      />
    </div>
  </div>
);

export default LabelWithIconColumnHeader;
