import {ADD_TRACE, REMOVE_TRACE} from "./types";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppState} from "./index";

export function AddTraceActionCreator(newTrace: string) {
    return {
        type: ADD_TRACE,
        payload: newTrace,
    };
}

export function RemoveTraceActionCreator() {
    return {
        type: REMOVE_TRACE,
    };
}

export const thunkAddTrace = (): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
    const asyncResp = await exampleAPI();
    dispatch(
        AddTraceActionCreator(asyncResp)
    );
};

function exampleAPI() {
    return Promise.resolve("Asynch Trace");
}
