import { IMAGE_ARRAY } from "../Types";

const INITIAL_STATE = {
    data: [],
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case IMAGE_ARRAY:
        return {...state, data: action.payload};
      default:
        return state;
    }
  };