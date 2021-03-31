
import { GET_TEST, GET_TEST_SUCCESS, GET_TEST_FAILURE } from "../actions/constants";

const initialState = {
  test: null,
  loading: false,
  loaded: null,
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        test: action.payload,
        loaded: true
      };
    case GET_TEST_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false
      }
    case GET_TEST:
      return {
        ...state,
        test: null,
        loading: true,
        loaded: null,
      };
    default:
      return initialState;
  }
};

export default homeReducer;
