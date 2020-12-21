import axios from 'axios';
import { createUrl } from './utils';
import { APP_MODE } from '../constants.utils';
import HTTPClient from './http';

const API = HTTPClient;

function FETCH(url, params = {}) {
  return API.get(createUrl(url), params);
}

function POST(url, params = {}) {
  return API.post(createUrl(url), params);
}

function PUT(url, params = {}) {
  return API.put(createUrl(url), params);
}

function DELETE(url, params = {}) {
  return API.delete(createUrl(url), params);
}

export {
  FETCH,
  POST,
  PUT,
  DELETE,
}

export default API