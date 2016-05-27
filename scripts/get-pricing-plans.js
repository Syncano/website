import fs from 'fs';
import config from '../config/';
import axios from 'axios';
const ENV = process.env.NODE_ENV || 'development';

const fetchPlans = () => {
  const apiUrl = ENV === 'development' ? config.syncanoAPIBaseUrl : process.env[config.syncanoAPIBaseUrl];
  const plansUrl = `${apiUrl}v1.1/billing/plans/`;

  axios.get(plansUrl).then((response) => {
    return fs.writeFileSync(`${__dirname}/../pricing-plans.json`, JSON.stringify(response.data.objects[0]))
  });
};

fetchPlans();
