import {GET_MEMO, REMOVE_MEMO, GET_RIG_INFO, UPDATE_REALTIME} from "./types";
import {Action} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppState} from "./index";
import {pdsaGetMemos, pdsaGetRigInfo} from "../connector/pdsa";
import {MemoResponseType, RigActivityResponseType, RealtimeMessageType} from "../connector/pdsaTypes";

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


export function GetRigInfoActionCreator(info: RigActivityResponseType) {
    return {
        type: GET_RIG_INFO,
        payload: info,
    };
}

export function UpdateRealtimeActionCreator( realtimeMessage: RealtimeMessageType) {
    return {
        type: UPDATE_REALTIME,
        payload: realtimeMessage,
    }
}

export function GetMemoAsyncDispatchCreator(): ThunkAction<void, AppState, null, Action<string>> {
    return async dispatch => {
        const asyncResp: string = await pdsaGetMemos();

        const memoResponse: MemoResponseType = JSON.parse(asyncResp);

        dispatch(
            GetMemoActionCreator(memoResponse)
        );
    }
};

export function GetRigInfoAsyncDispatchCreator(): ThunkAction<void, AppState, null, Action<string>> {
    return async dispatch => {
        const asyncResp:string = await pdsaGetRigInfo();

        const rigActivityResponse: RigActivityResponseType = JSON.parse(asyncResp);

        dispatch(
            GetRigInfoActionCreator(rigActivityResponse)
        );
    }
};

