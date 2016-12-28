import React from 'react';

const Table = ({ children }) => (
  <div className="table">
    <table>
      <tbody>
        {children}
      </tbody>
    </table>
  </div>
);

export default Table;
