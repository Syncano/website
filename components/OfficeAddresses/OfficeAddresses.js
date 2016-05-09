import React from 'react';
import OfficeAddressesItem from './OfficeAddressesItem';

export default () => {
  return (
    <div className="office-addresses">
      <div className="inner">
        <OfficeAddressesItem
          imageSrc={require('./images/flag-us.svg')}
          title="USA East Coast"
          address={<p>60 Madison Avenue, 12th Floor<br />New York, NY 10010</p>}
        />
        <OfficeAddressesItem
          imageSrc={require('./images/flag-us.svg')}
          title="USA West Coast"
          address={<p>1933 Davis St. #249<br />94577 San Leandro, CA</p>}
        />
        <OfficeAddressesItem
          imageSrc={require('./images/flag-pl.svg')}
          title="Poland"
          address={<p>Al. Jerozolimskie 81<br />02-001 Warsaw Poland</p>}
        />
        <OfficeAddressesItem
          imageSrc={require('./images/flag-us.svg')}
          title="Norway"
          address={<p>Stortingsgata 30<br />0161 Oslo Norway</p>}
        />
      </div>
    </div>
  );
};
