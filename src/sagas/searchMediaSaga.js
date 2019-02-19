import { put, call } from 'redux-saga/effects';
import { flickImages, shuttertockVideos } from '../Api/api';
import * as types from '../actions/types';


// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.

export function* searchMediaSaga({ payload }){
    try {
        const video = yield call(shuttertockVideos, payload);
        const images = yield call(flickImages, payload);

        yield[
           put({ type: types.SHUTTER_VIDEOS_SUCCESS, videos }),
           put({ type: types.FLICKR_IMAGES_SUCCESS, images})
        ];
    } catch(err){
        yield[
            put({ type: types.SEARCH_MEDIA_ERROR, error})
        ]
    }
}

