import { GET_TESTS, GET_TESTS_SUCCESS } from "./constants.js";

export const getTests = () => ({
  type: GET_TESTS,
});

export const getTestsSuccess = (data) => ({
  type: GET_TESTS_SUCCESS,
  payload: data
});
