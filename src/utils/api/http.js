import axios from 'axios';
import { APP_MODE } from '../constants.utils';

const username = APP_MODE === "DEV" ? process.env.REACT_APP_DEV_USER : process.env.REACT_APP_PROD_USER;
const password = APP_MODE === "DEV" ? process.env.REACT_APP_DEV_PASSWORD : process.env.REACT_APP_PROD_PASSWORD;

const default_client = () => {
    let api = axios;
    const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

    api.defaults.headers.common['Authorization'] = `Basic ${token}`;
    api.defaults.headers.common['Content-Type'] = 'application/json';
    api.defaults.timeout = 30000;

    api.interceptors.response.use(function (response) {

      return response;
    }, function (error) {
      if (error.response && error.response.status === 400) {
        
      }
      
      return Promise.reject(error);
    });
  
    return { ...api}
}

const HTTPClient = default_client();
export default HTTPClient;