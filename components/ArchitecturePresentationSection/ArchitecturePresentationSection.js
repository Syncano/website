import React from 'react';
import { Breakpoint } from 'react-responsive-grid';
import _ from 'lodash';

import ArchitecturePresentationMobileInfo from './ArchitecturePresentationMobileInfo';
import ArchitecturePresentation from './ArchitecturePresentation';

const ArchitecturePresentationSection = () => (
  <div>
    <ArchitecturePresentationMobileInfo />
    <Breakpoint
      minWidth={1300}
      widthMethod="pageWidth"
    >
      <ArchitecturePresentation />
    </Breakpoint>
  </div>
);

export default ArchitecturePresentationSection;
