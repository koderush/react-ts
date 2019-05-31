import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import {MemoReducer, RigInfoReducer, RealtimeReducer} from "./reducers";

const rootReducer = combineReducers({
    memoReducer: MemoReducer,
    rigInfoReducer: RigInfoReducer,
    realtimeReducer: RealtimeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));

    return store;
}
