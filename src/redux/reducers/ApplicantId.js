import { APPLICANTID } from "../Types";

const INITIAL_STATE = {
    data: '',
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case APPLICANTID:
        return {...state, data: action.payload};
      default:
        return state;
    }
  };