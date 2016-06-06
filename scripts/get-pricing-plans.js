import fs from 'fs';
import axios from 'axios';
import APP_CONFIG from '../config/';

const fetchPlans = () => {
  const plansUrl = `${APP_CONFIG.syncanoAPIBaseUrl}v1.1/billing/plans/`;

  axios
    .get(plansUrl)
    .then((response) => {
      return fs.writeFileSync(`${__dirname}/../data-pricing-plans.json`, JSON.stringify(response.data.objects[0]));
    })
    .catch((error) => console.error('error', error));
};

fetchPlans();
