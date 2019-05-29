import { ADD_TRACE, REMOVE_TRACE } from "./types";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "./index";

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

export function AsyncActionCreator(): ThunkAction<void, AppState, null, Action<string>> {
    return async dispatch => {
        const asyncResp = await httpGet('http://localhost:3000/manifest.json');
        dispatch(
            AddTraceActionCreator(asyncResp)
        );
    }
};

async function httpGet(url: string): Promise<string> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.text() as Promise<string>
        })
}
