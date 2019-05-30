// Memos
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
    payload: string;
}

export interface RigInfoState {
    info: string;
}

export interface MemoType {
    identifier: string;
    creationTime: number;
    displayTime: number;
    text: string;
}

export interface MemosType {
    memos: MemoType[];
}
export interface MemoResponseType {
    data: MemosType;
}
