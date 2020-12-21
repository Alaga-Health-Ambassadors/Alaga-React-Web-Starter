import { 
    ACTION_REQUEST,
} from "../constants/authentication.constants";

const INITIAL_STATE = {
    stored_value: null,
};

const authenticationReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
    
        case ACTION_REQUEST:
            return {
                ...state,
                stored_value: action.params,
            }
    };
}

export default authenticationReducer;
