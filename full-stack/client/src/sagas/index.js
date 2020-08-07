import { all } from 'redux-saga/effects'
import homeSagas from './home.js'
import testSagas from './test.js'

function* rootSaga() {
  yield all([
    ...homeSagas, ...testSagas
  ])
}

export default rootSaga
