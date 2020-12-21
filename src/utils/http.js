import axios from 'axios';
import { APP_MODE } from './constants.utils';

const username = APP_MODE === "PROD" ? process.env.REACT_APP_PROD_USER : process.env.REACT_APP_DEV_USER;
const password = APP_MODE === "PROD" ? process.env.REACT_APP_PROD_PASSWORD : process.env.REACT_APP_DEV_PASSWORD;

const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
const HTTPClient = axios.create({
    baseURL: APP_MODE === "PROD" ? process.env.REACT_APP_PROD_API : process.env.REACT_APP_DEV_API,
    headers:{
        'Authorization': `Basic ${token}` ,
        'Content-Type': 'application/json',
    },
    timeout: 30000
});

export default HTTPClient;