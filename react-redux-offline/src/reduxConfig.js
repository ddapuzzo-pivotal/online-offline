import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createOffline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import {mySaga, sagaMiddleware} from "./actions";
import {composeWithDevTools} from "redux-devtools-extension";

const reducer = (state = "NOTHING_YET", action) => {
    if (action.type === "POST_TEXT_PENDING") {
        return `Waiting for internet... ${action.payload.text}`
    } else if (action.type === "POST_TEXT_PENDING") {
        return "Sorry, we had a problem saving your message."
    } else if (action.type === "POST_TEXT_SUCCESS") {
        return "Saved! Getting Translation."
    } else if (action.type === "REVERSE_TEXT_FETCHED") {
        return `${action.payload}`
    } else if (action.type === "REVERSE_TEXT_FETCHED_FAILED") {
        return "Sorry, we had a problem getting your message."
    } else {
        return state;
    }
};

const rootReducer = combineReducers({
    monitor: reducer
});

const middlewareList = [
    sagaMiddleware
];

const {
    middleware: offlineMiddleware,
    enhanceReducer,
    enhanceStore
} = createOffline(offlineConfig);

const middleware = applyMiddleware(...middlewareList, offlineMiddleware);

export const store = createStore(
    enhanceReducer(rootReducer),
    composeWithDevTools(enhanceStore, middleware)
);
sagaMiddleware.run(mySaga);