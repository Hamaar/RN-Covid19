import axios from 'axios';
import {
  URL_API,
  BY_COUNTRY,
  DAILY_REPORT,
  OTHER_COUNTRY_REPORT,
  URL_API_V2,
} from './const';

const getIndonesiaReport = () => {
  return axios
    .get(URL_API + BY_COUNTRY)
    .then(response => {
      console.log('Respon GET Indonesia Report : ', response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err.response);
    });
};

const getGlobalReport = () => {
  return axios
    .get(URL_API)
    .then(response => {
      console.log('Respon GET Global Report : ', response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err.response);
    });
};

const getDailyReport = () => {
  return axios
    .get(URL_API + DAILY_REPORT)
    .then(response => {
      console.log('Respon GET Daily Report : ', response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err.response);
    });
};

const getAllCountryReport = () => {
  return axios
    .get(URL_API + OTHER_COUNTRY_REPORT)
    .then(response => {
      console.log('Respon GET Other Country Report : ', response.data);

      return response.data;
    })
    .catch(err => {
      console.log(err.response);
    });
};

const getAllApiReport = () => {
  return axios
    .get(URL_API_V2)
    .then(response => {
      console.log('Respon GET All Api Report : ', response.data);

      return response.data;
    })
    .catch(err => {
      console.log(err.response);
    });
};

export {
  getIndonesiaReport,
  getGlobalReport,
  getDailyReport,
  getAllCountryReport,
  getAllApiReport,
};
