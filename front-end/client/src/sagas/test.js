import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import { GET_TEST } from "../actions/constants";
import { getTestSuccess, getTestFailure } from '../actions/index'

function* getTestSaga(action) {
  try {
    const resp = yield call(() => axios.get(`/api/tests/${action.payload}`))

    yield put(getTestSuccess(resp.data))
  } catch (error) {
    yield put(getTestFailure(error))
  }
}

export default [takeLatest(GET_TEST, getTestSaga)]
