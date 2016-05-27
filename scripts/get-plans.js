import fs from 'fs';
import config from '../config/';
import axios from 'axios';

const fetchPlans = () => {
  const plansUrl = `${config.syncanoAPIBaseUrl}v1.1/billing/plans/`;

  axios.get(plansUrl).then((response) => {
    return fs.writeFileSync(`${__dirname}/../pricing-plans.json`, JSON.stringify(response.data.objects[0]))
  });
};

fetchPlans();
