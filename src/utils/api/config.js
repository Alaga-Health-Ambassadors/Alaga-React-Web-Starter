import { APP_MODE } from '../constants.utils';

const defaultUrl = (APP_MODE === 'DEV') ? process.env.REACT_APP_DEV_API : process.env.REACT_APP_PROD_API
const defaultErrorMessage = 'Oops. Something went wrong.'

export { defaultUrl, defaultErrorMessage }