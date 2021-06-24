
import { GET_TEST, GET_TEST_SUCCESS, SUBMIT_ANSWERS, SUBMIT_ANSWERS_SUCCESS } from "../actions/constants";

const initialState = {
  test: null,
  results: null,
  loading: false
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        test: action.payload
      };
    case GET_TEST:
    case SUBMIT_ANSWERS:
      return {
        ...state,
        loading: true
      };
    case SUBMIT_ANSWERS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    default:
      return initialState;
  }
};

export default homeReducer;
