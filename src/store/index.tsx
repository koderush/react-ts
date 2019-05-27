import {createStore, combineReducers} from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension';

import {TraceReducer} from "./reducers";

const rootReducer = combineReducers({
    traceReducer: TraceReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(rootReducer, devToolsEnhancer({}));

    return store;
}
