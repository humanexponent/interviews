import { all } from 'redux-saga/effects'
import homeSagas from './home.js'

function* rootSaga() {
  yield all([
    ...homeSagas
  ])
}

export default rootSaga
