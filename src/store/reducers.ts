import {
    GET_MEMO, REMOVE_MEMO, MemoActionTypes, MemoState, RigInfoState, RigInfoActionType,
    GET_RIG_INFO, RealtimeState, UPDATE_REALTIME, UpdateRealtimeActionType
} from "./types";

const initialMemoState: MemoState = {
    memos: [],
};

const initialRigInfoState: RigInfoState = {
    info: {
        wellGuid: "",
        name: "",
        numGovt: "",
        timeZone: "",
        operator: "",
        dataHubOperatorIdentifier: 0,
        spudTime: 0,
        releaseTime: 0,
        groundElevation: "",
        wellCrs: "",
        tightHoleStatus: "",
        status: "",
        wellSiteLocale: {},
        wellVisitUids: {},
        wellBoreUids: {},
        wellLocationUid: "",
        uid: {},
    },
};

const initialRealtimeState: RealtimeState = {
    realtimeValues: [],
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
                memos: state.memos.slice(0, state.memos.length - 1),
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
                info: action.payload.wellSite,
            };
        default:
            return state;
    }
}

export function RealtimeReducer(
    state = initialRealtimeState,
    action: UpdateRealtimeActionType
): RealtimeState {
    switch (action.type) {
        case UPDATE_REALTIME:
            return {
                realtimeValues: action.payload.values,
            };
        default:
            return state;
    }
}

