import React from 'react';

import SyncanoOverviewSection from './SyncanoOverviewSection';
import PromoteSyncanoSection from './PromoteSyncanoSection';

const BetaDialogContent = () => {
  return (
    <div className="beta-dialog-content">
      <div className="promote-syncano-section">
        <PromoteSyncanoSection />
      </div>
      <div className="syncano-overview-section">
        <SyncanoOverviewSection />
      </div>
    </div>
  );
};

export default BetaDialogContent;
