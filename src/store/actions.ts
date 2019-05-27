import { ADD_TRACE, REMOVE_TRACE } from "./types";

export function AddTraceAction(newTrace: string) {
    return {
        type: ADD_TRACE,
        payload: newTrace,
    };
}

export function RemoveTraceAction() {
    return {
        type: REMOVE_TRACE,
    };
}
