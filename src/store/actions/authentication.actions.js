import { 
  ACTION_REQUEST,
} from "../constants/authentication.constants";

export const actioNRequest = (params) => {
  return {
    type: ACTION_REQUEST,
    params
  };
}
