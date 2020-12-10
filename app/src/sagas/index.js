import { all } from 'redux-saga/effects';
import { docker } from './docker';

export default function* rootSaga() {
    yield all([
        docker()
    ]);
}
