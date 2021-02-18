import { takeEvery, take, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';

//blocking vs non blocking effects

function* handleImagesLoad() {
    console.log('loading images');
}

function* handleDang() {
    console.log('Dng');
}

function* rootSaga() {
    // NON BLOCKING TAKEEVERY
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
    yield takeEvery('DANG', handleDang);

    yield take(IMAGES.LOAD);
    yield call(handleImagesLoad);

    yield take('DANG');
    yield call(handleDang);
}
export default rootSaga;
