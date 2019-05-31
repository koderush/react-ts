import {
    MemoResponseType, MemoType, RigActivityResponseType, WellSiteType, RealtimeValueType, RealtimeMessageType
} from "../connector/pdsaTypes";

export const GET_MEMO = "ADD_MEMO";
export const REMOVE_MEMO = "REMOVE_MEMO";
export const UPDATE_REALTIME = "UPDATE_REALTIME";
export const GET_RIG_INFO = "GET_RIG_INFO";

export interface GetMemoActionType {
    type: typeof GET_MEMO;
    payload: MemoResponseType;
}

export interface RemoveMemoActionType {
    type: typeof REMOVE_MEMO;
}

export interface MemoState {
    memos: MemoType[];
}

export type MemoActionTypes = GetMemoActionType | RemoveMemoActionType;


export interface RigInfoActionType {
    type: typeof GET_RIG_INFO;
    payload: RigActivityResponseType;
}

export interface RigInfoState {
    info: WellSiteType;
}

export interface UpdateRealtimeActionType {
    type: typeof UPDATE_REALTIME;
    payload: RealtimeMessageType;
}

export interface RealtimeState {
    realtimeValues: RealtimeValueType[];
}

