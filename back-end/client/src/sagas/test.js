import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'

import { GET_TEST, SUBMIT_ANSWERS } from "../actions/constants";
import { getTestSuccess, submitAnswersSuccess } from '../actions/index'

function* getTestSaga(action) {
  try {
    const resp = yield call(() => axios.get(`/api/tests/${action.payload}`))

    yield put(getTestSuccess(resp.data))
  } catch (error) {

  }
}

function* submitAnswersSaga(action) {
  try {
    const {quizId, userAnswers} = action.payload

    const resp = yield call(() => axios.post(`/api/tests/submitAnswers/${quizId}`, { userAnswers }))

    yield put(submitAnswersSuccess(resp.data.results))
  } catch (error) {

  }
}

export default [
  takeLatest(GET_TEST, getTestSaga),
  takeLatest(SUBMIT_ANSWERS, submitAnswersSaga)
]
