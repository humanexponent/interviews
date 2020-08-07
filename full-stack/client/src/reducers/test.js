
import { GET_TEST, GET_TEST_SUCCESS } from "../actions/constants";

const initialState = {
  test: null,
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
      return {
        ...state,
        loading: true
      };
    default:
      return initialState;
  }
};

export default homeReducer;
