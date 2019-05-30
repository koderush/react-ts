import {GET_MEMO, REMOVE_MEMO, GET_RIG_INFO, MemoType, MemoResponseType} from "./types";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppState} from "./index";
import {pdsaGetMemos, pdsaGetRigInfo} from "../connector/pdsa";

export function GetMemoActionCreator(memoResponse: MemoResponseType) {
    return {
        type: GET_MEMO,
        payload: memoResponse,
    };
}

export function RemoveMemoActionCreator() {
    return {
        type: REMOVE_MEMO,
    };
}


export function GetRigInfoActionCreator(info: string) {
    return {
        type: GET_RIG_INFO,
        payload: info,
    };
}

export function GetMemoAsyncDispatchCreator(): ThunkAction<void, AppState, null, Action<string>> {
    return async dispatch => {
        const asyncResp:string = await pdsaGetMemos();

        const memoResponse: MemoResponseType = JSON.parse(asyncResp);

        dispatch(
            GetMemoActionCreator(memoResponse)
        );
    }
};

export function GetRigInfoAsyncDispatchCreator(): ThunkAction<void, AppState, null, Action<string>> {
    return async dispatch => {
        const asyncResp = await pdsaGetRigInfo();
        dispatch(
            GetRigInfoActionCreator(asyncResp)
        );
    }
};

