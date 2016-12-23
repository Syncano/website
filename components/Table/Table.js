import React from 'react';

const Table = ({ children }) => (
  <div className="table">
    <table>
      {children}
    </table>
  </div>
);

export default Table;
