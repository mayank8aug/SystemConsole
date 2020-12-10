import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { types } from '../actions/docker';

export function* getImages() {
    try {
        const url = 'http://localhost:3001/api/docker/images';
        const response = yield call(axios.get, url);
        yield put({
          type: types.GET_IMAGES_SUCCESS,
          data: response.data
        });
      } catch (error) {
        console.log('Request failed! Could not fetch images.');
        yield put({
          type: types.GET_IMAGES_FAIL,
          error: error
        });
      }
}

export function* docker() {
    yield all([
      takeLatest(types.GET_IMAGES, getImages)
    ]);
}
