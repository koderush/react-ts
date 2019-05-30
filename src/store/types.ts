import {MemoResponseType, MemoType, RigActivityResponseType, WellSiteType} from "../connector/pdsaTypes";

export const GET_MEMO = "ADD_MEMO";
export const REMOVE_MEMO = "REMOVE_MEMO";

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

// RigInfo
export const GET_RIG_INFO = "GET_RIG_INFO";

export interface RigInfoActionType {
    type: typeof GET_RIG_INFO;
    payload: RigActivityResponseType;
}

export interface RigInfoState {
    info: WellSiteType;
}

