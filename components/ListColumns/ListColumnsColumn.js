import React from 'react';
import _ from 'lodash';

export default ({ listItems }) => {
  return (
    <div className="list-columns__columns__column">
      <ul>
        {listItems.map((listItem) => (
          <li key={_.kebabCase(listItem)}>
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
