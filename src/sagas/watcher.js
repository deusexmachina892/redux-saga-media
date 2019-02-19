import { takeLatest } from 'redux-saga/effects';
import { searchMediaSaga } from './mediaSaga';
import * as types from '../actions/types';

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export default function* watchSearchMedia() {
  yield takeLatest(types.SEARCH_MEDIA_REQUEST, searchMediaSaga);
}