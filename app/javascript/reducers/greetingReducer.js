import { FETCH_GREETING_SUCCESS } from '../actions/greetingActions';

const initialState = {
  message: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_GREETING_SUCCESS:
      return {
        message: action.payload
      }
    default:
      return state;
  }
}
