
export const ADD_TRACE = "ADD_TRACE";
export const REMOVE_TRACE = "REMOVE_TRACE";

export interface AddTraceAction {
    type: typeof ADD_TRACE;
    payload: string;
}

export interface RemoveTraceAction {
    type: typeof REMOVE_TRACE;
    payload: string;
}

export type TraceActionTypes = AddTraceAction | RemoveTraceAction;

// export interface VersionState {
//     version: string;
// }

export interface TraceState {
    traces: string[];
}
