
export const ADD_TRACE = "ADD_TRACE";
export const REMOVE_TRACE = "REMOVE_TRACE";

export interface AddTraceActionType {
    type: typeof ADD_TRACE;
    payload: string;
}

export interface RemoveTraceActionType {
    type: typeof REMOVE_TRACE;
    payload: string;
}

export type TraceActionTypes = AddTraceActionType | RemoveTraceActionType;


export interface TraceState {
    traces: string[];
}
