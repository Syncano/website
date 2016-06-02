import fs from 'fs';
import config from '../config/';
import axios from 'axios';

const fetchPlans = () => {
  const apiUrl = config.syncanoAPIBaseUrl;
  const plansUrl = `${apiUrl}v1.1/billing/plans/`;

  console.error('env', process.env.NODE_ENV);
  console.error('config', config);
  console.error('url', plansUrl);

  axios.get(plansUrl).then((response) => {
    console.error('response', response);
    return fs.writeFileSync(`${__dirname}/../pricing-plans.json`, JSON.stringify(response.data.objects[0]))
  }).catch((error) => console.error('error', error));
};

fetchPlans();
