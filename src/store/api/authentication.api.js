/** Call all api functions here */
import {
    POST
} from '../../utils/api/index';

import {
    actionRequest,
} from '../actions';

import {
    errorhandler
} from '../api';

import { 
    apiEndpoints
} from '../../utils/api/endpoints';

export function requestLoginAPI(params){
    return dispatch => {
        dispatch(actionRequest(params));
        POST(apiEndpoints.API_URL, params)
        .then(response => {
            if(response.error) {
                throw(response.error);
            }
            dispatch(actionRequest(response));
            return response;
        })
        .catch(error => {
            dispatch(actionRequest(errorhandler(error)));
        })
    }
}