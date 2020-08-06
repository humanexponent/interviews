
import { GET_TESTS, GET_TESTS_SUCCESS } from "../actions/constants";

const initialState = {
  tests: null,
  loading: false
}

const homeReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        tests: action.payload
      };
    case GET_TESTS:
      return {
        ...state,
        loading: true
      };
    default:
      return initialState;
  }
};

export default homeReducer;
