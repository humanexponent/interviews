import { GET_TESTS, GET_TESTS_SUCCESS, GET_TEST, GET_TEST_SUCCESS } from "./constants.js";

export const getTests = () => ({
  type: GET_TESTS,
});

export const getTestsSuccess = (data) => ({
  type: GET_TESTS_SUCCESS,
  payload: data
});

export const getTest = (id) => ({
  type: GET_TEST,
  payload: id,
});

export const getTestSuccess = (data) => ({
  type: GET_TEST_SUCCESS,
  payload: data,
});
