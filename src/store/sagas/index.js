import { all } from 'redux-saga/effects';
import watchAuthAction from './gameApiSaga';

export default function* rootSaga() {
  yield all([watchAuthAction()]);
}
