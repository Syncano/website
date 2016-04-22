import React from 'react';
import _ from 'lodash';

export default ({ list }) => {
  return (
    <div className="list-columns__columns__column">
      <ul>
        {list.map((listItem) => (
          <li key={_.kebabCase(listItem)}>
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
