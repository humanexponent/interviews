import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import { GET_TESTS } from "../actions/constants";
import { getTestsSuccess } from '../actions/index'

function* getTestsSaga(action) {
  try {
    const resp = yield call(() => axios.get(`/api/tests`, action.payload))

    yield put(getTestsSuccess(resp.data))
  } catch (error) {

  }
}

export default [takeLatest(GET_TESTS, getTestsSaga)]
