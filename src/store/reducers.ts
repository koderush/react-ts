import {
    GET_MEMO, REMOVE_MEMO, MemoActionTypes, MemoState, RigInfoState, RigInfoActionType, GET_RIG_INFO
} from "./types";

const initialMemoState: MemoState = {
    memos: [],
};

const initialRigInfoState: RigInfoState = {
    info: "N/A",
};

export function MemoReducer(
    state = initialMemoState,
    action: MemoActionTypes
): MemoState {
    switch (action.type) {
        case GET_MEMO:
            return {
                memos: action.payload.data.memos,
            };
        case REMOVE_MEMO:
            return {
                memos: state.memos.slice(0,state.memos.length - 1),
            };
        default:
            return state;
    }
}

export function RigInfoReducer(
    state = initialRigInfoState,
    action: RigInfoActionType
): RigInfoState {
    switch (action.type) {
        case GET_RIG_INFO:
            return {
                info: action.payload,
            };
        default:
            return state;
    }
}

