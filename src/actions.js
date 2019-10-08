import {put, takeEvery} from 'redux-saga/effects'
import createSagaMiddleware from "redux-saga";

export const postTextAction = (text) => ({
    type: "POST_TEXT_PENDING",
    payload: {
        text
    },
    meta: {
        offline: {
            effect: {
                url: 'https://online-offline-backend.apps.pcfone.io/reverse-me',
                method: 'POST',
                json: {text}
            },
            commit: {type: 'POST_TEXT_SUCCESS'},
            rollback: {type: 'POST_TEXT_FAILURE'}
        }
    }
});

function* getString(action) {
    console.log("in the saga")
    try {
        const stuff = yield fetch("https://online-offline-backend.apps.pcfone.io/reverse-me");
        const text = yield stuff.text()
        yield put({type: "REVERSE_TEXT_FETCHED", payload: text});
    } catch (e) {
        yield put({type: "REVERSE_TEXT_FETCHED_FAILED", message: e.message});
    }
}

export function* mySaga() {
    yield takeEvery("POST_TEXT_SUCCESS", getString);
}


export const sagaMiddleware = createSagaMiddleware();