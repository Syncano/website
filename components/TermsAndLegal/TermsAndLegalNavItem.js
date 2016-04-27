import React from 'react';

export default ({ title, slug }) => {
  return (
    <li>
      <a href={`#${slug}`}>
        {title}
      </a>
    </li>
  );
};
